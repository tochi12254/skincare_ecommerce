import banner from "@/assets/banner.jpg";
import Product from "@/components/Product";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getCollectionBySlug } from "@/wix-api/collections";
import { queryProducts } from "@/wix-api/products";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-secondary md:flex-row md:h-[500px]">
        {/* Left Text Content */}
        <div className="z-10 flex flex-col items-center space-y-6 px-6 py-10 text-center md:w-1/2 md:items-start md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl">
            Glow Beyond Skin Deep
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground md:text-xl">
              Nourish, protect, and reveal your natural radiance with skincare made just for you.
          </p>
          <Button asChild size="lg" className="px-8 py-6">
            <Link href="/shop" className="flex items-center">
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Right Banner Image */}
        <div className="relative hidden h-full w-1/2 md:block">
          <Image
            src={banner}
            alt="Skincare banner"
            className="h-full w-full object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent" />
        </div>
      </section>

      {/* Featured Products Section */}
      <Suspense fallback={<LoadingSkeleton />}>
        <FeaturedProducts />
      </Suspense>
    </main>
  );
}

async function FeaturedProducts() {
  const wixClient = getWixServerClient();

  const collection = await getCollectionBySlug(wixClient, "featured-products");

  if (!collection?._id) {
    return null;
  }

  const featuredProducts = await queryProducts(wixClient, {
    collectionIds: collection._id,
  });

  if (!featuredProducts.items.length) {
    return null;
  }

  return (
    <div className="space-y-5 mt-3">
      <h2 className="text-2xl font-bold">Featured Products</h2>
      <div className="flex grid-cols-2 flex-col gap-5 sm:grid md:grid-cols-3 lg:grid-cols-4">
        {featuredProducts.items.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="flex grid-cols-2 flex-col gap-5 pt-12 sm:grid md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-[26rem] w-full" />
      ))}
    </div>
  );
}
