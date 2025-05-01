"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Product } from '@/lib/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/components/cart/cart-context';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.images[0].src,
      quantity: 1,
      size: product.sizes[0].value + product.sizes[0].unit
    });
  };
  
  return (
    <motion.div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/product/${product.slug}`}>
        <div className="overflow-hidden rounded-md bg-background aspect-[3/4] relative">
          {(product.new || product.bestSeller) && (
            <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
              {product.new && (
                <Badge variant="default" className="bg-primary text-xs">Nouveau</Badge>
              )}
              {product.bestSeller && (
                <Badge variant="secondary" className="text-xs">Bestseller</Badge>
              )}
            </div>
          )}
          
          <div className="h-full w-full relative">
            <Image
              src={product.images[0].src}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            <div 
              className={`absolute inset-0 bg-black/5 transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
            
            <div 
              className={`absolute bottom-4 left-0 right-0 flex justify-center transition-all duration-300 ${
                isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Button 
                onClick={handleAddToCart}
                className="bg-white text-black hover:bg-white/90 transition-all"
                size="sm"
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Ajouter au panier
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-3 text-center">
          <p className="text-muted-foreground text-sm">{product.brand}</p>
          <h3 className="mt-1 font-medium">{product.name}</h3>
          <p className="mt-1 font-medium">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </motion.div>
  );
}