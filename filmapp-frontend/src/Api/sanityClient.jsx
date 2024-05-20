// sanity client for å snakke med dataset / m prosjekt id
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'u7zv1h76', 
  dataset: 'production', 
  apiVersion: '2023-05-19',
  token: 'sk7Pk4AUMDvwbKo2nqGB40qXpNA1gt5ZDV58vsKyRkGLHlKqeeDyTyuH7aBh12TOlasjTGrJnjSqTZXgl3zRbrwwzM1860bOWtZwi6RNnCebwpv1C8Lu6RvXMvApln2tJNYFEPt793HGK7cyb8ejA48qTL4OjT6k6Z6xaHA8OvtyBtFme4Gj',
  useCdn: true, 
});

export default client;
