import type { Category, Product } from "@/lib/types";

export const categories: Category[] = [
  {
    "slug": "souris-gaming",
    "name": "Souris gaming",
    "description": "Précision, légèreté et capteurs haut de gamme.",
    "icon": "MousePointer2"
  },
  {
    "slug": "claviers-mecaniques",
    "name": "Claviers mécaniques",
    "description": "Switches rapides, formats TKL et RGB maîtrisé.",
    "icon": "Keyboard"
  },
  {
    "slug": "casques-audio",
    "name": "Casques audio",
    "description": "Immersion, spatialisation et micros broadcast.",
    "icon": "Headphones"
  },
  {
    "slug": "ecrans-gaming",
    "name": "Écrans gaming",
    "description": "OLED, QD-OLED, haute fréquence et HDR.",
    "icon": "Monitor"
  },
  {
    "slug": "chaises-gaming",
    "name": "Chaises gaming",
    "description": "Ergonomie longue durée et finitions premium.",
    "icon": "Armchair"
  },
  {
    "slug": "streaming-accessoires",
    "name": "Streaming / accessoires",
    "description": "Contrôle, audio, lumière et vidéo pro.",
    "icon": "RadioTower"
  },
  {
    "slug": "pc-setup-premium",
    "name": "PC / setup premium",
    "description": "Bundles, machines extrêmes et setups complets.",
    "icon": "Cpu"
  }
];

