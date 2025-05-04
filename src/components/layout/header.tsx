"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Import for mobile menu
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const mainNavItems = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Gallery", href: "/gallery" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-serif font-bold text-2xl md:text-3xl text-primary">
                Motley Hair
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-foreground/80"
                )}
              >
                {item.title}
              </Link>
            ))}
            <Button asChild className="bg-secondary hover:bg-secondary/90 ml-2">
              <Link href="/booking">Book Now</Link>
            </Button>
          </nav>
          
          {/* Mobile navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 text-base">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col w-full">
                <div className="flex flex-col gap-6 mt-10">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-xl font-serif transition-colors",
                        pathname === item.href
                          ? "text-primary font-semibold"
                          : "text-foreground/80"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Button asChild className="bg-secondary hover:bg-secondary/90 w-full mt-6">
                    <Link href="/booking">Book Now</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
