import axios from 'axios'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const BookList = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get('http://localhost:7788/books').then(({ data: books }) => {
      setBooks(books)
    })
  }, [])

  return (
    <div>
      {books.map(({id, title}) => (
        <NavLink key={id} to={`/books/${id}`}>
          <div>{title}</div>
        </NavLink>
      ))}

      <NavLink to={'/books/create'}>Create</NavLink>
    </div>
  )
}

export default BookList
