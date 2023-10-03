import Image from "next/image";
import CallNow from "../buttons/callNow";
import { IconCurrentLocation } from '@tabler/icons-react';
import { IconPhoneCall } from '@tabler/icons-react';
import Link from "next/link";
import SearchComponent from "../ui-elements/searchButton";

export default function Navbar() {
  return (
    <>
      <div className="top-information py-3 bg-primary">
        <div className="container">
          <div className="d-flex justify-content-sm-between flex-sm-row flex-column align-items-center">
            <div className="d-sm-inline d-none">
              <a className="fs-19 text-white" title="Location" href="https://www.google.com/maps/dir/26.6518471,87.2980115/38.06326,-78.48848/@2.315488,-81.9361986,3z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu">
                <IconCurrentLocation className="text-secondary me-3" />
                <span>Charlottesville, VA</span>
              </a>
            </div>

            <div>
              <a title="Phone Number" className="fs-19 text-white" href="tel:+14342847549">
                <IconPhoneCall className="text-secondary me-3" />
                <span>+1 434-284-7549</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-xl bg-white">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/img/logo.png" alt="logo" className="logo" />
          </a>

          <button className="navbar-toggler mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-center mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/grocery">Grocery</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/about">About Us</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/contact">Contact Us</Link>
              </li>
            </ul>
            <CallNow className="btn-primary col-xl-2 d-xl-none col-12 mt-3" />
            <div className="d-xl-block d-none">
              <SearchComponent btnClass="btn-primary" inputClass="border-2 border-info" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
