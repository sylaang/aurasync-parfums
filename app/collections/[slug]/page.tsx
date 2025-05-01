import { collections, products } from '@/lib/data/products';
import ProductCard from '@/components/products/product-card';

// Generate static params for all possible collection slugs
export async function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  const collection = collections.find(c => c.slug === slug);
  
  if (!collection) {
    return null; // Next.js will automatically render the not-found page
  }
  
  // Filter products based on collection type
  const collectionProducts = products.filter(product => {
    switch (collection.slug) {
      case 'summer':
        return product.fragranceFamily === 'Citrus Aromatic' || product.fragranceFamily === 'Fresh';
      case 'oriental':
        return product.fragranceFamily === 'Oriental' || product.fragranceFamily === 'Woody Oriental';
      case 'floral':
        return product.fragranceFamily === 'Floral';
      default:
        return false;
    }
  });
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">{collection.name}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {collection.description}
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {collectionProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        
        {collectionProducts.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-lg font-medium">Aucun produit trouvé dans cette collection</p>
            <p className="text-muted-foreground mt-2">
              Revenez bientôt pour de nouveaux ajouts à notre collection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}