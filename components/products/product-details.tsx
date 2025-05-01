"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Heart, Share2, ShoppingBag, Star } from 'lucide-react';
import { Product } from '@/lib/data/products';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { useCart } from '@/components/cart/cart-context';
import { formatPrice } from '@/lib/utils';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].value);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const { addToCart } = useCart();
  
  const selectedSizeObj = product.sizes.find(size => size.value === selectedSize);
  const price = selectedSizeObj ? selectedSizeObj.price : product.price;
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: price,
      image: product.images[0].src,
      quantity: quantity,
      size: `${selectedSize}${product.sizes[0].unit}`
    });
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="aspect-square relative rounded-md overflow-hidden border">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          {product.images.map((image) => (
            <button
              key={image.id}
              className={`relative aspect-square overflow-hidden rounded-md border ${
                activeImage.id === image.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setActiveImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="space-y-8">
        <div>
          <p className="text-muted-foreground font-medium">{product.brand}</p>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mt-1">{product.name}</h1>
          
          <div className="flex items-center mt-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-4 w-4 fill-primary text-primary"
                />
              ))}
            </div>
            <span className="text-muted-foreground text-sm ml-2">
              4.9 (124 reviews)
            </span>
          </div>
          
          <p className="text-lg font-semibold mt-4">{formatPrice(price)}</p>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Size</h3>
          <RadioGroup 
            value={selectedSize} 
            onValueChange={setSelectedSize}
            className="flex flex-wrap gap-3"
          >
            {product.sizes.map((size) => (
              <div key={size.value} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={size.value}
                  id={`size-${size.value}`}
                  className="pair caché"
                />
                <Label
                  htmlFor={`size-${size.value}`}
                  className="min-w-[4rem] border rounded-md px-4 py-2 text-center cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                >
                  {size.value}{size.unit}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                className="px-3 py-2 disabled:opacity-50"
                aria-label="Diminuer la quantité"
              >
                -
              </button>
              <span className="px-3 py-2">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2"
                aria-label="Augmenter la quantité"
              >
                +
              </button>
            </div>
            
            <Button 
              size="lg" 
              className="flex-1"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              aria-label="Ajouter à la liste de souhaits"
            >
              <Heart className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              aria-label="Partager le produit"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <Separator />
        
        <Tabs defaultValue="description">
          <TabsList className="w-full">
            <TabsTrigger value="description" className="flex-1">Description du produit</TabsTrigger>
            <TabsTrigger value="notes" className="flex-1">Notes</TabsTrigger>
            <TabsTrigger value="details" className="flex-1">Détails</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="pt-4">
            <p className="text-muted-foreground">{product.fullDescription}</p>
          </TabsContent>
          
          <TabsContent value="notes" className="pt-4">
            <div className="grid grid-cols-3 gap-4">
              {product.notes.map((note) => (
                <div key={note.type} className="space-y-2">
                  <h4 className="font-medium capitalize">{note.type} Notes</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {note.notes.map((noteName) => (
                      <li key={noteName}>{noteName}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="details" className="pt-4">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="font-medium">Catégorie</dt>
                <dd className="text-muted-foreground">{product.category}</dd>
              </div>
              <div>
                <dt className="font-medium">Genre</dt>
                <dd className="text-muted-foreground">{product.gender}</dd>
              </div>
              <div>
                <dt className="font-medium">Famille de parfums</dt>
                <dd className="text-muted-foreground">{product.fragranceFamily}</dd>
              </div>
            </dl>
          </TabsContent>
        </Tabs>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="shipping">
            <AccordionTrigger>Expédition et retours</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground text-sm mb-2">
                Livraison standard gratuite pour toute commande supérieure à 50 $. Livraison dans les 3 à 5 jours ouvrables.
              </p>
              <p className="text-muted-foreground text-sm">
                Les retours sont acceptés dans les 30 jours suivant la livraison. Le produit doit être inutilisé et dans son emballage d'origine.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="ethical">
            <AccordionTrigger>Approvisionnement éthique</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground text-sm">
              Nous nous engageons à assurer un approvisionnement responsable et durable de tous nos ingrédients. Nos produits sont exempts de cruauté et nous travaillons avec des fournisseurs qui adhèrent aux pratiques du commerce équitable.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}