/**
 * content.js — Couche de données (data layer)
 * Churrascaria Fazenda Do Brasil
 *
 * Centralise toutes les données métier du site.
 * Pour mettre à jour un prix, un plat ou une foire : modifier ici uniquement.
 */

export const PLATS = [
  {
    name:  'Picanha',
    desc:  'Cœur de rumsteck grillé au gros sel de mer',
    price: '26 €',
    badge: 'Grillades',
    bg:    'linear-gradient(135deg,#3D1A0A,#8B3A10)',
  },
  {
    name:  'Copacabana',
    desc:  'Nectar passion, nectar fraise, jus d\'ananas, sirop grenadine — 25cl',
    price: '7 €',
    badge: 'Cocktail Sans Alcool',
    bg:    'linear-gradient(135deg,#0A3D10,#10882A)',
  },
  {
    name:  'Rôti de Porc',
    desc:  "Mariné aux herbes fraîches, huile d'olive",
    price: '21 €',
    badge: 'Grillades',
    bg:    'linear-gradient(135deg,#3D200A,#7A3A10)',
  },
  {
    name:  'Muqueca de Peixe',
    desc:  'Poisson au lait de coco, riz blanc parfumé',
    price: '25 €',
    badge: 'Poisson',
    bg:    'linear-gradient(135deg,#0A1A3D,#10458B)',
  },
  {
    name:  'Margarita',
    desc:  'Tequila, citron, triple sec — 5cl',
    price: '12 €',
    badge: 'Cocktail',
    bg:    'linear-gradient(135deg,#0A3D10,#10882A)',
  },
  {
    name:  'Gambas',
    desc:  '5 pièces, sauce typique bahianaise, riz parfumé',
    price: '26 €',
    badge: 'Poisson',
    bg:    'linear-gradient(135deg,#0A2A2A,#107070)',
  },
  {
    name:  'Salade de Thon',
    desc:  'Mesclun, tomates, crudités, thon, œufs',
    price: '17 €',
    badge: 'Salade',
    bg:    'linear-gradient(135deg,#0A2A0A,#2A6A2A)',
  },
  {
    name:  'Poulet Grillé',
    desc:  "Mariné aux herbes fraîches et huile d'olive",
    price: '19 €',
    badge: 'Grillades',
    bg:    'linear-gradient(135deg,#2A1A0A,#8B6010)',
  },
  {
    name:  'Salade Tropicale',
    desc:  'Mesclun, cœurs de palmier, ananas, crevettes',
    price: '19 €',
    badge: 'Salade',
    bg:    'linear-gradient(135deg,#0A3D1A,#10882A)',
  },
  {
    name:  'Mojito',
    desc:  'Rhum, citron vert, menthe fraîche — 5cl',
    price: '10 €',
    badge: 'Cocktail',
    bg:    'linear-gradient(135deg,#0A2A1A,#206040)',
  },
  {
    name:  'Manjar',
    desc:  'Crème brésilienne maison, noix de coco, caramel',
    price: '7,5 €',
    badge: 'Dessert',
    bg:    'linear-gradient(135deg,#3D1A1A,#8B3A3A)',
  },
  {
    name:  'Salade de fruits',
    desc:  'Dessert maison de saison',
    price: '7,5 €',
    badge: 'Dessert',
    bg:    'linear-gradient(135deg,#2A1A0A,#7A4A10)',
  },
  {
    name:  'Café Do Brasil',
    desc:  'Café, cachaça, crème sucrée',
    price: '9 €',
    badge: 'Boisson chaude',
    bg:    'linear-gradient(135deg,#1A2A0A,#4A6A10)',
  },
  {
    name:  'Caïpirinha',
    desc:  'Cachaça, citron vert, sucre de canne — 5cl',
    price: '10 €',
    badge: 'Cocktail',
    bg:    'linear-gradient(135deg,#0A3D10,#10882A)',
  },
  {
    name:  "Gigot d'Agneau",
    desc:  "Mariné aux herbes fraîches, huile d'olive",
    price: '26 €',
    badge: 'Grillades',
    bg:    'linear-gradient(135deg,#1A1A0A,#6B5A10)',
  },
  {
    name:  'Caïpi Black',
    desc:  'Vodka noir, citron vert, sucre de canne — 5cl',
    price: '10 €',
    badge: 'Cocktail',
    bg:    'linear-gradient(135deg,#0A3D10,#10882A)',
  },
  {
    name:  'Guaraná',
    desc:  'Le soda brésilien emblématique — 33cl',
    price: '5 €',
    badge: 'Soft',
    bg:    'linear-gradient(135deg,#1A2A0A,#4A6A10)',
  },
  {
    name:  'Ipanema',
    desc:  'Nectar goyave, nectar banane, nectar mangue, sirop grenadine — 25cl',
    price: '7 €',
    badge: 'Cocktail Sans Alcool',
    bg:    'linear-gradient(135deg,#0A3D10,#10882A)',
  },
];

