"use client";

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const sortOptions = [
  { value: 'featured', label: 'En vedette' },
  { value: 'newest', label: 'Les plus récents' },
  { value: 'bestselling', label: 'Meilleure vente' },
  { value: 'price-asc', label: 'Prix : Du plus bas au plus haut' },
  { value: 'price-desc', label: 'Prix : du plus élevé au plus bas' },
];

export default function ProductSorting() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    
    return params.toString();
  };
  
  const handleSortChange = (value: string) => {
    router.push(`${pathname}?${createQueryString('sort', value)}`);
  };
  
  const currentSort = searchParams.get('sort') || 'featured';
  
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm whitespace-nowrap">Trier par :</span>
      <Select value={currentSort} onValueChange={handleSortChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Trier par" />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}