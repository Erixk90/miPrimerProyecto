import '../style/Home.css'
import Header from './Header'
import Section from './Section'
import Main from './Main'
import Footer from './Footer'
import Navbar from './Navbar'
import Formulario from './Formulario'

function Home() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Section/>
      <Main/>
      <Formulario/>
      <Footer/>

    </div>
  );
}

export default Home;
