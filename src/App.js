import Navbar from './compnents/navbar/navbar';
import Intro from './compnents/intro/intro';
import Skills from './compnents/Skills/skills';
import Works from './compnents/Works/works';
import Contacts from './compnents/Contacts/contacts';
import Footer from './compnents/Footer/footers';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
