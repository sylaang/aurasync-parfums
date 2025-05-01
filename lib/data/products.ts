export interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

export interface ProductNote {
  type: 'top' | 'middle' | 'base';
  notes: string[];
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  fullDescription: string;
  price: number;
  category: string;
  gender: 'Men' | 'Women' | 'Unisex';
  featured: boolean;
  bestSeller: boolean;
  new: boolean;
  fragranceFamily: string;
  notes: ProductNote[];
  sizes: {
    value: string;
    unit: 'ml';
    price: number;
  }[];
  images: ProductImage[];
  slug: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Velours Noir",
    brand: "Lumière",
    description: "Un parfum intense et luxueux aux notes de vanille noire, d'ambre et de bois de santal.",
    fullDescription: "Velours Noir est un parfum oriental captivant qui vous enveloppe d'une chaude étreinte de vanille riche et de bois exotiques. Ce mélange opulent s'ouvre sur des notes épicées de poivre noir et de bergamote, qui mènent à un cœur de vanille noire et d'ambre. Les notes de fond de bois de santal, de patchouli et de musc créent une impression durable à la fois sophistiquée et sensuelle. Parfait pour les soirées et les occasions spéciales.",
    price: 129,
    category: "Eau de Parfum",
    gender: "Unisex",
    featured: true,
    bestSeller: true,
    new: false,
    fragranceFamily: "Oriental",
    notes: [
      {
        type: "top",
        notes: ["Poivre noir", "Bergamote", "Cardamome"]
      },
      {
        type: "middle",
        notes: ["Vanille noire", "Ambre", "Jasmin"]
      },
      {
        type: "base",
        notes: ["Bois de santal", "Patchouli", "Musc"]
      }
    ],
    sizes: [
      {
        value: "50",
        unit: "ml",
        price: 129
      },
      {
        value: "100",
        unit: "ml",
        price: 189
      }
    ],
    images: [
      {
        id: 1,
        src: "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Flacon de parfum Velours Noir"
      },
      {
        id: 2,
        src: "https://images.pexels.com/photos/190837/pexels-photo-190837.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Emballage Velours Noir"
      }
    ],
    slug: "velours-noir"
  },
  {
    id: "p2",
    name: "Fleur d'azur",
    brand: "Oceanica",
    description: "Un parfum frais et aquatique avec des notes de sel de mer, de néroli et de musc blanc.",
    fullDescription: "Fleur d'azur capture l'essence d'un littoral méditerranéen par une parfaite journée d'été. Ce parfum aquatique s'ouvre sur une explosion d'agrumes et de sel marin, évoluant vers un cœur de néroli et de lavande. Le fond révèle des notes de musc blanc et de bois flotté, créant un parfum propre et frais qui évoque des souvenirs de brises océaniques et de peau chauffée par le soleil. Idéal pour une utilisation quotidienne et pour les mois d'été.",
    price: 95,
    category: "Eau de Toilette",
    gender: "Unisex",
    featured: true,
    bestSeller: false,
    new: true,
    fragranceFamily: "Aquatique",
    notes: [
      {
        type: "top",
        notes: ["Bergamote", "Sel de mer", "Citron"]
      },
      {
        type: "middle",
        notes: ["Néroli", "Lavande", "Jasmin"]
      },
      {
        type: "base",
        notes: ["Musc blanc", "Bois flotté", "Ambre gris"]
      }
    ],
    sizes: [
      {
        value: "50",
        unit: "ml",
        price: 95
      },
      {
        value: "100",
        unit: "ml",
        price: 145
      }
    ],
    images: [
      {
        id: 1,
        src: "https://images.pexels.com/photos/2922218/pexels-photo-2922218.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Flacon de parfum fleur d'azur"
      },
      {
        id: 2,
        src: "https://images.pexels.com/photos/965992/pexels-photo-965992.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Emballage fleur d'azur"
      }
    ],
    slug: "azure-bloom"
  },
  {
    id: "p3",
    name: "Ambre Royale",
    brand: "Maison noble",
    description: "Un parfum riche et épicé avec des notes d'ambre, de safran et de bois de cèdre.",
    fullDescription: "Amber Royale est une composition majestueuse qui rend hommage aux anciennes traditions royales. Ce parfum opulent s'ouvre sur le safran et le poivre rose, dévoilant un cœur d'ambre riche et de rose. Les notes de fond de bois de cèdre, d'oud et de vanille créent un sillage de luxe durable. Un parfum digne de la royauté, parfait pour ceux qui apprécient les senteurs sophistiquées et distinctives.",
    price: 175,
    category: "Parfum",
    gender: "Unisex",
    featured: false,
    bestSeller: true,
    new: false,
    fragranceFamily: "Boisé oriental",
    notes: [
      {
        type: "top",
        notes: ["Safran", "Poivre rose", "Bergamote"]
      },
      {
        type: "middle",
        notes: ["Ambre", "Rose", "Orris"]
      },
      {
        type: "base",
        notes: ["Bois de cèdre", "Oud", "Vanille"]
      }
    ],
    sizes: [
      {
        value: "50",
        unit: "ml",
        price: 175
      },
      {
        value: "100",
        unit: "ml",
        price: 245
      }
    ],
    images: [
      {
        id: 1,
        src: "https://images.pexels.com/photos/208405/pexels-photo-208405.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Amber Royale Perfume Bottle"
      },
      {
        id: 2,
        src: "https://images.pexels.com/photos/9001233/pexels-photo-9001233.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Amber Royale Packaging"
      }
    ],
    slug: "amber-royale"
  },
  {
    id: "p4",
    name: "Rose Éternel",
    brand: "Fleur de Paris",
    description: "Une élégante fragrance florale aux notes de rose bulgare, de pivoine et de patchouli.",
    fullDescription: "Rose Éternel célèbre la beauté intemporelle des roses dans une interprétation moderne. Ce parfum floral exquis commence par des notes de litchi et de bergamote, qui mènent à un cœur luxuriant de rose bulgare, de pivoine et de muguet. Les notes de fond de patchouli, de musc blanc et de graines d'ambrette ajoutent de la profondeur et de la longévité à ce parfum féminin. Parfait pour les femmes qui apprécient l'élégance classique avec une touche contemporaine.",
    price: 115,
    category: "Eau de Parfum",
    gender: "Women",
    featured: true,
    bestSeller: true,
    new: false,
    fragranceFamily: "Floral",
    notes: [
      {
        type: "top",
        notes: ["Litchi", "Bergamote", "Poivre rose"]
      },
      {
        type: "middle",
        notes: ["Rose bulgare", "Pivoine", "Muguet"]
      },
      {
        type: "base",
        notes: ["Patchouli", "Musc blanc", "Graines d'ambrette"]
      }
    ],
    sizes: [
      {
        value: "30",
        unit: "ml",
        price: 85
      },
      {
        value: "50",
        unit: "ml",
        price: 115
      },
      {
        value: "100",
        unit: "ml",
        price: 175
      }
    ],
    images: [
      {
        id: 1,
        src: "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Flacon de parfum Rose Éternel"
      },
      {
        id: 2,
        src: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Emballage Rose Éternel"
      }
    ],
    slug: "rose-eternel"
  },
  {
    id: "p5",
    name: "Oud de minuit",
    brand: "Mille et une nuits",
    description: "Un parfum mystérieux et intense avec des notes de oud, de cuir et d'encens fumé.",
    fullDescription: "Midnight Oud est un voyage hypnotique dans le monde de la parfumerie orientale. Ce parfum puissant s'ouvre sur un safran épicé et un encens fumé, menant à un cœur riche de oud et de cuir. Les notes de fond d'ambre, de bois de santal et de vanille ajoutent chaleur et profondeur à cette composition enivrante. Un choix audacieux pour ceux qui cherchent à s'affirmer par leur parfum.",
    price: 195,
    category: "Parfum",
    gender: "Unisex",
    featured: false,
    bestSeller: false,
    new: true,
    fragranceFamily: "Boisé Oriental",
    notes: [
      {
        type: "top",
        notes: ["Safran", "Encens", "Poivre noir"]
      },
      {
        type: "middle",
        notes: ["Oud", "Cuir", "Rose"]
      },
      {
        type: "base",
        notes: ["Ambre", "Bois de santal", "Vanille"]
      }
    ],
    sizes: [
      {
        value: "50",
        unit: "ml",
        price: 195
      },
      {
        value: "100",
        unit: "ml",
        price: 275
      }
    ],
    images: [
      {
        id: 1,
        src: "https://images.pexels.com/photos/2122349/pexels-photo-2122349.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Flacon de parfum Oud de Minuit"
      },
      {
        id: 2,
        src: "https://images.pexels.com/photos/4466534/pexels-photo-4466534.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Emballage Oud de Minuit"
      }
    ],
    slug: "midnight-oud"
  },
  {
    id: "p6",
    name: "Plantation d'agrumes",
    brand: "Méditerranéen",
    description: "Un parfum d'agrumes rafraîchissant avec des notes de citron de Sicile, de bergamote et de vétiver.",
    fullDescription: "Citrus Grove vous transporte dans un verger méditerranéen baigné de soleil. Ce parfum vivifiant s'ouvre sur des notes lumineuses de citron de Sicile, de bergamote et de mandarine. Le cœur révèle le romarin aromatique et le néroli, tandis que les notes de fond de vétiver, de cèdre et de musc blanc offrent un fini propre et net. Un choix parfait pour les temps chauds et ceux qui préfèrent les parfums légers et rafraîchissants.",
    price: 85,
    category: "Eau de Toilette",
    gender: "Unisex",
    featured: true,
    bestSeller: false,
    new: true,
    fragranceFamily: "Agrumes aromatiques",
    notes: [
      {
        type: "top",
        notes: ["Citron de Sicile", "Bergamote", "Mandarine Orange"]
      },
      {
        type: "middle",
        notes: ["Romarin", "Néroli", "Petit grain"]
      },
      {
        type: "base",
        notes: ["Vétiver", "Cèdre", "Musc blanc"]
      }
    ],
    sizes: [
      {
        value: "50",
        unit: "ml",
        price: 85
      },
      {
        value: "100",
        unit: "ml",
        price: 130
      }
    ],
    images: [
      {
        id: 1,
        src: "https://images.pexels.com/photos/1018483/pexels-photo-1018483.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Flacon de parfum Plantation d'agrumes"
      },
      {
        id: 2,
        src: "https://images.pexels.com/photos/4210607/pexels-photo-4210607.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Emballage Plantation d'agrumes"
      }
    ],
    slug: "citrus-grove"
  },
  {
    id: "p7",
    name: "Éclat d’Aurore",
    brand: "Lumière",
    description: "Une fragrance fraîche et lumineuse qui évoque l’éveil d’un matin printanier.",
    fullDescription: "Éclat d’Aurore est une eau de parfum florale et pétillante qui célèbre la lumière du jour naissante. Elle s’ouvre sur des notes vives de citron vert et de poire juteuse, suivies d’un cœur délicat de pivoine, de freesia et de rose blanche. La base douce de musc blanc et de bois de cèdre laisse un sillage frais et élégant. Idéal pour une utilisation quotidienne ou les journées ensoleillées.",
    price: 119,
    category: "Eau de Parfum",
    gender: "Women",
    featured: false,
    bestSeller: false,
    new: true,
    fragranceFamily: "Floral",
    notes: [
      {
        type: "top",
        notes: ["Citron vert", "Poire", "Mandarine"]
      },
      {
        type: "middle",
        notes: ["Pivoine", "Freesia", "Rose blanche"]
      },
      {
        type: "base",
        notes: ["Musc blanc", "Cèdre", "Ambrette"]
      }
    ],
    sizes: [
      {
        value: "30",
        unit: "ml",
        price: 79
      },
      {
        value: "75",
        unit: "ml",
        price: 119
      }
    ],
    images: [
      {
        id: 1,
        src: "https://images.pexels.com/photos/31359125/pexels-photo-31359125.jpeg",
        alt: "Flacon de parfum Éclat d’Aurore"
      },
      {
        id: 2,
        src: "https://images.pexels.com/photos/12567396/pexels-photo-12567396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Boîte de parfum Éclat d’Aurore"
      }
    ],
    slug: "eclat-d-aurore"
  }
];

export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getBestSellerProducts(): Product[] {
  return products.filter(product => product.bestSeller);
}

export function getNewProducts(): Product[] {
  return products.filter(product => product.new);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getRelatedProducts(productId: string, limit: number = 4): Product[] {
  const currentProduct = products.find(p => p.id === productId);
  if (!currentProduct) return [];
  
  return products
    .filter(p => p.id !== productId && 
              (p.fragranceFamily === currentProduct.fragranceFamily || 
               p.gender === currentProduct.gender))
    .slice(0, limit);
}

export const collections = [
  {
    id: "c1",
    name: "Parfums d'été",
    description: "Senteurs légères et rafraîchissantes, parfaites pour le temps chaud",
    image: "https://images.pexels.com/photos/3765976/pexels-photo-3765976.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "summer"
  },
  {
    id: "c2",
    name: "Collection orientale",
    description: "Des parfums riches et épicés inspirés de l'Orient",
    image: "https://images.pexels.com/photos/4110450/pexels-photo-4110450.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "oriental"
  },
  {
    id: "c3",
    name: "Essences florales",
    description: "Des parfums élégants aux notes florales les plus raffinées.",
    image: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "floral"
  }
];