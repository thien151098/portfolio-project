import { About, Blog, Contact, Count, Download, Education, Experience, Footer, Letter, Navbar, 
  Portfolio, Project, Skills, Testimonial, Trademark, Video } from './components/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Project />
        <About />
        <Portfolio />
        <Education />
        <Skills />
        <Experience />
        <Trademark />
        <Blog />
        <Count />
        <Letter />
        <Video />
        <Testimonial />
        <Download />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
