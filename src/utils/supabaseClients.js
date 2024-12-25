
// import { createClient } from '@supabase/supabase-js'
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// console.log(supabase);


// export default supabaseClients

export default supabase