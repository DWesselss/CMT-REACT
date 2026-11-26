function Book(props) {
  return (
    <article className="book">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>Auteur: {props.author}</p>
    </article>
  )
}

export default Book
