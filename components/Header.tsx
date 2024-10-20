import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <header className="bg-[#b85c38]">
      <div className="max-w-[1200px] mx-auto p-4 flex items-center justify-between">
        <Link href="/">
          <div className="text-white text-2xl font-bold border border-white p-2">
            logo
          </div>
        </Link>
        <div className="hidden md:flex gap-4">
          <Link href="/" className="text-white hover:text-white/70">
            Comprar
          </Link>
          <Link href="/login" className="text-white hover:text-white/70">
            Vender
          </Link>
        </div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/" className="flex w-full">
                  Comprar
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/login" className="flex w-full">
                  Vender
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
