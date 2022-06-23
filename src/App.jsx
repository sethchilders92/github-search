import React, { useState } from 'react';
import TopBar from './components/AppBar';
import RepoList from './components/RepoList';
import SearchForm from "./components/SearchForm";

function App() {
  const [searchText, setSearchText] = useState(null);

  const handleOnSubmit = event => {
    setSearchText(event.target.account.value);
    event.preventDefault();
  }

  return (
    <>
      <TopBar />
      <SearchForm handleOnSubmit={handleOnSubmit} />

      {searchText ? <RepoList searchText={searchText} /> : null}
    </>
  );
}

export default App;
