"use client";

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Filter, Grid as ViewGrid, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { products } from '@/lib/data/products';
import ProductCard from '@/components/products/product-card';
import ProductFilters from '@/components/shop/product-filters';
import ProductSorting from '@/components/shop/product-sorting';

export default function ShopPage() {
  const searchParams = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  
  // Get filter params
  const category = searchParams.get('category');
  const gender = searchParams.get('gender');
  const brand = searchParams.get('brand');
  const sort = searchParams.get('sort') || 'featured';
  
  // Apply filters
  let filteredProducts = [...products];
  
  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category === category);
  }
  
  if (gender) {
    filteredProducts = filteredProducts.filter(p => p.gender === gender);
  }
  
  if (brand) {
    filteredProducts = filteredProducts.filter(p => p.brand === brand);
  }
  
  // Apply sorting
  if (sort === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === 'newest') {
    filteredProducts.sort((a, b) => (a.new === b.new) ? 0 : a.new ? -1 : 1);
  } else if (sort === 'bestselling') {
    filteredProducts.sort((a, b) => (a.bestSeller === b.bestSeller) ? 0 : a.bestSeller ? -1 : 1);
  }
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-4">
        <div>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold">Shop All Perfumes</h1>
          <p className="text-muted-foreground mt-2">
            Discover our collection of luxury fragrances for every occasion
          </p>
        </div>
        
        <div className="flex justify-between items-center">
          <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] md:hidden">
              <ProductFilters />
            </SheetContent>
          </Sheet>
          
          <ProductSorting />
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        {/* Desktop Filters */}
        <div className="hidden md:block">
          <ProductFilters />
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          
          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-lg font-medium">No products found</p>
              <p className="text-muted-foreground mt-2">
                Try adjusting your filters or browse our collections
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}