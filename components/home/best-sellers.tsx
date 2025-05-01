import Link from 'next/link';
import ProductCard from '@/components/products/product-card';
import { getBestSellerProducts } from '@/lib/data/products';

export default function BestSellers() {
  const bestSellers = getBestSellerProducts();
  
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Nos best-sellers</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Découvrez nos parfums les plus populaires, appréciés par les clients du monde entier.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          href="/shop/bestsellers" 
          className="text-primary hover:text-primary/80 underline-offset-4 hover:underline font-medium"
        >
          Voir tous les best-sellers
        </Link>
      </div>
    </section>
  );
}