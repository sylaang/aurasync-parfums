import Image from 'next/image';
import { Award, Heart, Leaf, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">À propos d'Essence</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Créer des parfums exceptionnels qui capturent des moments, des souvenirs et des émotions.
          </p>
        </div>

        <div className="relative aspect-[21/9] mb-12">
          <Image
            src="https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=1280"
            alt="Perfume creation process"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="prose max-w-none mb-16">
          <h2 className="font-playfair text-2xl font-bold mb-4">Notre histoire</h2>
          <p className="text-muted-foreground mb-4">
            Depuis 2010, Essence trace un chemin passionné dans l’univers de la parfumerie artisanale...
          </p>
          <a
            href="/story"
            className="inline-block mt-2 text-primary hover:underline font-medium"
          >
            Découvrir notre histoire →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-playfair text-2xl font-bold mb-4">Notre mission</h2>
            <p className="text-muted-foreground">
              Créer des parfums exceptionnels qui inspirent et ravissent, tout en respectant les normes les plus strictes en matière de qualité et de durabilité. Nous pensons que chaque parfum doit raconter une histoire et créer une expérience unique pour celui ou celle qui le porte.
            </p>
          </div>
          <div>
            <h2 className="font-playfair text-2xl font-bold mb-4">Notre vision</h2>
            <p className="text-muted-foreground">
              Devenir la maison de parfums de luxe la plus respectée au monde, connue pour son engagement en faveur de la qualité, de l'innovation et du développement durable. Nous nous efforçons d'établir de nouvelles normes dans l'industrie tout en préservant l'art de la parfumerie traditionnelle.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-medium mb-2">La passion</h3>
            <p className="text-sm text-muted-foreground">
              Nous nous consacrons à l'art de la parfumerie avec un enthousiasme inébranlable.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Qualité</h3>
            <p className="text-sm text-muted-foreground">
              Nous n'utilisons que les meilleurs ingrédients du monde entier.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Durabilité</h3>
            <p className="text-sm text-muted-foreground">
              S'engager à respecter l'environnement
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Intégrité</h3>
            <p className="text-sm text-muted-foreground">
              Maintenir les normes éthiques les plus élevées
            </p>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-8">
          <h2 className="font-playfair text-2xl font-bold mb-6 text-center">Notre engagement en faveur de la qualité</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-2">Approvisionnement</h3>
              <p className="text-sm text-muted-foreground">
                Nous travaillons en partenariat avec les meilleurs fournisseurs d'ingrédients au monde, en veillant à ce que chaque composant réponde à nos normes rigoureuses.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Artisanat</h3>
              <p className="text-sm text-muted-foreground">
                Nos parfums sont élaborés par des maîtres parfumeurs ayant des décennies d'expérience dans la création de parfums fins.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Tests</h3>
              <p className="text-sm text-muted-foreground">
                Chaque lot est soumis à un contrôle de qualité rigoureux afin de garantir la cohérence et l'excellence.
              </p>
            </div>
          </div>
        </div>
      <div className="prose max-w-none mb-16 mt-12">
  <h2 className="font-playfair text-2xl font-bold mb-4">Crédits</h2>
  <p className="text-muted-foreground mb-4">
    Ce site a été développé par <strong>AuraSync</strong>.
  </p>
  <p className="text-muted-foreground">
    Pour plus d'informations sur le développement ou des questions techniques, vous pouvez nous contacter à <a href="mailto:contact@exemple.com">mehdi.hachem.syl@gmail.com</a>.
  </p>
</div>
      </div>
    </div>
  );
}