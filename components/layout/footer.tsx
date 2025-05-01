import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const footerLinks = [
  {
    title: 'Boutique',
    links: [
      { label: 'Tous les parfums', href: '/shop' },
      { label: 'Nouveaux arrivages', href: '/shop/new' },
      { label: 'Meilleures ventes', href: '/shop/bestsellers' },
      { label: 'Coffrets cadeaux', href: '/shop/gift-sets' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { label: 'A propos de nous', href: '/about' },
      { label: 'Notre histoire', href: '/story' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Service à la clientèle',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Expédition et retours', href: '/shipping' },
      { label: 'Politique de confidentialité', href: '/privacy' },
      { label: "Conditions d'utilisation", href: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground pt-16 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <span className="font-playfair text-2xl font-bold tracking-tight text-foreground">ESSENCE</span>
            </Link>
            <p className="mt-4 text-sm">
              Découvrez des parfums de luxe élaborés à partir des ingrédients les plus fins.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-medium text-foreground">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs">
              © {new Date().getFullYear()} Essence. Tous droits réservés.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="text-xs hover:text-primary transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="text-xs hover:text-primary transition-colors">
                Conditions d'utilisation
              </Link>
              <Link href="/cookies" className="text-xs hover:text-primary transition-colors">
              Politique de cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}