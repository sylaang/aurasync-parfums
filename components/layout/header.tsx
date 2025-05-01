"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import CartDropdown from '@/components/cart/cart-dropdown';
import { useCart } from '@/components/cart/cart-context';

const routes = [
  { href: '/', label: 'Accueil' },
  { href: '/shop', label: 'Boutique' },
  { href: '/collections', label: 'Collections' },
  { href: '/about', label: 'A propos' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useCart();
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm dark:bg-black/95' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu à bascule</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-10">
                  {routes.map((route) => (
                    <Link 
                      key={route.href} 
                      href={route.href}
                      className={`text-lg font-medium transition hover:text-primary ${
                        pathname === route.href ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            
            <Link href="/" className="ml-4 md:ml-0 flex items-center">
              <span className="font-playfair text-2xl font-bold tracking-tight">ESSENCE</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            {routes.map((route) => (
              <Link 
                key={route.href} 
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === route.href ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Recherche">
              <Search className="h-5 w-5" />
            </Button>
            <Link href="/account">
              <Button variant="ghost" size="icon" aria-label="Compte">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <CartDropdown count={cartItemsCount} />
          </div>
        </div>
      </div>
    </header>
  );
}