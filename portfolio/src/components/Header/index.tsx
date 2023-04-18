const Header = () => {
  return (
    <header className="text-white">
      <div className="text-2xl font-logo select-none">
        <span className="text-primary">G</span>
        <span>a</span>
        <span className="text-primary">b</span>
        <span>r</span>
        <span>y</span>
        <span>e</span>
        <span>l</span>
        <span>.</span>
      </div>

      <nav>
        <ul>
          <li>
            Projetos
          </li>
          <li>
            Sobre mim
          </li>
          <li>

          </li>
          <li>
            <button>Currículo</button> {/*Vai enviar para um pdf*/}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;