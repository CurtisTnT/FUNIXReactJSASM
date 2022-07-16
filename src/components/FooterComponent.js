import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mt-2">
            <h5>Our Address</h5>
            <address>
              121, Clean Water Bay Road
              <br />
              Clean Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              Phone <span className="fa fa-phone fa-lg"></span> : +852 1357 2468
              <br />
              Fax <span className="fa fa-fax fa-lg"></span> : +852 2468 1357
              <br />
              Mail <span className="fa fa-envelope fa-lg"></span> :{" "}
              <a href="mailto:tintnfx15667@funix.edu.vn">
                tintnfx15667@funix.edu.vn
              </a>
            </address>
          </div>
          <div className="col-12 col-md-6 offset-2 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google"
                href="http://google.com/+"
              >
                <span className="fa fa-google-plus"></span>
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <span className="fa fa-facebook"></span>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/in/"
              >
                <span className="fa fa-linkedin"></span>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <span className="fa fa-twitter"></span>
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <span className="fa fa-youtube"></span>
              </a>
              <a className="btn btn-social-icon btn-google" href="mailto:">
                <span className="fa fa-envelope-o"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="">
            <p>© Copyright 2018 Ristorante Con Fusion</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
