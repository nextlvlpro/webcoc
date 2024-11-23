"use client";

import React from 'react';
import { Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="fixed w-full z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={"/"} className="flex items-center space-x-3">
            <img 
              src="/images/logo.webp"
              alt="Clash Companion Logo" 
              className="h-8 w-8 rounded-full"
            />
            <span className="text-xl font-bold text-purple-500">Clash Companion</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/" 
                      className={`${navigationMenuTriggerStyle()} text-zinc-200 hover:text-black bg-zinc-950/25`}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-zinc-200 hover:text-black bg-zinc-950/25">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] bg-black">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-medium leading-none text-zinc-200">
                            <Link href="/players" className="block">Players</Link>
                          </h4>
                          <p className="text-sm text-zinc-400">Track Players</p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium leading-none text-zinc-200">
                            <Link href="/clans" className="block">Clan Search</Link>
                          </h4>
                          <p className="text-sm text-zinc-400">Find the perfect clan</p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium leading-none text-zinc-200">
                            <Link href="/clans/clancapital" className="block">Clan Capital</Link>
                          </h4>
                          <p className="text-sm text-zinc-400">Analyze Clan Capital</p>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/about" 
                      className={`${navigationMenuTriggerStyle()} text-zinc-200 hover:text-black bg-zinc-950/25`}
                    >
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button className="bg-purple-600 text-white hover:bg-purple-500">Sign In</Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-zinc-200">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-zinc-950 border-zinc-900">
                <SheetHeader>
                  <SheetTitle className="text-zinc-200">Clash Companion</SheetTitle>
                  <SheetDescription>
                    Menu
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-4">
                  <Link href="/" passHref>
                    <Button variant="ghost" className="text-zinc-200 hover:text-black">Home</Button>
                  </Link>
                  <Link href="/players" passHref>
                    <Button variant="ghost" className="text-zinc-200 hover:text-black">Player Stats</Button>
                  </Link>
                  <Link href="/clans" passHref>
                    <Button variant="ghost" className="text-zinc-200 hover:text-black">Clan Search</Button>
                  </Link>
                  <Link href="/about" passHref>
                    <Button variant="ghost" className="text-zinc-200 hover:text-black">About</Button>
                  </Link>
                  <Button className="bg-purple-600 text-white hover:bg-purple-500">Sign In</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;