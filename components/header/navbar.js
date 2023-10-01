import Image from "next/image";
import CallNow from "../buttons/callNow";

export default function Navbar() {
  return (
    <>
      <div className="top-information py-3 bg-primary">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              <a className="fs-19 text-white" title="Location" href="https://www.google.com/maps/dir/26.6518471,87.2980115/38.06326,-78.48848/@2.315488,-81.9361986,3z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu">
                <i className="fa-solid fa-location-dot text-secondary fs-24 me-3" />
                <span>Charlottesville, VA</span>
              </a>
            </div>

            <div>
              <a title="Phone Number" className="fs-19 text-white" href="tel:+14342847549">
                <i className="fa-solid fa-phone text-secondary fs-24 me-3"></i>
                <span>+1 434-284-7549</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/img/logo.png" alt="logo" className="logo" />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-center mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Grocery</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
            <CallNow className="btn-primary col-lg-2 col-12 " />
          </div>
        </div>
      </nav>
    </>
  );
}
