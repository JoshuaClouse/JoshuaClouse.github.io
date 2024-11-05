import './App.css';
import './styles/animations.css'
import Header from './components/header.js'
import AboutMe from './components/aboutMe.js';
import Experience from './components/experience.js';

function App() {
  return (
    <div>
      <meta name="viewport" content="width=device-width"/>
      <meta name="description" content="Game Designer and Programmer"/>
      <meta name="keywords" content="game design, cs, computer science, programming, programmer"/>
      <meta name="author" content="Josh Clouse"/>
      <title>Josh Clouse | Home Page</title>
      <div id={'background'}></div>
      <Header></Header>
      <div id="content">
        <AboutMe></AboutMe>
        <Experience></Experience>
      </div>
    </div>
  );
}

export default App;
