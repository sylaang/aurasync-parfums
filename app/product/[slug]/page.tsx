import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ProductDetails from '@/components/products/product-details';
import RelatedProducts from '@/components/products/related-products';
import { getProductBySlug, getAllProducts } from '@/lib/data/products';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    return {
      title: 'Produit introuvable',
      description: "Le produit demandé n'a pas pu être trouvé",
    };
  }
  
  return {
    title: `${product.name} | Parfums Essence`,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <ProductDetails product={product} />
      <RelatedProducts productId={product.id} />
    </div>
  );
}