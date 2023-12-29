import "./Banner.css";

function Banner() {
  //JSX (como o react trabalha com a forma visual)
  return (
    <header className="banner">
      <img
        src="/imagens/banner.png"
        alt="Banner principal da página do Organo"
      />
    </header>
  );
}

export default Banner;
