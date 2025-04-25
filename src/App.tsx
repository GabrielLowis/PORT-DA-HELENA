import "./styles/app.css";

function App() {

  return (
    <>
      <header>
        <div className="logo">
          <img src="src/assets/imgs/logo.png" alt="Logo da Helena muito bonito" />
        </div>

        <div className="links">
          <p>Habilidades</p>
          <p>Quem sou?</p>
          <p>Meus projetos</p>
          <p>Certificados</p>
          <p>Contato</p>
        </div>

      </header>

      <main></main>

      <section className="projetos">
        <div className="card">
          <img src="https://picsum.photos/300/350" alt="" />
          <h2>Projeto 1</h2>
          <button>Veja mais</button>
        </div>
        <div className="card">
          <img src="https://picsum.photos/300/350" alt="" />
          <h2>Projeto 2</h2>
          <button>Veja mais</button>
        </div>        
        <div className="card">
          <img src="https://picsum.photos/300/350" alt="" />
          <h2>Projeto 3</h2>
          <button>Veja mais</button>
        </div>
      </section>

      <section className="quemSou">

      </section>

      <section className="algunsDeles">
        <div className="umDeles">
          <img src="https://picsum.photos/300/450" alt="" />
          <p>Projeto Social</p>
          <p>Pé no chão</p>
        </div>
        <div className="umDeles">
          <img src="https://picsum.photos/300/450" alt="" />
          <p>Projeto Social</p>
          <p>Pé no chão</p>
        </div>
        <div className="umDeles">
          <img src="https://picsum.photos/300/450" alt="" />
          <p>Projeto Social</p>
          <p>Pé no chão</p>
        </div>
        <div className="umDeles">
          <img src="https://picsum.photos/300/450" alt="" />
          <p>Projeto Social</p>
          <p>Pé no chão</p>
        </div>
      </section>

      <section className="habilidades">
        
      </section>
    </>

  )
}

export default App
