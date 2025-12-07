"use client";

import Link from "next/link";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, GraduationCap, Users, ShieldCheck } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/bu-ugnayan logo.svg" 
                alt="BU Ugnayan Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">BU-Ugnayan</span>
            </Link>
          </div>
          
          {/* Desktop Navigation Menu - Centered */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <NavigationMenu viewport={isMobile}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="#about">About</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="#features">Features</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="#mobile">Mobile</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="#roles">Users</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Theme Toggle - Right Side */}
          <div className="hidden md:flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                Login
                <ChevronDown className="ml-2 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <a 
                    href="https://bu-ugnayan.org/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer flex items-center gap-2"
                  >
                    <GraduationCap className="h-4 w-4" />
                    Student
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://bu-ugnayan.org/faculty/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer flex items-center gap-2"
                  >
                    <Users className="h-4 w-4" />
                    Faculty
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://bu-ugnayan.org/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer flex items-center gap-2"
                  >
                    <ShieldCheck className="h-4 w-4" />
                    Admin
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                Login
                <ChevronDown className="ml-1 h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <a 
                    href="https://bu-ugnayan.org/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer flex items-center gap-2"
                  >
                    <GraduationCap className="h-4 w-4" />
                    Student
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://bu-ugnayan.org/faculty/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer flex items-center gap-2"
                  >
                    <Users className="h-4 w-4" />
                    Faculty
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://bu-ugnayan.org/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer flex items-center gap-2"
                  >
                    <ShieldCheck className="h-4 w-4" />
                    Admin
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#features"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#mobile"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Mobile
              </Link>
              <Link
                href="#roles"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Roles
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
