import { createClient } from '@supabase/supabase-js'

const normalizeSupabaseUrl = (url) => {
  if (!url) return ''
  return url.replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '')
}

const supabaseUrl = normalizeSupabaseUrl(import.meta.env.VITE_SUPABASE_URL)
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export const isSupabaseConfigured = Boolean(supabase)
