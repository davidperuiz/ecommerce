import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import ListProducts from '../ListProducts/ListProducts'
import Footer from '../Footer/Footer'

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  }

  return (
    <React.StrictMode>
      <NavBar onSearch={handleSearch} />
      <ListProducts searchTerm={searchTerm} />
      <Footer />
    </React.StrictMode>
  );
}

export default App;