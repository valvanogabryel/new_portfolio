// import Atropos from 'atropos/react';
// import 'atropos/atropos.css';

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <main className="container max-w-xs m-auto">
        <Presentation />
        <Projects />
      </main>
    </>
  );
}

export default App;
