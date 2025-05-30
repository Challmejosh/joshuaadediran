import  { createClient } from '@sanity/client';

const Writeclient = createClient({
  projectId: import.meta.env.VITE_SANITY_ID,   
  dataset: 'production',          
  useCdn: true,                  
  apiVersion: '2025-05-15',  
  token: import.meta.env.VITE_CREATE    
});

export default Writeclient;
