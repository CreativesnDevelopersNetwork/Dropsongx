import "./join.css";

const JoinAs = () => {
    return(
        <>
       <section className="hero-section">
      <div className="card-grid">
        <a className="card" href="/signup">
          <div className="card__background" style={{ backgroundImage: `url('./src/media/covers/modern-microphone.jpg')` }}></div>
          <div className="card__content">
            <p className="card__category">Join us as an:</p>
            <h3 className="card__heading">Artist</h3>
          </div>
        </a>

        <a className="card" target="_blank" href="https://droplix-first.netlify.app/" rel="noreferrer">
  <div className="card__background" style={{ backgroundImage: `url('./src/media/djCover.jpg')` }}></div>
  <div className="card__content">
    <p className="card__category">Get Access as a:</p>
    <h3 className="card__heading">DJ</h3>
  </div>
</a>

      </div>
    </section>
        </>
    )
}


export default JoinAs;