// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Search } from './components/search/Search';
import { UserSection } from './components/user-section/UserSection';

const baseUrl = 'http://localhost:3005/api';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/users`)
    .then(res => res.json())
    .then(result => {
      // console.log(resutl)
      setUsers(result.users)
    })
  }, [])

  console.log(users)

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
