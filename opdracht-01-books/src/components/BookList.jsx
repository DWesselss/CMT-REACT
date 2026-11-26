import Book from './Book'

function BookList() {
  return (
    <div className="book-list">
      <Book title="Harry Potter and the Sorcerer's Stone" author="J.K. Rowling" image="/images/book-1.png" />
      <Book title="Fantasia VI" author="Geronimo Stilton" image="/images/book-2.png" />
      <Book title="The Hunger Games" author="Suzanne Collins" image="/images/book-3.png" />
    </div>
  )
}

export default BookList
