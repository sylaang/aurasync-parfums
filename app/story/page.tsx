import Image from "next/image";

export default function OurStoryPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="relative aspect-[21/9] mb-12">
        <Image
          src="https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=1280"
          alt="Perfume creation process"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="prose max-w-none">
        <h2 className="font-playfair text-2xl font-bold mb-4">Notre histoire</h2>
        <p className="text-muted-foreground mb-4">
          Fondée en 2010, Essence est née d'une passion pour la parfumerie artisanale et d'un désir de créer des parfums uniques et mémorables. Notre parcours a commencé dans un petit atelier à New York, où notre fondateur a collaboré avec des maîtres parfumeurs pour développer notre première collection.
        </p>
        <p className="text-muted-foreground">
          Aujourd'hui, nous continuons à repousser les limites de la parfumerie, en associant les techniques traditionnelles à l'innovation moderne. Chaque parfum raconte sa propre histoire, soigneusement élaborée pour évoquer des émotions et créer des impressions durables.
        </p>
      </div>
    </div>
  );
}
