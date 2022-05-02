
import Socials from "./components/Socials/Socials";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Main from "./components/Main/Main";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Socials />
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
