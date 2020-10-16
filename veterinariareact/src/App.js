import React from 'react';
import Form from './components/Form'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Veterinaria ReactJS</span>
        </nav>
      </header>
      <main className='container'>
        <h1 className='mb-4 text-success text-uppercase'>Veterinaria ReactJS</h1>
        <Form/>
      </main>
    </div>
  );
}

export default App;
