import { useState } from 'react'

function Book(props) {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0)

  function verhoogTeller() {
    setAantalKeerGelezen(aantalKeerGelezen + 1)
  }

  return (
    <article className="book">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h3>Auteur: {props.author}</h3>
      <button type="button" onClick={verhoogTeller}>
        Keer gelezen: {aantalKeerGelezen}
      </button>
    </article>
  )
}

export default Book
