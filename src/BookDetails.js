import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from "react-router";

const BookList = () => {
  const { id } = useParams();
  const [book, setBook] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:7788/books/${id}`).then(({ data: book }) => {
      setBook(book)
    })
  }, [id])

  return (
    <div>
      <div>{book.title}</div>
      <div>{book.description}</div>
      <img src={`http://localhost:7788/${book.coverPath}`} alt="cover" />
    </div>
  )
}

export default BookList
