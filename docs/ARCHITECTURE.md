# Architecture NOVA GEAR

## Stack

- Next.js App Router pour les pages, layouts, sitemap, robots et API routes.
- React client components pour panier, filtres, admin mocké, comparateur et setup builder.
- Tailwind CSS pour le design sombre premium, glassmorphism, gradients RGB et responsive.
- Framer Motion pour les animations hero, cartes, modales et drawer panier.
- Lucide React pour les icônes.
- Stripe Checkout via `app/api/checkout/route.ts`.
- Supabase prêt via `lib/supabase/client.ts` et `database/schema.sql`.

## Dossiers principaux

```txt
app/
  page.tsx                         Accueil premium
  boutique/page.tsx                 Catalogue avec filtres
  categorie/[slug]/page.tsx         Pages catégories SEO
  produits/[slug]/page.tsx          Fiche produit + JSON-LD
  panier/page.tsx                   Panier
  checkout/page.tsx                 Checkout
  confirmation/page.tsx             Confirmation
  admin/page.tsx                    Dashboard admin mocké
  setup-builder/page.tsx            Configurateur de setup
  pro-picks/page.tsx                Sélections par usage
  comparateur/page.tsx              Comparateur produits
  api/checkout/route.ts             Création session Stripe / fallback démo
  api/webhooks/stripe/route.ts      Webhook Stripe à connecter
components/
  header.tsx / footer.tsx           Navigation, trust badges, footer
  hero-section.tsx                  Hero animé premium
  product-card.tsx                  Carte produit hover 3D
  product-grid.tsx                  Recherche, filtres, tri
  product-modal.tsx                 Aperçu rapide
  cart-drawer.tsx / cart-page.tsx   Logique panier UI
  checkout-summary.tsx              Résumé checkout + promo
  setup-builder.tsx                 Recommandation automatique
  compare-gear.tsx                  Comparateur 2 à 4 produits
  admin-product-table.tsx           CRUD local admin
lib/
  products.ts                       Base produits initiale
  types.ts                          Types TypeScript
  admin.ts                          Stats mockées
store/
  cart-store.tsx                    Context panier + localStorage
database/
  schema.sql                        Schéma Supabase recommandé
public/products/                    Assets SVG produit locaux
```

## Flux e-commerce actuel

1. L’utilisateur parcourt `/boutique` ou une catégorie.
2. Les filtres sont appliqués côté client sur `lib/products.ts`.
3. L’ajout panier passe par `CartProvider`.
4. Le panier est persisté dans `localStorage`.
5. `/checkout` appelle `/api/checkout`.
6. Si `STRIPE_SECRET_KEY` existe, une session Stripe Checkout est créée.
7. Sans clé Stripe, l’utilisateur est envoyé vers `/confirmation?demo=1`.

## Évolution production recommandée

- Remplacer `lib/products.ts` par des queries Supabase côté serveur.
- Brancher Supabase Auth avec email/password et Google login.
- Créer une table `profiles` avec rôle `admin`.
- Protéger `/admin` par middleware.
- Mettre les prix, stocks, promos, badges et galeries en base.
- Remplacer les visuels SVG locaux par des images autorisées/CDN.
- Utiliser des Stripe Price IDs en production pour fiabiliser les montants.
- Confirmer les commandes via webhook `checkout.session.completed`.
- Ajouter tests d’intégration checkout, panier, admin et catalogue.
