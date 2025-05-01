"use client";

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

const genders = [
  { id: 'women', label: 'Femme' },
  { id: 'men', label: 'Homme' },
  { id: 'unisex', label: 'Unisexe' },
];

const categories = [
  { id: 'Eau de Parfum', label: 'Eau de Parfum' },
  { id: 'Eau de Toilette', label: 'Eau de Toilette' },
  { id: 'Parfum', label: 'Parfum' },
];

const brands = [
  { id: 'Lumière', label: 'Lumière' },
  { id: 'Oceanica', label: 'Oceanica' },
  { id: 'Noble House', label: 'Maison noble' },
  { id: 'Fleur de Paris', label: 'Fleur de Paris' },
  { id: 'Arabian Nights', label: 'Mille et une nuits' },
  { id: 'Mediterraneo', label: 'Méditerranéen' },
];

const fragranceFamilies = [
  { id: 'floral', label: 'Floral' },
  { id: 'oriental', label: 'Oriental' },
  { id: 'woody', label: 'Boisé' },
  { id: 'fresh', label: 'Frais' },
  { id: 'citrus', label: 'Agrumes' },
  { id: 'aromatic', label: 'Aromatique' },
];

export default function ProductFilters() {
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
  
  const handleCategoryChange = (category: string) => {
    router.push(`${pathname}?${createQueryString('category', category)}`);
  };
  
  const handleGenderChange = (gender: string) => {
    router.push(`${pathname}?${createQueryString('gender', gender)}`);
  };
  
  const handleBrandChange = (brand: string) => {
    router.push(`${pathname}?${createQueryString('brand', brand)}`);
  };
  
  const handleFragranceFamilyChange = (family: string) => {
    router.push(`${pathname}?${createQueryString('family', family)}`);
  };
  
  const handleClearFilters = () => {
    router.push(pathname);
  };
  
  // Get current filter values
  const currentCategory = searchParams.get('category');
  const currentGender = searchParams.get('gender');
  const currentBrand = searchParams.get('brand');
  const currentFamily = searchParams.get('family');
  
  const anyFilterActive = currentCategory || currentGender || currentBrand || currentFamily;
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Filters</h3>
        {anyFilterActive && (
          <Button variant="link" size="sm" onClick={handleClearFilters} className="h-auto p-0">
            Clear all
          </Button>
        )}
      </div>
      
      <Accordion type="multiple" defaultValue={['gender', 'category', 'brand', 'price']}>
        <AccordionItem value="gender">
          <AccordionTrigger>Genre</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {genders.map((gender) => (
                <div key={gender.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`gender-${gender.id}`} 
                    checked={currentGender === gender.id}
                    onCheckedChange={(checked) => {
                      handleGenderChange(checked ? gender.id : '');
                    }}
                  />
                  <Label htmlFor={`gender-${gender.id}`} className="text-sm cursor-pointer">
                    {gender.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="category">
          <AccordionTrigger>Catégorie</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${category.id}`} 
                    checked={currentCategory === category.id}
                    onCheckedChange={(checked) => {
                      handleCategoryChange(checked ? category.id : '');
                    }}
                  />
                  <Label htmlFor={`category-${category.id}`} className="text-sm cursor-pointer">
                    {category.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="brand">
          <AccordionTrigger>Marque</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`brand-${brand.id}`} 
                    checked={currentBrand === brand.id}
                    onCheckedChange={(checked) => {
                      handleBrandChange(checked ? brand.id : '');
                    }}
                  />
                  <Label htmlFor={`brand-${brand.id}`} className="text-sm cursor-pointer">
                    {brand.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="fragrance-family">
          <AccordionTrigger>Famille de parfums</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {fragranceFamilies.map((family) => (
                <div key={family.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`family-${family.id}`} 
                    checked={currentFamily === family.id}
                    onCheckedChange={(checked) => {
                      handleFragranceFamilyChange(checked ? family.id : '');
                    }}
                  />
                  <Label htmlFor={`family-${family.id}`} className="text-sm cursor-pointer">
                    {family.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="price">
          <AccordionTrigger>Plage de prix</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[50, 200]} min={0} max={300} step={10} />
              <div className="flex items-center justify-between">
                <div className="border rounded-md px-2 py-1 text-sm">50€</div>
                <div className="border rounded-md px-2 py-1 text-sm">200€</div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}