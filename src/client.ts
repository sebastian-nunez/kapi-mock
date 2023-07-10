import { createClient } from "@supabase/supabase-js"

if (
  !import.meta.env.VITE_SUPABASE_URL ||
  !import.meta.env.VITE_SUPABASE_API_KEY
) {
  throw Error(
    "Please include the .env with 'VITE_SUPABASE_URL' and 'VITE_SUPABASE_API_KEY'. Checkout the '.env.sample'"
  )
}

const URL = import.meta.env.VITE_SUPABASE_URL
const API_KEY = import.meta.env.VITE_SUPABASE_API_KEY

export const supabase = createClient(URL, API_KEY)
