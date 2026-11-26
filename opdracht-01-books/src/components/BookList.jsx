import { useState } from 'react'
import Book from './Book'
import BookCounter from './BookCounter'

function BookList() {
  const [books] = useState([
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      author: 'J.K. Rowling',
      image: '/images/book-1.png'
    },
    {
      id: 2,
      title: 'Fantasia VI',
      author: 'Geronimo Stilton',
      image: '/images/book-2.png'
    },
    {
      id: 3,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      image: '/images/book-3.png'
    }
  ])

  return (
    <section>
      <BookCounter aantal={books.length} />
      <div className="book-list">
        {books.map(book => (
          <Book key={book.id} title={book.title} author={book.author} image={book.image} />
        ))}
      </div>
    </section>
  )
}

export default BookList
