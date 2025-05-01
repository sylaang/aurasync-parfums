export default function FAQPage() {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8 font-playfair">Foire aux questions</h1>
  
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Quels types de parfums proposez-vous ?</h2>
            <p className="text-muted-foreground">
              Nous offrons une large gamme de parfums, allant des senteurs florales délicates aux arômes boisés intenses, tous créés à partir d'ingrédients de qualité supérieure.
            </p>
          </div>
  
          <div>
            <h2 className="text-xl font-semibold mb-2">Proposez-vous des échantillons ?</h2>
            <p className="text-muted-foreground">
              Oui, nous proposons des échantillons pour que vous puissiez découvrir nos parfums avant de faire un achat complet.
            </p>
          </div>
  
          <div>
            <h2 className="text-xl font-semibold mb-2">Livrez-vous à l'international ?</h2>
            <p className="text-muted-foreground">
              Absolument. Nous livrons dans de nombreux pays à travers le monde. Les frais et délais varient selon la destination.
            </p>
          </div>
  
          <div>
            <h2 className="text-xl font-semibold mb-2">Vos produits sont-ils testés sur les animaux ?</h2>
            <p className="text-muted-foreground">
              Non, nous sommes fiers d’être une marque cruelty-free. Aucun de nos produits n’est testé sur les animaux.
            </p>
          </div>
  
          <div>
            <h2 className="text-xl font-semibold mb-2">Comment puis-je contacter votre service client ?</h2>
            <p className="text-muted-foreground">
              Vous pouvez nous contacter par e-mail à contact@essence.com ou via notre formulaire de contact sur le site.
            </p>
          </div>
        </div>
      </div>
    );
  }
  