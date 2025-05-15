import  { createClient } from '@sanity/client';

const client = createClient({
  projectId: import.meta.env.VITE_SANITY_ID,   // ← You get this from Sanity
  dataset: 'production',          // ← Usually 'production' unless you made another
  useCdn: true,                   // ← true = faster (cached), false = always fresh
  apiVersion: '2025-05-15',       // ← Date to lock the version of Sanity API
});

export default client;
