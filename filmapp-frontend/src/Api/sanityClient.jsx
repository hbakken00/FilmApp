// sanity client 
import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'u7zv1h76', // prosjekt ID
  dataset: 'production', //  DATASET
  useCdn: true 
})

export default client