export const FORMULES = [
  {
    eyebrow: 'Formule',
    name:    'FAZENDA',
    price:   '26 €',
    count:   '3 Viandes',
    lines: [
      'Poulet · Saucisse · Rôti de porc',
      "Marinées herbes fraîches & huile d'olive",
      'Riz · Feijoada · Frites maison',
    ],
    tag: 'Entrée dans le monde du churrasco',
  },
  {
    eyebrow: 'Formule',
    name:    'FRONTEIRA',
    price:   '29 €',
    count:   '3 Viandes',
    lines: [
      'Poulet · Saucisse · Rôti de porc',
      "Marinées herbes fraîches & huile d'olive",
      'Riz · Feijoada · Frites maison',
      'Dessert au choix',
    ],
    tag: 'Plat + Dessert — La formule complète',
  },
  {
    eyebrow: 'Formule',
    name:    'CHURRASCO',
    price:   '38 €',
    count:   '5 Viandes',
    lines: [
      'Salade Fraîcheur',
      'Poulet · Saucisse · Rôti de porc',
      'Gigot d\'agneau · Picanha',
      'Riz · Feijoada · Frites maison',
      'Dessert au choix',
    ],
    tag: 'Entrée + Plat + Dessert — L\'expérience totale',
  },
  {
    eyebrow: 'Formule',
    name:    'ENFANT',
    price:   '10 €',
    count:   null,
    lines: [
      'Saucisse ou Poulet',
      'Frites maison',
      'Compote ou Boisson',
    ],
    tag: 'Pour les moins de 10 ans',
  },
];

export const FOIRES = [
  { ville: 'Moulins',         event: 'Foire de Moulins',         dates: '30/01 · 08/02', lieu: 'Parc Expo Moulins (03)',   status: 'passed',   label: 'Terminé'},
  { ville: 'Rennes',          event: 'Foire de Rennes',          dates: '21/03 · 29/03', lieu: 'Parc expo Rennes (35)',    status: 'passed',   label: 'Terminé'},
  { ville: 'Nantes',          event: 'Foire de Nantes',          dates: '02/04 · 06/04', lieu: 'Parc Expo Nantes (44)',    status: 'passed',   label: 'Terminé'},
  { ville: 'Limoges',         event: 'Foire de Limoges',         dates: '30/05 · 07/06', lieu: 'Parc Expo Limoges (87)',   status: 'soon',     label: 'À venir'},
  { ville: 'Nemours',         event: 'Foire de la Saint-Jean',   dates: '18/06 · 21/06', lieu: 'Coeur de Nemours (77)',    status: 'soon',     label: 'Bientôt'},
  { ville: 'Milly-la-Forêt',  event: 'Foire de Milly-la-Forêt',  dates: '26/06 · 28/06', lieu: 'Milly-la-Forêt (91)',      status: 'upcoming', label: 'Confirmé'},
  { ville: 'Douai',           event: 'Foire de Douai',           dates: 'A Confirmer',   lieu: 'Parc Expo Douai (59)',     status: 'upcoming', label: 'Confirmé'},
  { ville: 'Montluçon',       event: 'Foire de Montluçon',       dates: '03/10 · 11/10', lieu: 'Parc Expo Montluçon (03)', status: 'upcoming', label: 'Confirmé'},
  { ville: 'Grenoble',        event: 'Foire de Grenoble',        dates: '30/10 · 08/11', lieu: 'Parc Expo Grenoble (38)',  status: 'upcoming', label: 'Confirmé'},
];

