const supabaseUrl = 'https://oqsdmtixaryydondjoms.supabase.co';
const supabaseKey = 'sb_publishable_nxNQq9LTZ8bQcK8UtRfMOA_FZ7dw1B-';

// ensure library is loaded
if (!window.supabase) {
  console.error("Supabase library not loaded!");
}

// create client
window.db = window.supabase.createClient(supabaseUrl, supabaseKey);

// debug
console.log("DB initialized:", window.db);