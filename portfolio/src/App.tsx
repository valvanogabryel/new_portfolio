import { useEffect } from "react";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <NavBar />
      <main className="container max-w-xs m-auto">
        <Presentation />
        <Projects />

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </main>
    </>
  );
}

export default App;
