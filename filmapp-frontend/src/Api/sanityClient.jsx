// src/Api/sanityClient.js
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'u7zv1h76', 
  dataset: 'production', 
  apiVersion: '2023-05-19', 
  useCdn: true, 
});

export default client;
