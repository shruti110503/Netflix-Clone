"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="container flex h-24 items-center justify-between px-4 md:px-8">
        <Link href="/" className="relative h-8 w-28 md:w-36">
          <Image
            src="https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow.png"
            alt="Netflix"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <Select defaultValue="en">
            <SelectTrigger className="h-9 w-fit border-white/30 bg-transparent px-2 text-white hover:bg-white/10 md:px-4">
              <Globe className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-primary px-4 font-medium text-white hover:bg-primary/90">
            Sign In
          </Button>
        </div>
      </nav>
    </header>
  );
}