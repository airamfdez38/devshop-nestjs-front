
import Socials from "./components/Socials/Socials";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Main from "./components/Main/Main";
import './App.scss';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      
      <Socials />
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
