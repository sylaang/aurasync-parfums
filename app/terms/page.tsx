import Image from 'next/image';

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Conditions d'utilisation</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            En utilisant notre site, vous acceptez les termes et conditions suivantes.
          </p>
        </div>

        <div className="prose max-w-none mb-16">
          <h2 className="font-playfair text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-muted-foreground mb-4">
            Les présentes conditions d'utilisation régissent l'accès et l'utilisation du site web Essence. En accédant à ce site, vous acceptez de respecter ces conditions. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser ce site.
          </p>

          <h2 className="font-playfair text-2xl font-bold mb-4">Propriété intellectuelle</h2>
          <p className="text-muted-foreground mb-4">
            Tous les contenus présents sur ce site, y compris les images, les logos, le texte et le design, sont la propriété exclusive de Essence et sont protégés par les lois sur la propriété intellectuelle. Vous ne pouvez pas reproduire, distribuer ou utiliser ces contenus sans l'autorisation expresse de l'entreprise.
          </p>

          <h2 className="font-playfair text-2xl font-bold mb-4">Responsabilité</h2>
          <p className="text-muted-foreground mb-4">
            Essence ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder. Nous nous efforçons de garantir que le contenu du site est exact, mais nous ne pouvons garantir son exhaustivité ou son actualité.
          </p>

          <h2 className="font-playfair text-2xl font-bold mb-4">Modifications des conditions</h2>
          <p className="text-muted-foreground mb-4">
            Nous nous réservons le droit de modifier ces conditions à tout moment. Toute modification prendra effet dès sa publication sur cette page. Il est de votre responsabilité de consulter régulièrement ces conditions pour prendre connaissance des éventuelles modifications.
          </p>

          <h2 className="font-playfair text-2xl font-bold mb-4">Confidentialité et données personnelles</h2>
          <p className="text-muted-foreground mb-4">
            Nous respectons votre vie privée. Pour plus d'informations, veuillez consulter notre <a href="/privacy-policy" className="text-primary">politique de confidentialité</a>, qui décrit comment nous collectons, utilisons et protégeons vos données personnelles.
          </p>

          <h2 className="font-playfair text-2xl font-bold mb-4">Loi applicable</h2>
          <p className="text-muted-foreground mb-4">
            Les présentes conditions sont régies par les lois en vigueur dans le pays de résidence de l'entreprise, et tout litige sera soumis aux tribunaux compétents de ce pays.
          </p>

          <h2 className="font-playfair text-2xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground mb-4">
            Si vous avez des questions concernant ces conditions d'utilisation, veuillez nous contacter à l'adresse suivante : <a href="mailto:contact@exemple.com" className="text-primary">contact@exemple.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
