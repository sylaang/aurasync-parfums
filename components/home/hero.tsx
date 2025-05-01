"use client";

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface SlideData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Découvrez votre signature olfactive",
    subtitle: "Découvrez notre collection de parfums exclusifs",
    buttonText: "Acheter maintenant",
    buttonLink: "/shop"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Nouvelle collection d'été",
    subtitle: "Des parfums légers et rafraîchissants pour les journées chaudes",
    buttonText: "Voir la collection",
    buttonLink: "/collections/summer"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Coffrets de luxe",
    subtitle: "Des cadeaux parfaits pour quelqu'un de spécial",
    buttonText: "Explorer les cadeaux",
    buttonLink: "/shop/gift-sets"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white max-w-3xl">
              {slide.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl">
              {slide.subtitle}
            </p>
            <Button asChild size="lg" className="group">
              <Link href={slide.buttonLink}>
                {slide.buttonText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}