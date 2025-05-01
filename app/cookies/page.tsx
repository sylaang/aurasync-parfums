import Image from 'next/image';

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Politique de Cookies</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cette politique de cookies explique comment nous utilisons les cookies sur notre site Web.
          </p>
        </div>

        <div className="prose max-w-none mb-16">
          <h2 className="font-playfair text-2xl font-bold mb-4">Qu'est-ce qu'un cookie ?</h2>
          <p className="text-muted-foreground mb-4">
            Un cookie est un petit fichier texte qui est placé sur votre appareil lorsque vous visitez un site Web. Les cookies sont largement utilisés pour faire fonctionner les sites Web, améliorer leur performance et fournir des informations aux propriétaires du site.
          </p>

          <h2 className="font-playfair text-2xl font-bold mb-4">Pourquoi utilisons-nous des cookies ?</h2>
          <p className="text-muted-foreground mb-4">
            Nous utilisons des cookies pour améliorer votre expérience de navigation, pour analyser la manière dont notre site est utilisé et pour personnaliser le contenu que vous voyez. Les cookies nous aident également à vous offrir des fonctionnalités plus adaptées à vos préférences.
          </p>

          <h2 className="font-playfair text-2xl font-bold mb-4">Les types de cookies que nous utilisons</h2>
          <p className="text-muted-foreground mb-4">
            Nous utilisons différents types de cookies, notamment :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Cookies essentiels :</strong> Ces cookies sont nécessaires au bon fonctionnement du site et ne peuvent pas être désactivés dans nos systèmes.</li>
            <li><strong>Cookies de performance :</strong> Ces cookies collectent des informations sur la façon dont les utilisateurs interagissent avec notre site (par exemple, les pages visitées ou les messages d'erreur).</li>
            <li><strong>Cookies fonctionnels :</strong> Ces cookies permettent de mémoriser vos choix et préférences sur notre site afin d'améliorer votre expérience.</li>
            <li><strong>Cookies publicitaires :</strong> Ces cookies sont utilisés pour vous fournir des publicités pertinentes et vous éviter de voir les mêmes annonces plusieurs fois.</li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold mb-4">Contrôler l'utilisation des cookies</h2>
          <p className="text-muted-foreground mb-4">
            Vous pouvez choisir d'accepter ou de refuser les cookies. La plupart des navigateurs acceptent automatiquement les cookies, mais vous pouvez modifier les paramètres de votre navigateur pour refuser les cookies si vous le souhaitez. Cela pourrait toutefois affecter la fonctionnalité de certaines parties de notre site.
          </p>

          <h2 className="font-playfair text-2xl font-bold mb-4">Comment gérer les cookies</h2>
          <p className="text-muted-foreground mb-4">
            Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies, ou même pour vous avertir lorsqu'un cookie est placé. Pour gérer vos préférences, vous pouvez utiliser les options de votre navigateur. Vous trouverez ci-dessous des liens vers des guides sur la gestion des cookies pour les navigateurs les plus populaires :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><a href="https://support.google.com/chrome/answer/95647?hl=fr" className="text-primary" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" className="text-primary" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-primary" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
            <li><a href="https://www.apple.com/fr/legal/privacy/" className="text-primary" target="_blank" rel="noopener noreferrer">Safari</a></li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold mb-4">Mise à jour de cette politique de cookies</h2>
          <p className="text-muted-foreground mb-4">
            Nous pouvons mettre à jour cette politique de cookies de temps à autre pour refléter des changements dans nos pratiques. Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des mises à jour.
          </p>

          <h2 className="font-playfair text-2xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground mb-4">
            Si vous avez des questions concernant notre politique de cookies, veuillez nous contacter à l'adresse suivante : <a href="mailto:contact@exemple.com" className="text-primary">contact@exemple.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
