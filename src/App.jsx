import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
} from "./components";
import { useState, createContext } from "react";
import Modal from "./components/Modal";

export const AppContext = createContext();

const App = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(-1);

  return (
    <AppContext.Provider value={{ open, setOpen, id, setId }}>
      <BrowserRouter>
        <div
          style={{
            textAlign: "center",
            display: "block",
            padding: 30,
            margin: "auto",
          }}
        ></div>
        <Modal />
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Projects />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
