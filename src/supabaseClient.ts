import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabase";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabaseClient = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey
);