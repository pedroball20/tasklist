
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rrqbgcvwiteofcobbcpg.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJycWJnY3Z3aXRlb2Zjb2JiY3BnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxNDkzMzksImV4cCI6MTk3MzcyNTMzOX0.rkvR9Ysy9pbFhxUvbdePDEaxc3ZQvGuFidgLlvJaokk'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;