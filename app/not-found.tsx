import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="font-playfair text-6xl font-bold mb-6">404</h1>
      <h2 className="text-2xl font-medium mb-4">Page non trouvée</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        La page que vous recherchez a peut-être été supprimée, a changé de nom ou est temporairement indisponible.
      </p>
      <Button asChild size="lg">
        <Link href="/">Retour à l'accueil</Link>
      </Button>
    </div>
  );
}