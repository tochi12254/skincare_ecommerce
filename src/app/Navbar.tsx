import logo from "@/assets/logo.png";
import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getCart } from "@/wix-api/cart";
import { getCollections } from "@/wix-api/collections";
import { getLoggedInMember } from "@/wix-api/members";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import MainNavigation from "./MainNavigation";
import MobileMenu from "./MobileMenu";
import ShoppingCartButton from "./ShoppingCartButton";

export default async function Navbar() {
  const wixClient = getWixServerClient();

  const [cart, loggedInMember, collections] = await Promise.all([
    getCart(wixClient),
    getLoggedInMember(wixClient),
    getCollections(wixClient),
  ]);

  return (
    <header className="bg-background shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Left section (Logo + Desktop Nav) */}
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center gap-3">
            <Image src={logo} alt="Skincare logo" width={40} height={40} />
            <span className="text-xl font-bold">Skincare</span>
          </Link>
          <MainNavigation
            collections={collections}
            className="hidden lg:flex"
          />
        </div>

        {/* Center section (Search - only on lg+) */}
        <SearchField className="hidden max-w-96 lg:inline" />

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* Desktop: user + cart */}
          <UserButton
            loggedInMember={loggedInMember}
            className="hidden lg:inline-flex"
          />
          <ShoppingCartButton initialData={cart} />

          {/* Mobile: menu beside cart */}
          <div className="flex items-center gap-2 lg:hidden">
            <Suspense>
              <MobileMenu
                collections={collections}
                loggedInMember={loggedInMember}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  );
}
