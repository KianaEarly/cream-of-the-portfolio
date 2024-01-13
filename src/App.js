import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
  <header className="text-center container" id="home">
    <h1 id="main-title">Howdy I'm Kiana! 🤠 <nav className="text-right" id="buttons">
        <ul id="list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#contact-me">Contact Me</a></li>
        </ul>
      </nav></h1>
    <h2>Full-Stack Developer</h2>
    <img id="me-img" src= {require ("./images /me.png")} width="225px" height="300px" />
  </header>
  <hr />
  <section className="text-center">
    <h2 className="text-left" id="about-me">About Me</h2>
    <p className="text-right">
      I am Kiana. I am a full-stack web developer from Austin, TX. I have worked on many projects both front-end and back-end. 
      As well as, having worked for an array of large companies from around the world.
    </p>
  </section>
  <hr />
  <section className="container">
    <h2 className="text-left" id="works">Works</h2>
    <br />
    <article className="text-center" id="horiseon-work">
      <a href="https://kianaearly.github.io/Horiseon/">
        <img id="horiseon-img" width="300px" height="200px" src= {require ("./images /horiseon-screenshot.png")} />
      </a>
      <h4>HTML and CSS</h4>    
    </article>
    <article className="text-center" id="amazon-work">
      <a href="https://lmansilla92.github.io/rooster-tail/">
        <img id="amazon-img" width="150px" height="100px" src= {require ("./images /RoosterTail.png")} />
      </a>
      <h4>Web API's</h4>
    </article>
    <article className="text-right" id="twitch-work">
      <a href="https://www.twitch.tv/">
        <img id="twitch-img" width="150px" height="100px" src= {require ("./images /twitch.png")} />
      </a>
      <h4>CSS</h4>
    </article>
    <article className="text-center" id="twitter-work">
      <a href="https://twitter.com/?lang=en">
        <img id="twitter-img" width="150px" height="100px" src= {require ("./images /twitter.png")} />
      </a>
      <h4>HTML</h4>
    </article>
    <article className="text-right" id="webmd-work">
      <a href="https://www.webmd.com/">
        <img id="webmd-img" width="150px" height="100px" src= {require ("./images /webmd.png")} />
      </a>
      <h4>HTML and CSS</h4>
    </article>
  </section>
  <hr />
  <section className="text-center">
    <h2 className="text-left" id="contact-me">Contact Me</h2>
    <ul>
      <li>Phone: 817-243-6559</li>
      <li>Email: kiana.sambursky@gmail.com</li>
    </ul>
  </section>
</div>

    </div>
  );
}

export default App;