export const products: Product[] = [
  {
    "id": "p001",
    "name": "Logitech G PRO X SUPERLIGHT 2",
    "brand": "Logitech G",
    "category": "Souris gaming",
    "slug": "logitech-g-pro-x-superlight-2",
    "price": 169.99,
    "oldPrice": 189.99,
    "rating": 4.8,
    "reviews": 1248,
    "stock": 18,
    "badges": [
      "Best-seller",
      "Pro Pick"
    ],
    "rgb": "#06B6D4",
    "recommended": true,
    "specs": {
      "Capteur": "HERO 2 44K",
      "Poids": "60 g",
      "Connectivité": "LIGHTSPEED sans-fil",
      "Autonomie": "95 h",
      "Usage": "FPS compétitif"
    },
    "short": "Souris ultra-légère pensée pour la précision compétitive.",
    "use": "FPS compétitif",
    "categorySlug": "souris-gaming",
    "image": "/products/logitech-g-pro-x-superlight-2.svg",
    "gallery": [
      "/products/logitech-g-pro-x-superlight-2.svg",
      "/products/logitech-g-pro-x-superlight-2-angle.svg",
      "/products/logitech-g-pro-x-superlight-2-detail.svg"
    ],
    "longDescription": "Logitech G PRO X SUPERLIGHT 2 est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p002",
    "name": "Logitech G502 X LIGHTSPEED",
    "brand": "Logitech G",
    "category": "Souris gaming",
    "slug": "logitech-g502-x-lightspeed",
    "price": 139.99,
    "rating": 4.7,
    "reviews": 984,
    "stock": 24,
    "badges": [
      "Popular"
    ],
    "rgb": "#2563EB",
    "recommended": true,
    "specs": {
      "Capteur": "HERO 25K",
      "Poids": "102 g",
      "Connectivité": "LIGHTSPEED sans-fil",
      "Autonomie": "140 h",
      "Usage": "Polyvalent"
    },
    "short": "Icône gaming revisitée avec switches hybrides et ergonomie premium.",
    "use": "MMO / productivité",
    "categorySlug": "souris-gaming",
    "image": "/products/logitech-g502-x-lightspeed.svg",
    "gallery": [
      "/products/logitech-g502-x-lightspeed.svg",
      "/products/logitech-g502-x-lightspeed-angle.svg",
      "/products/logitech-g502-x-lightspeed-detail.svg"
    ],
    "longDescription": "Logitech G502 X LIGHTSPEED est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p003",
    "name": "Razer Viper",
    "brand": "Razer",
    "category": "Souris gaming",
    "slug": "razer-viper",
    "price": 89.99,
    "oldPrice": 109.99,
    "rating": 4.6,
    "reviews": 760,
    "stock": 31,
    "badges": [
      "Streamer Choice"
    ],
    "rgb": "#8B5CF6",
    "recommended": false,
    "specs": {
      "Capteur": "Focus+",
      "Poids": "69 g",
      "Connectivité": "Filaire / sans-fil selon modèle",
      "Autonomie": "70 h",
      "Usage": "FPS rapide"
    },
    "short": "Format ambidextre rapide, nerveux et orienté esport.",
    "use": "FPS rapide",
    "categorySlug": "souris-gaming",
    "image": "/products/razer-viper.svg",
    "gallery": [
      "/products/razer-viper.svg",
      "/products/razer-viper-angle.svg",
      "/products/razer-viper-detail.svg"
    ],
    "longDescription": "Razer Viper est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p004",
    "name": "SteelSeries Aerox",
    "brand": "SteelSeries",
    "category": "Souris gaming",
    "slug": "steelseries-aerox",
    "price": 99.99,
    "rating": 4.5,
    "reviews": 541,
    "stock": 15,
    "badges": [
      "New"
    ],
    "rgb": "#06B6D4",
    "recommended": false,
    "specs": {
      "Capteur": "TrueMove Air",
      "Poids": "66 g",
      "Connectivité": "Quantum 2.0 Wireless",
      "Autonomie": "180 h",
      "Usage": "Setup léger RGB"
    },
    "short": "Souris ajourée ultra-légère avec résistance aux éclaboussures.",
    "use": "Setup RGB",
    "categorySlug": "souris-gaming",
    "image": "/products/steelseries-aerox.svg",
    "gallery": [
      "/products/steelseries-aerox.svg",
      "/products/steelseries-aerox-angle.svg",
      "/products/steelseries-aerox-detail.svg"
    ],
    "longDescription": "SteelSeries Aerox est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p005",
    "name": "Corsair DARKSTAR Wireless",
    "brand": "Corsair",
    "category": "Souris gaming",
    "slug": "corsair-darkstar-wireless",
    "price": 149.99,
    "rating": 4.4,
    "reviews": 329,
    "stock": 12,
    "badges": [
      "MMO Pick"
    ],
    "rgb": "#EF4444",
    "recommended": false,
    "specs": {
      "Capteur": "MARKSMAN 26K",
      "Poids": "96 g",
      "Connectivité": "SLIPSTREAM Wireless",
      "Autonomie": "80 h",
      "Usage": "MMO / MOBA"
    },
    "short": "Souris MMO sans-fil avec nombreux boutons programmables.",
    "use": "MMO",
    "categorySlug": "souris-gaming",
    "image": "/products/corsair-darkstar-wireless.svg",
    "gallery": [
      "/products/corsair-darkstar-wireless.svg",
      "/products/corsair-darkstar-wireless-angle.svg",
      "/products/corsair-darkstar-wireless-detail.svg"
    ],
    "longDescription": "Corsair DARKSTAR Wireless est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p006",
    "name": "Logitech G915 X LIGHTSPEED",
    "brand": "Logitech G",
    "category": "Claviers mécaniques",
    "slug": "logitech-g915-x-lightspeed",
    "price": 249.99,
    "rating": 4.8,
    "reviews": 642,
    "stock": 10,
    "badges": [
      "Ultra premium"
    ],
    "rgb": "#8B5CF6",
    "recommended": true,
    "specs": {
      "Switches": "Low profile mécaniques",
      "Format": "Full size",
      "Connectivité": "LIGHTSPEED / Bluetooth",
      "Autonomie": "800 h sans RGB",
      "Rétroéclairage": "LIGHTSYNC RGB"
    },
    "short": "Clavier low-profile premium, aluminium et sans-fil ultra rapide.",
    "use": "Setup luxe",
    "categorySlug": "claviers-mecaniques",
    "image": "/products/logitech-g915-x-lightspeed.svg",
    "gallery": [
      "/products/logitech-g915-x-lightspeed.svg",
      "/products/logitech-g915-x-lightspeed-angle.svg",
      "/products/logitech-g915-x-lightspeed-detail.svg"
    ],
    "longDescription": "Logitech G915 X LIGHTSPEED est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p007",
    "name": "Logitech G PRO X TKL Wireless",
    "brand": "Logitech G",
    "category": "Claviers mécaniques",
    "slug": "logitech-g-pro-x-tkl-wireless",
    "price": 219.99,
    "oldPrice": 239.99,
    "rating": 4.7,
    "reviews": 512,
    "stock": 16,
    "badges": [
      "Pro Pick"
    ],
    "rgb": "#06B6D4",
    "recommended": true,
    "specs": {
      "Switches": "GX remplaçables",
      "Format": "TKL",
      "Connectivité": "LIGHTSPEED / Bluetooth",
      "Autonomie": "50 h RGB",
      "Rétroéclairage": "LIGHTSYNC RGB"
    },
    "short": "Format tournoi TKL pensé pour les joueurs compétitifs.",
    "use": "FPS compétitif",
    "categorySlug": "claviers-mecaniques",
    "image": "/products/logitech-g-pro-x-tkl-wireless.svg",
    "gallery": [
      "/products/logitech-g-pro-x-tkl-wireless.svg",
      "/products/logitech-g-pro-x-tkl-wireless-angle.svg",
      "/products/logitech-g-pro-x-tkl-wireless-detail.svg"
    ],
    "longDescription": "Logitech G PRO X TKL Wireless est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p008",
    "name": "SteelSeries Apex Pro Gen 3",
    "brand": "SteelSeries",
    "category": "Claviers mécaniques",
    "slug": "steelseries-apex-pro-gen-3",
    "price": 239.99,
    "rating": 4.9,
    "reviews": 887,
    "stock": 9,
    "badges": [
      "Best-seller",
      "New"
    ],
    "rgb": "#06B6D4",
    "recommended": true,
    "specs": {
      "Switches": "OmniPoint ajustables",
      "Format": "Full size / TKL",
      "Connectivité": "Filaire",
      "Écran": "OLED smart display",
      "Rétroéclairage": "Prism RGB"
    },
    "short": "Switches magnétiques réglables pour une réactivité extrême.",
    "use": "FPS compétitif",
    "categorySlug": "claviers-mecaniques",
    "image": "/products/steelseries-apex-pro-gen-3.svg",
    "gallery": [
      "/products/steelseries-apex-pro-gen-3.svg",
      "/products/steelseries-apex-pro-gen-3-angle.svg",
      "/products/steelseries-apex-pro-gen-3-detail.svg"
    ],
    "longDescription": "SteelSeries Apex Pro Gen 3 est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p009",
    "name": "Razer Huntsman",
    "brand": "Razer",
    "category": "Claviers mécaniques",
    "slug": "razer-huntsman",
    "price": 179.99,
    "rating": 4.6,
    "reviews": 978,
    "stock": 22,
    "badges": [
      "Popular"
    ],
    "rgb": "#8B5CF6",
    "recommended": false,
    "specs": {
      "Switches": "Optiques Razer",
      "Format": "Full size",
      "Connectivité": "Filaire",
      "Polling": "8000 Hz selon modèle",
      "Rétroéclairage": "Chroma RGB"
    },
    "short": "Clavier optique rapide avec signature Razer Chroma.",
    "use": "Gaming polyvalent",
    "categorySlug": "claviers-mecaniques",
    "image": "/products/razer-huntsman.svg",
    "gallery": [
      "/products/razer-huntsman.svg",
      "/products/razer-huntsman-angle.svg",
      "/products/razer-huntsman-detail.svg"
    ],
    "longDescription": "Razer Huntsman est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p010",
    "name": "Corsair K70",
    "brand": "Corsair",
    "category": "Claviers mécaniques",
    "slug": "corsair-k70",
    "price": 189.99,
    "oldPrice": 209.99,
    "rating": 4.7,
    "reviews": 1104,
    "stock": 19,
    "badges": [
      "Classic"
    ],
    "rgb": "#EF4444",
    "recommended": false,
    "specs": {
      "Switches": "CHERRY MX / OPX selon modèle",
      "Format": "Full size",
      "Connectivité": "Filaire",
      "Châssis": "Aluminium",
      "Rétroéclairage": "RGB par touche"
    },
    "short": "Référence mécanique robuste, précise et configurable.",
    "use": "Setup PC",
    "categorySlug": "claviers-mecaniques",
    "image": "/products/corsair-k70.svg",
    "gallery": [
      "/products/corsair-k70.svg",
      "/products/corsair-k70-angle.svg",
      "/products/corsair-k70-detail.svg"
    ],
    "longDescription": "Corsair K70 est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p011",
    "name": "Logitech G522 LIGHTSPEED",
    "brand": "Logitech G",
    "category": "Casques audio",
    "slug": "logitech-g522-lightspeed",
    "price": 159.99,
    "rating": 4.5,
    "reviews": 214,
    "stock": 21,
    "badges": [
      "New"
    ],
    "rgb": "#2563EB",
    "recommended": true,
    "specs": {
      "Audio": "Drivers PRO-G",
      "Micro": "Broadcast quality",
      "Connectivité": "LIGHTSPEED / Bluetooth",
      "Autonomie": "70 h",
      "Compatibilité": "PC / console"
    },
    "short": "Casque sans-fil confortable pour jeu, stream et vocal premium.",
    "use": "Streaming",
    "categorySlug": "casques-audio",
    "image": "/products/logitech-g522-lightspeed.svg",
    "gallery": [
      "/products/logitech-g522-lightspeed.svg",
      "/products/logitech-g522-lightspeed-angle.svg",
      "/products/logitech-g522-lightspeed-detail.svg"
    ],
    "longDescription": "Logitech G522 LIGHTSPEED est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p012",
    "name": "Logitech G PRO X Wireless",
    "brand": "Logitech G",
    "category": "Casques audio",
    "slug": "logitech-g-pro-x-wireless",
    "price": 199.99,
    "oldPrice": 229.99,
    "rating": 4.7,
    "reviews": 1420,
    "stock": 14,
    "badges": [
      "Pro Pick"
    ],
    "rgb": "#06B6D4",
    "recommended": true,
    "specs": {
      "Audio": "DTS Headphone:X 2.0",
      "Micro": "Blue VO!CE",
      "Connectivité": "LIGHTSPEED",
      "Autonomie": "20 h",
      "Compatibilité": "PC / PlayStation"
    },
    "short": "Son compétitif et micro avancé pour communication nette.",
    "use": "FPS compétitif",
    "categorySlug": "casques-audio",
    "image": "/products/logitech-g-pro-x-wireless.svg",
    "gallery": [
      "/products/logitech-g-pro-x-wireless.svg",
      "/products/logitech-g-pro-x-wireless-angle.svg",
      "/products/logitech-g-pro-x-wireless-detail.svg"
    ],
    "longDescription": "Logitech G PRO X Wireless est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p013",
    "name": "SteelSeries Arctis Nova Pro Omni",
    "brand": "SteelSeries",
    "category": "Casques audio",
    "slug": "steelseries-arctis-nova-pro-omni",
    "price": 349.99,
    "rating": 4.8,
    "reviews": 356,
    "stock": 7,
    "badges": [
      "Ultra premium"
    ],
    "rgb": "#8B5CF6",
    "recommended": true,
    "specs": {
      "Audio": "Hi-Res",
      "DAC": "GameDAC / station",
      "Connectivité": "Multi-système",
      "Autonomie": "Batteries échangeables",
      "Compatibilité": "PC / PS / Xbox"
    },
    "short": "Hub audio premium pour contrôler plusieurs plateformes.",
    "use": "Setup ultra premium",
    "categorySlug": "casques-audio",
    "image": "/products/steelseries-arctis-nova-pro-omni.svg",
    "gallery": [
      "/products/steelseries-arctis-nova-pro-omni.svg",
      "/products/steelseries-arctis-nova-pro-omni-angle.svg",
      "/products/steelseries-arctis-nova-pro-omni-detail.svg"
    ],
    "longDescription": "SteelSeries Arctis Nova Pro Omni est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p014",
    "name": "SteelSeries Arctis Nova Pro Wireless",
    "brand": "SteelSeries",
    "category": "Casques audio",
    "slug": "steelseries-arctis-nova-pro-wireless",
    "price": 329.99,
    "oldPrice": 379.99,
    "rating": 4.8,
    "reviews": 1010,
    "stock": 11,
    "badges": [
      "Best-seller"
    ],
    "rgb": "#06B6D4",
    "recommended": true,
    "specs": {
      "Audio": "Hi-Res Wireless",
      "ANC": "Réduction de bruit active",
      "Connectivité": "2.4 GHz / Bluetooth",
      "Autonomie": "Batteries échangeables",
      "Compatibilité": "PC / console"
    },
    "short": "Casque haut de gamme avec ANC et double connectivité.",
    "use": "Streaming / console",
    "categorySlug": "casques-audio",
    "image": "/products/steelseries-arctis-nova-pro-wireless.svg",
    "gallery": [
      "/products/steelseries-arctis-nova-pro-wireless.svg",
      "/products/steelseries-arctis-nova-pro-wireless-angle.svg",
      "/products/steelseries-arctis-nova-pro-wireless-detail.svg"
    ],
    "longDescription": "SteelSeries Arctis Nova Pro Wireless est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p015",
    "name": "Corsair HS80 MAX Wireless",
    "brand": "Corsair",
    "category": "Casques audio",
    "slug": "corsair-hs80-max-wireless",
    "price": 179.99,
    "rating": 4.5,
    "reviews": 628,
    "stock": 23,
    "badges": [
      "Streamer Choice"
    ],
    "rgb": "#EF4444",
    "recommended": false,
    "specs": {
      "Audio": "Dolby Atmos",
      "Micro": "Omnidirectionnel",
      "Connectivité": "SLIPSTREAM / Bluetooth",
      "Autonomie": "65 h",
      "Compatibilité": "PC / Mac / PS"
    },
    "short": "Casque confortable avec spatialisation et autonomie solide.",
    "use": "Streaming",
    "categorySlug": "casques-audio",
    "image": "/products/corsair-hs80-max-wireless.svg",
    "gallery": [
      "/products/corsair-hs80-max-wireless.svg",
      "/products/corsair-hs80-max-wireless-angle.svg",
      "/products/corsair-hs80-max-wireless-detail.svg"
    ],
    "longDescription": "Corsair HS80 MAX Wireless est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p016",
    "name": "MSI MPG OLED 322URDX36",
    "brand": "MSI",
    "category": "Écrans gaming",
    "slug": "msi-mpg-oled-322urdx36",
    "price": 1199.99,
    "rating": 4.8,
    "reviews": 84,
    "stock": 5,
    "badges": [
      "New",
      "Ultra premium"
    ],
    "rgb": "#8B5CF6",
    "recommended": true,
    "specs": {
      "Dalle": "OLED",
      "Taille": "32 pouces",
      "Résolution": "4K UHD",
      "Fréquence": "240 Hz / plus selon modèle",
      "Usage": "PC haut de gamme"
    },
    "short": "Écran OLED premium pour immersion 4K et contraste extrême.",
    "use": "Setup ultra premium",
    "categorySlug": "ecrans-gaming",
    "image": "/products/msi-mpg-oled-322urdx36.svg",
    "gallery": [
      "/products/msi-mpg-oled-322urdx36.svg",
      "/products/msi-mpg-oled-322urdx36-angle.svg",
      "/products/msi-mpg-oled-322urdx36-detail.svg"
    ],
    "longDescription": "MSI MPG OLED 322URDX36 est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p017",
    "name": "MSI MPG 322UR QD-OLED",
    "brand": "MSI",
    "category": "Écrans gaming",
    "slug": "msi-mpg-322ur-qd-oled",
    "price": 1099.99,
    "oldPrice": 1299.99,
    "rating": 4.9,
    "reviews": 156,
    "stock": 8,
    "badges": [
      "Best-seller"
    ],
    "rgb": "#06B6D4",
    "recommended": true,
    "specs": {
      "Dalle": "QD-OLED",
      "Taille": "32 pouces",
      "Résolution": "4K UHD",
      "Fréquence": "240 Hz",
      "HDR": "True Black"
    },
    "short": "QD-OLED 4K pour joueurs exigeants et créateurs.",
    "use": "PC haut de gamme",
    "categorySlug": "ecrans-gaming",
    "image": "/products/msi-mpg-322ur-qd-oled.svg",
    "gallery": [
      "/products/msi-mpg-322ur-qd-oled.svg",
      "/products/msi-mpg-322ur-qd-oled-angle.svg",
      "/products/msi-mpg-322ur-qd-oled-detail.svg"
    ],
    "longDescription": "MSI MPG 322UR QD-OLED est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p018",
    "name": "ASUS ROG Strix XG248QSG Ace",
    "brand": "ASUS ROG",
    "category": "Écrans gaming",
    "slug": "asus-rog-strix-xg248qsg-ace",
    "price": 499.99,
    "rating": 4.6,
    "reviews": 93,
    "stock": 13,
    "badges": [
      "FPS Pick"
    ],
    "rgb": "#EF4444",
    "recommended": true,
    "specs": {
      "Dalle": "Fast TN / IPS selon série",
      "Taille": "24 pouces",
      "Résolution": "Full HD",
      "Fréquence": "Très haute fréquence",
      "Usage": "FPS compétitif"
    },
    "short": "Moniteur compact orienté vitesse et précision esport.",
    "use": "FPS compétitif",
    "categorySlug": "ecrans-gaming",
    "image": "/products/asus-rog-strix-xg248qsg-ace.svg",
    "gallery": [
      "/products/asus-rog-strix-xg248qsg-ace.svg",
      "/products/asus-rog-strix-xg248qsg-ace-angle.svg",
      "/products/asus-rog-strix-xg248qsg-ace-detail.svg"
    ],
    "longDescription": "ASUS ROG Strix XG248QSG Ace est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p019",
    "name": "ASUS ROG Swift OLED PG27AQWP-G",
    "brand": "ASUS ROG",
    "category": "Écrans gaming",
    "slug": "asus-rog-swift-oled-pg27aqwp-g",
    "price": 999.99,
    "rating": 4.8,
    "reviews": 74,
    "stock": 6,
    "badges": [
      "Pro Pick"
    ],
    "rgb": "#8B5CF6",
    "recommended": true,
    "specs": {
      "Dalle": "OLED",
      "Taille": "27 pouces",
      "Résolution": "QHD / Dual mode selon modèle",
      "Fréquence": "Très haute fréquence",
      "HDR": "OLED HDR"
    },
    "short": "OLED rapide pour compétitif premium et rendu impeccable.",
    "use": "FPS compétitif",
    "categorySlug": "ecrans-gaming",
    "image": "/products/asus-rog-swift-oled-pg27aqwp-g.svg",
    "gallery": [
      "/products/asus-rog-swift-oled-pg27aqwp-g.svg",
      "/products/asus-rog-swift-oled-pg27aqwp-g-angle.svg",
      "/products/asus-rog-swift-oled-pg27aqwp-g-detail.svg"
    ],
    "longDescription": "ASUS ROG Swift OLED PG27AQWP-G est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p020",
    "name": "ASUS ROG Swift OLED PG34WCDM",
    "brand": "ASUS ROG",
    "category": "Écrans gaming",
    "slug": "asus-rog-swift-oled-pg34wcdm",
    "price": 1299.99,
    "rating": 4.9,
    "reviews": 138,
    "stock": 4,
    "badges": [
      "Ultra premium"
    ],
    "rgb": "#06B6D4",
    "recommended": true,
    "specs": {
      "Dalle": "OLED incurvé",
      "Taille": "34 pouces",
      "Résolution": "UWQHD",
      "Fréquence": "240 Hz",
      "Usage": "Immersion"
    },
    "short": "Ultra-wide OLED pour setup luxe et immersion maximale.",
    "use": "Setup luxe",
    "categorySlug": "ecrans-gaming",
    "image": "/products/asus-rog-swift-oled-pg34wcdm.svg",
    "gallery": [
      "/products/asus-rog-swift-oled-pg34wcdm.svg",
      "/products/asus-rog-swift-oled-pg34wcdm-angle.svg",
      "/products/asus-rog-swift-oled-pg34wcdm-detail.svg"
    ],
    "longDescription": "ASUS ROG Swift OLED PG34WCDM est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p021",
    "name": "Secretlab TITAN Evo",
    "brand": "Secretlab",
    "category": "Chaises gaming",
    "slug": "secretlab-titan-evo",
    "price": 549.99,
    "rating": 4.8,
    "reviews": 2031,
    "stock": 18,
    "badges": [
      "Best-seller"
    ],
    "rgb": "#2563EB",
    "recommended": true,
    "specs": {
      "Revêtement": "SoftWeave / similicuir selon variante",
      "Taille": "Regular / XL",
      "Support": "Lombaire intégré",
      "Accoudoirs": "4D magnétiques",
      "Usage": "Longues sessions"
    },
    "short": "Chaise premium de référence pour confort et durabilité.",
    "use": "Longues sessions",
    "categorySlug": "chaises-gaming",
    "image": "/products/secretlab-titan-evo.svg",
    "gallery": [
      "/products/secretlab-titan-evo.svg",
      "/products/secretlab-titan-evo-angle.svg",
      "/products/secretlab-titan-evo-detail.svg"
    ],
    "longDescription": "Secretlab TITAN Evo est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p022",
    "name": "Secretlab TITAN Evo NanoGen Edition",
    "brand": "Secretlab",
    "category": "Chaises gaming",
    "slug": "secretlab-titan-evo-nanogen-edition",
    "price": 799.99,
    "rating": 4.9,
    "reviews": 185,
    "stock": 5,
    "badges": [
      "Ultra premium",
      "New"
    ],
    "rgb": "#8B5CF6",
    "recommended": true,
    "specs": {
      "Revêtement": "NanoGen premium",
      "Taille": "Regular / XL",
      "Support": "Lombaire avancé",
      "Accoudoirs": "4D magnétiques",
      "Usage": "Setup luxe"
    },
    "short": "Édition luxe avec finition premium et confort supérieur.",
    "use": "Setup luxe",
    "categorySlug": "chaises-gaming",
    "image": "/products/secretlab-titan-evo-nanogen-edition.svg",
    "gallery": [
      "/products/secretlab-titan-evo-nanogen-edition.svg",
      "/products/secretlab-titan-evo-nanogen-edition-angle.svg",
      "/products/secretlab-titan-evo-nanogen-edition-detail.svg"
    ],
    "longDescription": "Secretlab TITAN Evo NanoGen Edition est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p023",
    "name": "Secretlab TITAN Evo Lite",
    "brand": "Secretlab",
    "category": "Chaises gaming",
    "slug": "secretlab-titan-evo-lite",
    "price": 449.99,
    "oldPrice": 499.99,
    "rating": 4.6,
    "reviews": 316,
    "stock": 20,
    "badges": [
      "Value Pick"
    ],
    "rgb": "#06B6D4",
    "recommended": false,
    "specs": {
      "Revêtement": "SoftWeave / similicuir",
      "Taille": "Regular",
      "Support": "Lombaire ergonomique",
      "Accoudoirs": "Réglables",
      "Usage": "Setup étudiant"
    },
    "short": "Version plus accessible conservant l’ADN Secretlab.",
    "use": "Étudiant gamer",
    "categorySlug": "chaises-gaming",
    "image": "/products/secretlab-titan-evo-lite.svg",
    "gallery": [
      "/products/secretlab-titan-evo-lite.svg",
      "/products/secretlab-titan-evo-lite-angle.svg",
      "/products/secretlab-titan-evo-lite-detail.svg"
    ],
    "longDescription": "Secretlab TITAN Evo Lite est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p024",
    "name": "Elgato Stream Deck",
    "brand": "Elgato",
    "category": "Streaming / accessoires",
    "slug": "elgato-stream-deck",
    "price": 149.99,
    "rating": 4.9,
    "reviews": 3400,
    "stock": 42,
    "badges": [
      "Streamer Choice",
      "Best-seller"
    ],
    "rgb": "#06B6D4",
    "recommended": true,
    "specs": {
      "Touches": "15 LCD",
      "Connexion": "USB-C",
      "Logiciel": "Elgato Marketplace",
      "Compatibilité": "Mac / PC",
      "Usage": "Stream control"
    },
    "short": "Contrôle instantané du stream, scènes, macros et apps.",
    "use": "Streaming",
    "categorySlug": "streaming-accessoires",
    "image": "/products/elgato-stream-deck.svg",
    "gallery": [
      "/products/elgato-stream-deck.svg",
      "/products/elgato-stream-deck-angle.svg",
      "/products/elgato-stream-deck-detail.svg"
    ],
    "longDescription": "Elgato Stream Deck est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p025",
    "name": "Elgato Stream Deck +",
    "brand": "Elgato",
    "category": "Streaming / accessoires",
    "slug": "elgato-stream-deck-plus",
    "price": 229.99,
    "rating": 4.8,
    "reviews": 1085,
    "stock": 27,
    "badges": [
      "Pro Pick"
    ],
    "rgb": "#8B5CF6",
    "recommended": true,
    "specs": {
      "Touches": "8 LCD + 4 molettes",
      "Connexion": "USB-C",
      "Écran": "Touch strip",
      "Compatibilité": "Mac / PC",
      "Usage": "Audio / live control"
    },
    "short": "Console de production avec molettes et surface tactile.",
    "use": "Créateur de contenu",
    "categorySlug": "streaming-accessoires",
    "image": "/products/elgato-stream-deck-plus.svg",
    "gallery": [
      "/products/elgato-stream-deck-plus.svg",
      "/products/elgato-stream-deck-plus-angle.svg",
      "/products/elgato-stream-deck-plus-detail.svg"
    ],
    "longDescription": "Elgato Stream Deck + est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p026",
    "name": "Elgato Wave XLR",
    "brand": "Elgato",
    "category": "Streaming / accessoires",
    "slug": "elgato-wave-xlr",
    "price": 159.99,
    "oldPrice": 179.99,
    "rating": 4.7,
    "reviews": 812,
    "stock": 25,
    "badges": [
      "Audio Pick"
    ],
    "rgb": "#2563EB",
    "recommended": true,
    "specs": {
      "Entrée": "XLR",
      "Préampli": "75 dB",
      "Logiciel": "Wave Link",
      "Alimentation": "Phantom 48V",
      "Usage": "Micro pro"
    },
    "short": "Interface audio XLR compacte avec mixage logiciel puissant.",
    "use": "Streaming audio",
    "categorySlug": "streaming-accessoires",
    "image": "/products/elgato-wave-xlr.svg",
    "gallery": [
      "/products/elgato-wave-xlr.svg",
      "/products/elgato-wave-xlr-angle.svg",
      "/products/elgato-wave-xlr-detail.svg"
    ],
    "longDescription": "Elgato Wave XLR est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p027",
    "name": "Elgato Facecam",
    "brand": "Elgato",
    "category": "Streaming / accessoires",
    "slug": "elgato-facecam",
    "price": 169.99,
    "rating": 4.6,
    "reviews": 932,
    "stock": 30,
    "badges": [
      "Streamer Choice"
    ],
    "rgb": "#06B6D4",
    "recommended": true,
    "specs": {
      "Capteur": "Sony STARVIS selon modèle",
      "Résolution": "1080p60",
      "Connexion": "USB 3.0",
      "Logiciel": "Camera Hub",
      "Usage": "Webcam stream"
    },
    "short": "Caméra de stream nette, fluide et configurable.",
    "use": "Streaming vidéo",
    "categorySlug": "streaming-accessoires",
    "image": "/products/elgato-facecam.svg",
    "gallery": [
      "/products/elgato-facecam.svg",
      "/products/elgato-facecam-angle.svg",
      "/products/elgato-facecam-detail.svg"
    ],
    "longDescription": "Elgato Facecam est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p028",
    "name": "Elgato Key Light",
    "brand": "Elgato",
    "category": "Streaming / accessoires",
    "slug": "elgato-key-light",
    "price": 199.99,
    "rating": 4.7,
    "reviews": 740,
    "stock": 17,
    "badges": [
      "Studio Pick"
    ],
    "rgb": "#F8FAFC",
    "recommended": true,
    "specs": {
      "Luminosité": "2800 lumens",
      "Température": "2900K-7000K",
      "Contrôle": "Wi-Fi / app",
      "Montage": "Bureau",
      "Usage": "Éclairage stream"
    },
    "short": "Éclairage studio contrôlable pour rendu vidéo professionnel.",
    "use": "Créateur de contenu",
    "categorySlug": "streaming-accessoires",
    "image": "/products/elgato-key-light.svg",
    "gallery": [
      "/products/elgato-key-light.svg",
      "/products/elgato-key-light-angle.svg",
      "/products/elgato-key-light-detail.svg"
    ],
    "longDescription": "Elgato Key Light est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p029",
    "name": "ASUS ROG G1000",
    "brand": "ASUS ROG",
    "category": "PC / setup premium",
    "slug": "asus-rog-g1000",
    "price": 3999.99,
    "rating": 4.8,
    "reviews": 42,
    "stock": 3,
    "badges": [
      "Ultra premium"
    ],
    "rgb": "#EF4444",
    "recommended": true,
    "specs": {
      "CPU": "Intel Core Ultra / Ryzen haut de gamme",
      "GPU": "NVIDIA RTX série 50 selon config",
      "RAM": "32 à 64 Go",
      "Stockage": "2 To NVMe",
      "Usage": "4K / création"
    },
    "short": "Tour ROG haut de gamme pour gaming 4K et création lourde.",
    "use": "PC haut de gamme",
    "categorySlug": "pc-setup-premium",
    "image": "/products/asus-rog-g1000.svg",
    "gallery": [
      "/products/asus-rog-g1000.svg",
      "/products/asus-rog-g1000-angle.svg",
      "/products/asus-rog-g1000-detail.svg"
    ],
    "longDescription": "ASUS ROG G1000 est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p030",
    "name": "PC Gaming RTX 5090 custom build",
    "brand": "NOVA Custom",
    "category": "PC / setup premium",
    "slug": "pc-gaming-rtx-5090-custom-build",
    "price": 5499.99,
    "rating": 4.9,
    "reviews": 31,
    "stock": 2,
    "badges": [
      "Custom",
      "Ultra premium"
    ],
    "rgb": "#8B5CF6",
    "recommended": true,
    "specs": {
      "GPU": "GeForce RTX 5090",
      "CPU": "Ryzen 9 / Core Ultra 9",
      "RAM": "64 Go DDR5",
      "Refroidissement": "Watercooling AIO",
      "Usage": "4K ultra / IA / montage"
    },
    "short": "Build extrême configuré pour 4K, stream et rendu lourd.",
    "use": "Setup ultra premium",
    "categorySlug": "pc-setup-premium",
    "image": "/products/pc-gaming-rtx-5090-custom-build.svg",
    "gallery": [
      "/products/pc-gaming-rtx-5090-custom-build.svg",
      "/products/pc-gaming-rtx-5090-custom-build-angle.svg",
      "/products/pc-gaming-rtx-5090-custom-build-detail.svg"
    ],
    "longDescription": "PC Gaming RTX 5090 custom build est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p031",
    "name": "Setup streaming complet",
    "brand": "NOVA Bundle",
    "category": "PC / setup premium",
    "slug": "setup-streaming-complet",
    "price": 1899.99,
    "oldPrice": 2199.99,
    "rating": 4.8,
    "reviews": 122,
    "stock": 9,
    "badges": [
      "Bundle",
      "Streamer Choice"
    ],
    "rgb": "#06B6D4",
    "recommended": true,
    "specs": {
      "Inclut": "Caméra, lumière, Stream Deck, audio",
      "Compatibilité": "Mac / PC",
      "Niveau": "Créateur avancé",
      "Installation": "Guidée",
      "Usage": "Streaming"
    },
    "short": "Pack complet pour lancer un studio de streaming crédible.",
    "use": "Streaming",
    "categorySlug": "pc-setup-premium",
    "image": "/products/setup-streaming-complet.svg",
    "gallery": [
      "/products/setup-streaming-complet.svg",
      "/products/setup-streaming-complet-angle.svg",
      "/products/setup-streaming-complet-detail.svg"
    ],
    "longDescription": "Setup streaming complet est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p032",
    "name": "Pack esport pro",
    "brand": "NOVA Bundle",
    "category": "PC / setup premium",
    "slug": "pack-esport-pro",
    "price": 699.99,
    "rating": 4.7,
    "reviews": 210,
    "stock": 14,
    "badges": [
      "Pro Pick",
      "Bundle"
    ],
    "rgb": "#EF4444",
    "recommended": true,
    "specs": {
      "Inclut": "Souris, clavier TKL, casque",
      "Usage": "FPS compétitif",
      "Niveau": "Tournoi",
      "Compatibilité": "PC",
      "Style": "Minimal"
    },
    "short": "Pack périphériques rapide et sobre pour performer en FPS.",
    "use": "FPS compétitif",
    "categorySlug": "pc-setup-premium",
    "image": "/products/pack-esport-pro.svg",
    "gallery": [
      "/products/pack-esport-pro.svg",
      "/products/pack-esport-pro-angle.svg",
      "/products/pack-esport-pro-detail.svg"
    ],
    "longDescription": "Pack esport pro est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  },
  {
    "id": "p033",
    "name": "Pack créateur de contenu",
    "brand": "NOVA Bundle",
    "category": "PC / setup premium",
    "slug": "pack-createur-de-contenu",
    "price": 999.99,
    "rating": 4.8,
    "reviews": 88,
    "stock": 10,
    "badges": [
      "Creator Pick",
      "Bundle"
    ],
    "rgb": "#8B5CF6",
    "recommended": true,
    "specs": {
      "Inclut": "Stream Deck+, Wave XLR, Facecam, Key Light",
      "Usage": "Stream / montage",
      "Niveau": "Pro",
      "Compatibilité": "Mac / PC",
      "Style": "Studio"
    },
    "short": "Pack studio élégant pour streamers et créateurs exigeants.",
    "use": "Créateur de contenu",
    "categorySlug": "pc-setup-premium",
    "image": "/products/pack-createur-de-contenu.svg",
    "gallery": [
      "/products/pack-createur-de-contenu.svg",
      "/products/pack-createur-de-contenu-angle.svg",
      "/products/pack-createur-de-contenu-detail.svg"
    ],
    "longDescription": "Pack créateur de contenu est sélectionné par NOVA GEAR pour offrir une expérience premium : performances fiables, design maîtrisé et intégration parfaite dans un setup gaming haut de gamme. Les données de prix sont temporaires et modifiables depuis l’admin avant mise en production.",
    "officialUrl": ""
  }
];

export const brands = Array.from(new Set(products.map((product) => product.brand))).sort();
export const featuredProducts = products.filter((product) => product.recommended).slice(0, 8);
export const bestSellers = products.filter((product) => product.badges.includes("Best-seller")).slice(0, 8);

export function formatPrice(value: number) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(value);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((product) => product.categorySlug === slug);
}

export function getRelatedProducts(product: Product) {
  return products
    .filter((item) => item.categorySlug === product.categorySlug && item.slug !== product.slug)
    .slice(0, 4);
}

export function searchProducts(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return products;
  return products.filter((product) =>
    [product.name, product.brand, product.category, product.shortDescription, ...product.badges].join(" " ).toLowerCase().includes(normalized)
  );
}
