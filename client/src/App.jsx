import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Service from './components/Service';
import About from './components/About';
import Project from './components/Project';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Preloader
    const preloader = document.querySelector("[data-preloader]");
    preloader?.classList.add("loaded");
    document.body.classList.add("loaded");

    // Navbar Logic
    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const navLinks = document.querySelectorAll("[data-nav-link]");
    const overlay = document.querySelector("[data-overlay]");

    const toggleNavbar = () => {
      navbar?.classList.toggle("active");
      overlay?.classList.toggle("active");
      document.body.classList.toggle("nav-active");
    };

    const closeNavbar = () => {
      navbar?.classList.remove("active");
      overlay?.classList.remove("active");
      document.body.classList.remove("nav-active");
    };

    navTogglers.forEach(btn => btn.addEventListener("click", toggleNavbar));
    navLinks.forEach(link => link.addEventListener("click", closeNavbar));

    // Header Scroll Logic
    const header = document.querySelector("[data-header]");
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header?.classList.add("active");
      } else {
        header?.classList.remove("active");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Tilt Logic
    const tiltElements = document.querySelectorAll("[data-tilt]");
    const initTilt = function (event) {
      const centerX = this.offsetWidth / 2;
      const centerY = this.offsetHeight / 2;
      const tiltPosY = ((event.offsetX - centerX) / centerX) * 10;
      const tiltPosX = ((event.offsetY - centerY) / centerY) * 10;
      this.style.transform = `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${tiltPosY - (tiltPosY * 2)}deg)`;
    };

    tiltElements.forEach(el => {
      el.addEventListener("mousemove", initTilt);
      el.addEventListener("mouseout", function () {
        this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      });
    });

    // Custom Cursor
    const cursors = document.querySelectorAll("[data-cursor]");
    const hoveredElements = [...document.querySelectorAll("button"), ...document.querySelectorAll("a")];

    const moveCursor = (event) => {
      const posX = event.clientX;
      const posY = event.clientY;
      if(cursors[0]) {
          cursors[0].style.left = `${posX}px`;
          cursors[0].style.top = `${posY}px`;
      }
      if(cursors[1]) {
          setTimeout(() => {
            cursors[1].style.left = `${posX}px`;
            cursors[1].style.top = `${posY}px`;
          }, 80);
      }
    };
    window.addEventListener("mousemove", moveCursor);

    hoveredElements.forEach(el => {
      el.addEventListener("mouseover", () => {
        cursors.forEach(c => c.classList.add("hovered"));
      });
      el.addEventListener("mouseout", () => {
        cursors.forEach(c => c.classList.remove("hovered"));
      });
    });

    return () => {
      navTogglers.forEach(btn => btn.removeEventListener("click", toggleNavbar));
      navLinks.forEach(link => link.removeEventListener("click", closeNavbar));
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="preloader" data-preloader>
        <span className="line"></span>
      </div>
      
      <Header />
      
      <main>
        <article>
          <Hero />
          <Service />
          <About />
          <div className="section cta" aria-label="work with me">
            <div className="container">
              <h2 className="title h2 section-title text-center">Let's Work Together On Your Next Project!</h2>
              <a href="#contact" className="btn btn:hover">
                <span className="span">Hire Me Now</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </div>
          <Project />
          {/* <Testimonials /> */}
          <Contact />
        </article>
      </main>

      <Footer />

      <div className="cursor-dot" data-cursor></div>
      <div className="cursor-outline" data-cursor></div>
    </>
  );
}

export default App;
