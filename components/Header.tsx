import Link from "next/link";
import { Menu, ShoppingBag, User, Package } from "lucide-react";

//components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Simule um estado de autenticação (substitua isso pela sua lógica de autenticação real)
const isLoggedIn = false;

export default function Header() {
  return (
    <header className="bg-accent">
      <div className="max-w-[1200px] mx-auto p-3 px-8 flex items-center justify-between">
        <Link href="/">
          <div className="text-accent-foreground text-2xl font-bold border border-accent-foreground p-2">
            logo
          </div>
        </Link>
        <nav className="hidden md:flex gap-4">
          <Link
            href="/"
            className="text-accent-foreground hover:text-accent-foreground/70 flex items-center"
          >
            <ShoppingBag className="mr-2" size={20} />
            Comprar
          </Link>
          <Link
            href={isLoggedIn ? "/sell" : "/login"}
            className="text-accent-foreground hover:text-accent-foreground/70 flex items-center"
          >
            <Package className="mr-2" size={20} />
            Vender
          </Link>
          {isLoggedIn && (
            <Link
              href="/profile"
              className="text-accent-foreground hover:text-accent-foreground/70 flex items-center"
            >
              <User className="mr-2" size={20} />
              Perfil
            </Link>
          )}
        </nav>
        <div className="md:hidden flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-accent-foreground">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/" className="flex w-full items-center">
                  <ShoppingBag className="mr-2" size={20} />
                  Comprar
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/sell" className="flex w-full items-center">
                  <Package className="mr-2" size={20} />
                  Vender
                </Link>
              </DropdownMenuItem>
              {isLoggedIn && (
                <>
                  <DropdownMenuItem>
                    <Link href="/profile" className="flex w-full items-center">
                      <User className="mr-2" size={20} />
                      Perfil
                    </Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
