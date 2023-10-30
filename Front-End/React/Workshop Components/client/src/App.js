// import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';
// import * as userService from './services/UserService'
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Search } from './components/search/Search';
import { UserSection } from './components/user-section/UserSection';



function App() {


  return (
    <div className="App">
      <Header/>

      <main className="main">
        <section className="card users-container">
          <Search/>

          <UserSection/>


        </section>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
