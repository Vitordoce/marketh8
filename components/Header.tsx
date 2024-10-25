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
const isLoggedIn = true;

export default function Header() {
  return (
    // mudar cor para variável
    <header className="bg-[#984830]">
      <div className="max-w-[1200px] mx-auto p-3 px-8 flex items-center justify-between">
        {/* Mudar logo */}
        <Link href="/">
          <div className="text-white text-2xl font-bold border border-white p-2">
            logo
          </div>
        </Link>
        <nav className="hidden md:flex gap-4">
          <Link
            href="/"
            className="text-white hover:text-white/70 flex items-center"
          >
            <ShoppingBag className="mr-2" size={20} />
            Comprar
          </Link>
          <Link
            href={isLoggedIn ? "/sell" : "/login"}
            className="text-white hover:text-white/70 flex items-center"
          >
            <Package className="mr-2" size={20} />
            Vender
          </Link>
          {isLoggedIn && (
            <>
              <Link
                href="/profile"
                className="text-white hover:text-white/70 flex items-center"
              >
                <User className="mr-2" size={20} />
                Perfil
              </Link>
            </>
          )}
        </nav>
        <div className="md:hidden flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
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
