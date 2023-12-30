import '../src/App.css'


const Home = () => {
  return (
<>
    <div className="">
      <nav className="navbar navbar-expand-lg navbar ">
        <div className="container-fluid ">
          <p className="navbar-brand text-light ">Logo</p>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="card text-bg-dark  cardclass " >
        <img src="images\Slider_image.jpg" className="card-img gbfv" alt="..." />
        <div className="card-img-overlay SAS">
          <h3 className="card-title mt-3 ">Generate more Leads with a <br /> professional landing Page</h3>
          <input className="inputsec" type="text" placeholder="Email Address" />
          <button className="card-text m-3 butn">Submit </button>
          <h4 className="card-text mt-3"></h4>
        </div>
      </div>
    </div>
  </>
  )
}
export default Home

