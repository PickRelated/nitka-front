import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';

import BookDetails from './BookDetails';
import BookList from './BookList';
import CreateBook from './CreateBook';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
