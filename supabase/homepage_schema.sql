create extension if not exists "uuid-ossp";

create table if not exists public.homepage_slides (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  subtitle text,
  description text,
  image_url text,
  button_label text,
  button_link text,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.testimonials (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  role text,
  quote text not null,
  rating integer default 5 check (rating between 1 and 5),
  avatar_url text,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.partners (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  logo_url text,
  website_url text,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.tuition_fees (
  id uuid primary key default uuid_generate_v4(),
  category text not null,
  description text,
  amount numeric not null default 0,
  currency text not null default 'IDR',
  is_featured boolean default false,
  is_active boolean default true,
  created_at timestamptz default now()
);

alter table public.homepage_slides enable row level security;
alter table public.testimonials enable row level security;
alter table public.partners enable row level security;
alter table public.tuition_fees enable row level security;

create policy "Allow public read access for homepage content"
on public.homepage_slides for select using (true);

create policy "Allow public read access for testimonials"
on public.testimonials for select using (true);

create policy "Allow public read access for partners"
on public.partners for select using (true);

create policy "Allow public read access for tuition fees"
on public.tuition_fees for select using (true);

create policy "Allow authenticated full access for homepage content"
on public.homepage_slides for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "Allow authenticated full access for testimonials"
on public.testimonials for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "Allow authenticated full access for partners"
on public.partners for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "Allow authenticated full access for tuition fees"
on public.tuition_fees for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
