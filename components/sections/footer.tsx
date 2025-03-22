"use client";

import Link from "next/link";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const footerLinks = [
  ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
  ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"],
  ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
  ["Media Center", "Terms of Use", "Contact Us", "Netflix Shop"],
];

export function Footer() {
  return (
    <footer className="w-full bg-black px-4 py-16 text-sm text-white/70">
      <div className="container mx-auto max-w-[1000px]">
        <Link href="#" className="mb-6 block hover:underline">
          Questions? Contact us.
        </Link>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {footerLinks.map((column, i) => (
            <ul key={i} className="space-y-3">
              {column.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="mt-8">
          <Select defaultValue="en">
            <SelectTrigger className="h-12 w-fit border-white/30 bg-transparent px-4 text-white hover:bg-white/10">
              <Globe className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <p className="mt-6">Netflix United States</p>
      </div>
    </footer>
  );
}