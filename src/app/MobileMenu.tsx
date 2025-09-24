"use client";

import SearchField from "@/components/SearchField";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import UserButton from "@/components/UserButton";
import { twConfig } from "@/lib/utils";
import { members } from "@wix/members";
import { collections } from "@wix/stores";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface MobileMenuProps {
  collections: collections.Collection[];
  loggedInMember: members.Member | null;
}

export default function MobileMenu({
  collections,
  loggedInMember,
}: MobileMenuProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > parseInt(twConfig.theme.screens.lg)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <Button
        size="icon"
        variant="ghost"
        className="inline-flex lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="left"
          className="flex h-full w-full flex-col p-6 sm:max-w-sm"
        >
          {/* Header */}
          <SheetHeader className="mb-6">
            <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
          </SheetHeader>

          {/* Search */}
          <SearchField className="mb-6 w-full" />

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="flex flex-col space-y-4 text-base font-medium">
              <li>
                <Link
                  href="/shop"
                  className="block w-full text-left hover:text-primary"
                >
                  Shop
                </Link>
              </li>
              {collections.map((collection) => (
                <li key={collection._id}>
                  <Link
                    href={`/collections/${collection.slug}`}
                    className="block w-full text-left hover:text-primary"
                  >
                    {collection.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* User Section at bottom */}
          <div className="mt-8 border-t pt-6">
            <UserButton loggedInMember={loggedInMember} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
