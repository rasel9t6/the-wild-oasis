import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://zzdgdqjmmhetiowznwcz.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6ZGdkcWptbWhldGlvd3pud2N6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMzMDU4NzEsImV4cCI6MjAxODg4MTg3MX0.QQgfPEZc5rVrETe9DPqibOMJtPRzvl7tJOF_8wNfq8I';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
