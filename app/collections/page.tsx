import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { collections } from '@/lib/data/products';

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Nos collections</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Découvrez nos collections de parfums de luxe, chacune racontant une histoire unique.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <Link 
            key={collection.id} 
            href={`/collections/${collection.slug}`}
            className="group block"
          >
            <div className="overflow-hidden rounded-lg aspect-[3/4] relative">
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-playfair text-xl md:text-2xl font-bold mb-2">
                  {collection.name}
                </h3>
                <p className="mb-4 text-white/80 text-sm">
                  {collection.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium group-hover:underline">
                  Explorer la collection
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}