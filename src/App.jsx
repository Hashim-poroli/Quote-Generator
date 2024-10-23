import React, { useState } from 'react';
import { quotesData } from './quotes';
import './index.css'

function QuoteGenerator() {
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [quote, setQuote] = useState('');

  const handleAuthorChange = (e) => {
    setSelectedAuthor(e.target.value);
    setQuote('');
  };

  const generateQuote = () => {
    if (selectedAuthor) {
      const quotes = quotesData[selectedAuthor];
      const randomIndex = Math.floor(Math.random()*quotes.length);
      setQuote(quotes[randomIndex]);
    }
  };

  return (
    <div className='w-full h-lvh flex justify-center	items-center	'>
      <div className='w-80 h-auto bg-teal-950	p-6 rounded-md shadow-md text-white '>
      <h1 className='font-sans text-2xl font-bold mb-4 text-center'>Quote Generator</h1>
      
      <div className='mb-4'>
        <label htmlFor="author-select" className='block mb-2'>Select an author:</label>
        <select 
          id="author-select" 
          value={selectedAuthor} 
          onChange={handleAuthorChange} 
          className='w-full p-2 bg-zinc-700 text-white rounded-md'>
          <option value="">-- Choose an author --</option>
          {Object.keys(quotesData).map((author) => (
            <option key={author} value={author} className='text-black'>
              {author}
            </option>
          ))}
        </select>
      </div>
      
      <button 
        onClick={generateQuote} 
        disabled={!selectedAuthor} 
        className={`w-full p-2 rounded-md ${!selectedAuthor ? 'bg-zinc-700 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
        Generate Quote
      </button>
      
      {quote && (
        <div className='mt-6'>
          <h2 className='text-xl font-semibold'>Quote:</h2>
          <p className='text-lg mt-2'>{quote}</p>
        </div>
      )}
    </div>
    </div>
    
  );
  
}

export default QuoteGenerator;
