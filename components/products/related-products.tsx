import ProductCard from '@/components/products/product-card';
import { getRelatedProducts } from '@/lib/data/products';

interface RelatedProductsProps {
  productId: string;
}

export default function RelatedProducts({ productId }: RelatedProductsProps) {
  const relatedProducts = getRelatedProducts(productId, 4);
  
  if (relatedProducts.length === 0) {
    return null;
  }
  
  return (
    <section className="mt-16 py-8">
      <div className="text-center mb-8">
        <h2 className="font-playfair text-2xl md:text-3xl font-bold">Vous pouvez aussi aimer</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}