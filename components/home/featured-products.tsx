import Link from 'next/link';
import ProductCard from '@/components/products/product-card';
import { getFeaturedProducts } from '@/lib/data/products';

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Parfums en vedette</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Découvrez notre sélection de parfums d'exception, triés sur le volet, qui incarnent le luxe et le raffinement.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          href="/shop" 
          className="text-primary hover:text-primary/80 underline-offset-4 hover:underline font-medium"
        >
          Voir tous les produits
        </Link>
      </div>
    </section>
  );
}