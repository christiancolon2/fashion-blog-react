
import './App.css';
import Header from './component/Header';
import Nav from './component/Nav';
import Article from './component/Article';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Article img={require('./image/blog-image-1.jpg')} h1="On the Street in Brooklyn"/>
      <Article img={require('./image/blog-image-2.jpg')} h1="Vintage in Vogue"/>
      <Footer />
    </div>
  );
}

export default App;