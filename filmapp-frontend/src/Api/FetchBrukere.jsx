import React, { useEffect, useState } from "react"
import client from "../Api/sanityClient"
import PropTypes from 'prop-types'
import VelgBruker from "../Components/Login"
// Groq QUERY
const query = `*[_type == "user"]{    
  _id,
  name,
  username,
  "favoriteMovies": favoriteMovies[]->{
    _id,
    title,
    imdb_id,
    cover_image
  },
  "preferredGenres": preferredGenres[]->{
    _id,
    name
  }
}`
// funksjon for å fetche brukere fra sanity client
const FetchUsers = ({ onUserSelect }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await client.fetch(query)
        setUsers(data)
      } catch (error) {
        console.error("Error fetching users:", error)   // catcher error til konsoll (ved error)
        setError("Feil ved fetch av brukere..")
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()

  }, [])
// IFTESTer for debug
  if (loading) return <p>Laster inn ...</p>
  if (error) return <p>{error}</p>
  if (!users.length) return <p>Ingen brukere tilgjengelige</p>

  return <VelgBruker onUserSelect={onUserSelect} users={users} />
}

FetchUsers.propTypes = {
  onUserSelect: PropTypes.func.isRequired,
}

export default FetchUsers