/** Données de la carte complète par onglet */
export const MENU = {
  viandes: {
    note: 'Toutes nos viandes sont accompagnées de riz blanc parfumé, feijoada et frites maison',
    items: [
      { name: 'Poulet',          desc: "Mariné aux herbes fraîches et huile d'olive",        price: '19 €' },
      { name: 'Rôti de Porc',    desc: "Mariné aux herbes fraîches, huile d'olive",          price: '21 €' },
      { name: 'Picanha',         desc: 'Cœur de rumsteck grillé au gros sel de mer',         price: '26 €' },
      { name: "Gigot d'Agneau",  desc: "Mariné aux herbes fraîches, huile d'olive",          price: '26 €' },
    ],
  },

  salades: {
    items: [
      { name: 'Salade de Thon',    desc: 'Mesclun de salade, tomates, crudités, thon, œufs',                           price: '17 €' },
      { name: 'Salade Tropicale',  desc: 'Mesclun, crudités, cœurs de palmier, ananas et crevettes décortiquées',      price: '19 €' },
      { name: 'Muqueca de Peixe',  desc: 'Poisson au lait de coco, accompagné de riz blanc parfumé',                   price: '25 €' },
      { name: 'Gambas',            desc: '5 pièces, sauce typique bahianaise, riz blanc parfumé',                       price: '26 €' },
      { name: 'Assiette de Frites',desc: 'Frites fraîches maison',                                                      price: '4 €'  },
    ],
  },

  vins: {
    sections: [
      {
        title: 'VINS ROUGE — 75cl · 37,5cl',
        items: [
          { name: 'Bordeaux A.O.C',          desc: '75cl · 37,5cl · Verre 14cl',           price: '25 € · 15 € · 6 € le verre' },
          { name: 'Chilien – Gato Negro',    desc: '75cl · Verre 14cl',                    price: '28 € · 7 € le verre'        },
          { name: 'Tarani – IGP Comté Tolosan', desc: '75cl',                              price: '26 €'                        },
        ],
      },
      {
        title: 'VINS ROSÉS',
        items: [
          { name: 'Côte de Provence A.O.C',     desc: '75cl · Verre 14cl', price: '27 € · 7 € le verre' },
          { name: 'Tarani – IGP Comté Tolosan', desc: '75cl · Verre 14cl', price: '26 € · 5 € le verre' },
        ],
      },
      {
        title: 'VINS BLANCS',
        items: [
          { name: 'Cabernet Sauvignon – IGP',   desc: '75cl · 37,5cl — Verre 14cl', price: '26 € · 16 € · 6 € le verre' },
          { name: 'Chilien – Gato Negro',       desc: '75cl · Verre 14cl',           price: '28 € · 7 € le verre'        },
          { name: 'Tarani – IGP Comté Tolosan', desc: '75cl',                         price: '26 €'                        },
        ],
      },
      {
        title: 'CHAMPAGNE',
        items: [
          { name: 'Champagne',  desc: 'Bouteille · Coupe 12cl',                            price: '59 € · 10 €'                      },
        ],
      },
    ],
  },

  boissons: {
    sections: [
      {
        title: 'COCKTAILS',
        items: [
          { name: 'Caïpirinha · Caipi Black',  desc: 'Cachaça (ou Vodka Black), citron vert, sucre — 5cl',        price: '10 €' },
          { name: 'Mojito · Mojito Fraise',    desc: 'Rhum, citron vert, menthe fraîche — 5cl',                   price: '10 €' },
          { name: 'Mojito Royal',              desc: 'Rhum, citron vert, menthe fraîche, champagne — 6cl',        price: '12 €' },
          { name: 'Tequila Sunrise',           desc: 'Tequila, citron, jus d\'orange, grenadine — 5cl',           price: '9 €'  },
          { name: 'Planteur',                  desc: 'Rhum, citron, nectar fruits exotiques — 5cl',               price: '9 €'  },
          { name: 'Pina Colada',               desc: 'Rhum, coco, ananas, lait sucré — 5cl',                      price: '12 €' },
          { name: 'Margarita',                 desc: 'Tequila, jus de citron, triple sec — 5cl',                  price: '12 €' },
          { name: 'Batida de Fruits',          desc: 'Cachaça, nectar fruits exotiques, lait sucré — 5cl',        price: '10 €' },
          { name: 'Cocktail du Jour',          desc: 'Surprise du barman — 5cl',                                  price: '8 €'  },
        ],
      },
      {
        title: 'COCKTAIL SANS ALCOOL — 25cl',
        items: [
          { name: 'Ipanema',      desc: 'Goyave, banane, mangue, sirop de grenadine', price: '7 €' },
          { name: 'Copacabana',   desc: 'Passion, fraise, ananas',                    price: '7 €' },
          { name: 'Virgin Mojito',desc: 'Limonade, menthe et citron vert',            price: '7 €' },
          { name: 'Virgin Colada',desc: 'Nectar coco, nectar ananas, lait sucré',     price: '7 €' },
        ],
      },
      {
        title: 'SOFTS',
        items: [
          { name: 'Guaraná',                                          desc: 'Soda brésilien — 33cl',                                                price: '5 €'       },
          { name: 'Coca · Coca-Zéro · Orangina · Fanta · Ice-Tea',    desc: '33cl',                                                                 price: '3,5 €'     },
          { name: 'Sumol Orange · Sumol Ananas',                      desc: '25cl',                                                                 price: '4 €'       },
          { name: 'Jus de Fruit · Nectar Fruits',                     desc: 'Orange - ananas - passion · Mangue - goyave - banane - fraise — 25cl', price: '5 €'       },
          { name: 'Red Bull',                                         desc: '25cl',                                                                 price: '5 €'       },
          { name: 'Perrier',                                          desc: '33cl',                                                                 price: '5 €'       },
          { name: 'Eau plate · pétillante',                           desc: '50cl',                                                                 price: '2,5 · 4 €' },
          { name: 'Limonade · Sirop (pêche ou grenadine)',            desc: '25cl',                                                                 price: '3 €'       },  
        ],
      },
      {
        title: 'BIÈRES',
        items: [
          { name: 'Pression',              desc: '25cl · 50cl', price: '4 € · 7,5 €' },
          { name: 'Super Bock · Heineken', desc: '25cl',        price: '5 €'          },
          { name: 'Desperados · Corona',   desc: '33cl',        price: '7,5 €'        },
        ],
      },
      {
        title: 'APÉRITIFS',
        items: [
          { name: 'Ricard · Whisky · Whisky+Soft', desc: '2cl · 4cl · 4cl',               price: '4 € · 8 € · 9 €' },
          { name: 'Kir · Kir Royal',               desc: 'cassis · pêche — 12cl',         price: '6 € · 11 €'      },
          { name: 'Martini · Porto · Vodka',       desc: '5cl',                           price: '6 € · 6 € · 8 €' },
        ],
      },
      {
        title: 'DIGESTIFS',
        items: [
          { name: 'Rhum blanc · Tequila · Get 27 · Cachaça',           price: '7 € · 7 € · 7 € · 8 €'           },
        ],
      },
      {
        title: 'BOISSONS CHAUDES',
        items: [
          { name: 'Café · Café crème · Thé ou Tisane',  price: '2,5 € · 3 € · 4 €' },
          { name: 'Café Do Brasil',                     price: '9 €'               },
        ],
      },
    ],
  },

  desserts: {
    items: [
      { name: 'Manjar',          desc: 'Crème brésilienne maison à la noix de coco avec son caramel liquide', price: '7,5 €' },
      { name: 'Salade de Fruit', desc: 'Fruits frais maison de saison',                                       price: '7,5 €' },
      { name: 'Tarte aux Pommes',                                                                             price: '7,5 €' },
      { name: 'Dessert du Jour', desc: 'Préparation maison selon les arrivages',                              price: '7,5 €' },
    ],
  },
};
