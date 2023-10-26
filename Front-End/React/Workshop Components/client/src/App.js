import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>

      <main className="main">
        <section className="card users-container">

        </section>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
