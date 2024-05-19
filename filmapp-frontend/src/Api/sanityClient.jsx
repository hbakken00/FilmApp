// sanity client for å snakke med dataset / m prosjekt id
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'u7zv1h76', 
  dataset: 'production', 
  apiVersion: '2023-05-19', 
  useCdn: true, 
});

export default client;
