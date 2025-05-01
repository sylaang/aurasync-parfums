import Hero from '@/components/home/hero';
import FeaturedProducts from '@/components/home/featured-products';
import Collections from '@/components/home/collections';
import BestSellers from '@/components/home/best-sellers';
import Newsletter from '@/components/home/newsletter';

export default function Home() {
  return (
    <div className="space-y-16 pb-20">
      <Hero />
      <FeaturedProducts />
      <Collections />
      <BestSellers />
      <Newsletter />
    </div>
  );
}