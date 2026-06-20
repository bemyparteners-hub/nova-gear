-- Schéma Supabase recommandé pour NOVA GEAR
-- À exécuter dans SQL Editor Supabase puis à adapter selon les besoins exacts.

create extension if not exists "uuid-ossp";

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text,
  role text not null default 'customer' check (role in ('customer', 'admin')),
  created_at timestamptz not null default now()
);

create table if not exists products (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  name text not null,
  brand text not null,
  category text not null,
  category_slug text not null,
  price numeric(10,2) not null check (price >= 0),
  old_price numeric(10,2),
  rating numeric(2,1) not null default 0,
  reviews_count integer not null default 0,
  stock integer not null default 0,
  image text,
  gallery text[] default '{}',
  short_description text,
  long_description text,
  specs jsonb not null default '{}',
  badges text[] default '{}',
  rgb text default '#06B6D4',
  recommended boolean not null default false,
  official_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists orders (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete set null,
  stripe_checkout_session_id text unique,
  status text not null default 'pending' check (status in ('pending', 'paid', 'failed', 'cancelled', 'fulfilled', 'refunded')),
  subtotal numeric(10,2) not null default 0,
  shipping numeric(10,2) not null default 0,
  discount numeric(10,2) not null default 0,
  total numeric(10,2) not null default 0,
  customer_email text,
  shipping_address jsonb,
  created_at timestamptz not null default now()
);

create table if not exists order_items (
  id uuid primary key default uuid_generate_v4(),
  order_id uuid not null references orders(id) on delete cascade,
  product_id uuid references products(id) on delete set null,
  product_name text not null,
  unit_price numeric(10,2) not null,
  quantity integer not null check (quantity > 0),
  created_at timestamptz not null default now()
);

create table if not exists reviews (
  id uuid primary key default uuid_generate_v4(),
  product_id uuid not null references products(id) on delete cascade,
  user_id uuid references auth.users(id) on delete set null,
  rating integer not null check (rating between 1 and 5),
  title text,
  body text,
  approved boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists wishlists (
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id uuid not null references products(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, product_id)
);

alter table profiles enable row level security;
alter table products enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;
alter table reviews enable row level security;
alter table wishlists enable row level security;

create policy "Products are public" on products for select using (true);
create policy "Reviews approved are public" on reviews for select using (approved = true);
create policy "Users can read own profile" on profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);
create policy "Users can read own orders" on orders for select using (auth.uid() = user_id);
create policy "Users can read own wishlist" on wishlists for select using (auth.uid() = user_id);
create policy "Users can manage own wishlist" on wishlists for all using (auth.uid() = user_id);

-- Les policies admin doivent vérifier profiles.role = 'admin'. Exemple :
-- create policy "Admins manage products" on products for all using (
--   exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role = 'admin')
-- );
