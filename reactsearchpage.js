import React, { useState, useEffect } from 'react';
import './style.css';
import Search from './components/Search';
import Component from './components/Component';

export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  let postPerPage = 2;
  let lastIndex = currentPage * postPerPage;

  let firstIndex = lastIndex - postPerPage;
  let records = data
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .slice(firstIndex, lastIndex);

  let npage = Math.ceil(data.length / postPerPage);
  let pages = [...Array(npage + 1).keys()].slice(1);
  

  let prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  let changePage = (page) => {
    setCurrentPage(page);
  };

  let nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        let data = await response.json();
        setData(data);
      } catch (err) {
        setIsError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  });
  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <Component items={records} />

      <ul style={{ display: 'flex', listStyleType: 'none' }}>
        <li>
          <button onClick={prePage}>pre</button>
        </li>
        <li>
          {pages.map((page) => (
            <>
              <button key={page} onClick={() => changePage(page)}>
                {page}
              </button>
            </>
          ))}
        </li>
        <li>
          <button onClick={nextPage}>Next</button>
        </li>
      </ul>
    </div>
  );
}


import React, { StrictMode } from 'react';

const Component = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <>
          <h2>{item.name}</h2>
          <p>{item.email}</p>
        </>
      ))}
    </>
  );
};

export default Component;


import React, { StrictMode } from 'react';


const Search = ({search,setSearch})=>{
  return(
    <>
    <label htmlFor="">Search</label>
    <input
    type='search'
    placeholder='search'
    value={search}
    onChange={(e)=> setSearch(e.target.value)}
    name='search'
    />
    </>
  )
}

export default Search

//chat thalaivar

import React, { useState, useEffect } from 'react';
import './style.css';
import Search from './components/Search';
import Component from './components/Component';

export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 2;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        let data = await response.json();
        setData(data);
      } catch (err) {
        setIsError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / postPerPage);

  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearchChange = (value) => {
    setSearch(value);
    setCurrentPage(1); // Reset page when search changes
  };

  const renderPagination = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    if (totalPages <= 2) {
      return (
        <>
          {pageNumbers.map((page) => (
            <button key={page} onClick={() => changePage(page)}>
              {page}
            </button>
          ))}
        </>
      );
    }

    return (
      <>
        <button onClick={prePage}>pre</button>
        {currentPage > 2 && (
          <>
            <button onClick={() => changePage(1)}>1</button>
            {currentPage > 3 && <span>...</span>}
          </>
        )}
        {pageNumbers.slice(currentPage - 1, currentPage + 1).map((page) => (
          <button key={page} onClick={() => changePage(page)}>
            {page}
          </button>
        ))}
        {currentPage < totalPages - 1 && <span>...</span>}
        {currentPage < totalPages && (
          <button onClick={() => changePage(totalPages)}>{totalPages}</button>
        )}
        <button onClick={nextPage}>next</button>
      </>
    );
  };

  return (
    <div>
      <Search search={search} setSearch={handleSearchChange} />

      {search ? (
        <Component items={filteredData} />
      ) : (
        <>
          <Component
            items={filteredData.slice(
              (currentPage - 1) * postPerPage,
              currentPage * postPerPage
            )}
          />
          {totalPages > 1 && renderPagination()}
        </>
      )}
    </div>
  );
}


// 

import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './components/Content.jsx';
import Content from './components/Content.jsx';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const keys = ['username', 'email'];
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 3;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        let response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
          {
            signal,
          }
        );
        let data = await response.json();
        // console.log(data);
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

    return () => {
      controller.abort;
    };
  }, []);

  const filteredData = data.filter((val) =>
    keys.some((key) =>
      val[key].toLowerCase().includes(search.toLocaleLowerCase())
    )
  );

  const noOfPages = Math.ceil(data.length / postPerPage);
  const pageArr = [...Array(noOfPages + 1).keys()].slice(1);

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const next = () => {
    if (currentPage < noOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search ? (
        <Content filteredData={filteredData} />
      ) : (
        <>
          <Content
            filteredData={filteredData.slice(
              (currentPage - 1) * postPerPage,
              currentPage * postPerPage
            )}
          />
          <button onClick={prev}>prev</button>
          {pageArr.map((page, i) => (
            <button key={i} onClick={() => setCurrentPage(page)}>
              {page}
            </button>
          ))}
          <button onClick={next}>next</button>
        </>
      )}
    </>
  );
}

export default App;

const Content = ({ filteredData }) => (
  <>
    {filteredData.map((val) => (
      <div key={val.id}>
        <h4>{val.name}</h4>
        <p>{val.email}</p>
      </div>
    ))}
  </>
);
export default Content;
