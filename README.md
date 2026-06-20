# NOVA GEAR — Marketplace gaming premium

Projet Next.js / React / Tailwind CSS / Framer Motion pour une plateforme e-commerce premium de matériel gaming.

## Ce qui est inclus

- Landing page premium sombre avec hero animé, particules, glassmorphism et sections conversion.
- Catalogue dynamique avec recherche instantanée, filtres par catégorie, marque, prix, note, disponibilité et tri.
- Fiches produits avec galerie, specs, JSON-LD Product, avis et produits similaires.
- Panier dynamique avec localStorage, quantités, livraison, code promo `NOVA10` et total automatique.
- Checkout prêt pour Stripe Checkout avec fallback démo si aucune clé Stripe n’est configurée.
- Setup Builder automatique selon budget, style et besoin.
- Pro Picks par usage.
- Comparateur de 2 à 4 produits.
- Dashboard admin prototype avec édition locale des prix/stocks, ajout/suppression produits et statistiques.
- Pages légales/support/compte/wishlist/commandes.
- Sitemap et robots.txt générés par Next.js.

## Installation

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Variables d’environnement

Copier `.env.example` en `.env.local` :

```bash
cp .env.example .env.local
```

Variables prévues :

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
STRIPE_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx
ADMIN_EMAIL=admin@nova-gear.com
```

## Produits, prix et images

Les produits sont de vrais modèles gaming, stockés dans `lib/products.ts`.
Les prix sont temporaires et réalistes. Ils doivent être remplacés avant production via :

- admin interne connecté à une base de données ;
- flux affiliés ou API marchandes autorisées ;
- import JSON/CSV vérifié ;
- pages officielles uniquement si leurs conditions autorisent l’usage des données.

Les images actuelles sont des visuels SVG premium locaux générés pour le prototype. Remplacer les champs `image`, `gallery` et `officialUrl` par des URLs autorisées ou des assets validés.

## Brancher Supabase

1. Créer les tables `products`, `orders`, `profiles`, `reviews`, `wishlists`.
2. Activer Auth email/password + Google provider.
3. Remplacer `lib/products.ts` par des fetchs Supabase côté serveur.
4. Protéger `/admin` via rôle admin et RLS.
5. Stocker les images dans Supabase Storage ou un CDN.

## Brancher Stripe

1. Créer un compte Stripe.
2. Ajouter `STRIPE_SECRET_KEY` et `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`.
3. Adapter `app/api/checkout/route.ts` pour utiliser des `Price IDs` Stripe en production.
4. Ajouter un webhook `/api/webhooks/stripe` pour confirmer les commandes.
5. Enregistrer les commandes en base après `checkout.session.completed`.

## Prochaines étapes production

- Remplacer les données mockées par Supabase/Firebase/MongoDB.
- Ajouter une authentification réelle et middleware de protection admin.
- Créer le webhook Stripe et la table orders.
- Ajouter un back-office persistant pour les prix, stocks, promos et images.
- Vérifier les textes légaux avec un professionnel.
- Optimiser les images réelles avec CDN.
- Ajouter tests e2e checkout/catalogue/admin.
