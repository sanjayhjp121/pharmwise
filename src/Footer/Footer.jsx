import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_parent">
      <div className="footer_container">
        <div className="footer_child">
          <h3>Know Us</h3>
          <ul>
            <li>
              <a href="#img">
                <span>About Us</span>
              </a>
            </li>
            <li>
              <a href="#img">
                <span>Contact Us</span>
              </a>
            </li>
            <li>
              <a href="#img">
                <span>Press Coverage</span>
              </a>
            </li>
            <li>
              <a href="#img">
                <span>Careers</span>
              </a>
            </li>
            <li>
              <a href="https://partners.1mg.com">
                <span>Business Partnership</span>
              </a>
            </li>
            <li>
              <a href="#img">
                <span>Become a Health Partner</span>
              </a>
            </li>
            <li>
              <a href="#img">
                <span>Corporate Governance</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_child">
          <h3>Our Policies</h3>
          <ul>
            <li>
              <a href="#img">
                <span>Privacy Policy</span>
              </a>
            </li>
            <li>
              <a href="#img">
                <span>Terms and Conditions </span>
              </a>
            </li>
            <li>
              <a href="#img">
                <span>Editorial Policy</span>
              </a>
            </li>
            <li>
              <a href="#img">
                <span>Return Policy</span>
              </a>
            </li>
            <li>
              <a href="#img">
                <span>IP Policy</span>
              </a>
            </li>
            <li>
              <a href="#img">
                <span>Grievance Redressal Policy</span>
              </a>
            </li>
            <li>
              <a href="#img">
                <span>Fake Jobs and Fraud Disclaimer</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_child">
          <h3>Our Services</h3>
          <ul>
            <li>
              <a href="#img">
                <span>Order Medicines</span>
              </a>
            </li>
            <li>
              <a href="#img">
                <span>Book Lab Tests</span>
              </a>
            </li>
            <li>
              <a href="#img">
                <span>Consult a Doctor</span>
              </a>
            </li>
            <li>
              <a href="#img">
                <span>Ayurveda Articles</span>
              </a>
            </li>
            <li>
              <a href="#img">
                <span>Care Plan</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_child">
          <h3>Connect</h3>
          <ul>
            <li>
              <span>Social links</span>
            </li>
            <li className="social_icons">
              <a href="#img" alt="Facebook">
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                    alt="Facebook"
                  />
                </div>
              </a>
              <a
                href="#img"
                alt="Instagram"
              >
                <div>
                  <img
                    src="https://toppng.com/uploads/preview/instagram-new-vector-logo-color-download-11573951803kylml5wdmi.png"
                    alt="Instagram"
                  />
                </div>
              </a>
              <a href="#img" alt="Twitter">
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                    alt="Twitter"
                  />
                </div>
              </a>
              <a href="#img" alt="You Tube">
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                    alt="You Tube"
                  />
                </div>
              </a>
              <a href="#img" alt="LinkedIn">
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="LinkedIn"
                  />
                </div>
              </a>
              <a href="#img" alt="Medium link">
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968906.png"
                    alt="Medium"
                  />
                </div>
              </a>
            </li>
            <li>
              <span>Want daily dose of health?</span>
            </li>
            <li>
              <button className="signup_btn">SIGN UP</button>
            </li>
          </ul>
        </div>
        <div className="footer_child">
  <h5>Download App</h5>
  <ul>
    <li>
      <a href="img">
        <div className="download_icon">
          <img
            src="https://pay.google.com/about/static_kcs/images/icons/playstore/badge@en_us.png"
            alt="Google Play Store"
            className="download_image"
          />
        </div>
      </a>
    </li>
    <li>
      <a href="img">
        <div className="download_icon">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
            alt="App Store"
            className="download_image"
          />
        </div>
      </a>
    </li>
  </ul>
</div>

      </div>
      <hr />
      <div className="footer_container">
        <div className="reliable_container">
          <div>
            <img
              src="https://onemg.gumlet.io/secure-rebrand_x6f8yq.svg"
              alt="img"
            />
          </div>
          <div className="reliable_wrapper">
            <h5>Reliable</h5>
            <p>
              All products displayed on Pharmawise are procured from verified and
              licensed pharmacies. All labs listed on the platform are
              accredited.
            </p>
          </div>
        </div>
        <div className="reliable_container">
          <div>
            <img
              src="https://onemg.gumlet.io/reliable-rebrand_rcpof3.svg"
              alt=""
            />
          </div>
          <div className="reliable_wrapper">
            <h5>Secure</h5>
            <p>
              Pharmawise uses Secure Sockets Layer (SSL) 128-bit encryption and is
              Payment Card Industry Data Security Standard (PCI DSS) compliant.
            </p>
          </div>
        </div>
        <div className="reliable_container">
          <div>
            <img
              src="https://onemg.gumlet.io/affordable-rebrand_ivgidq.svg"
              alt=""
            />
          </div>
          <div className="reliable_wrapper">
            <h5>Affordable</h5>
            <p>
              Find affordable medicine substitutes, save up to 50% on health
              products, up to 80% off on lab tests, and free doctor
              consultations.
            </p>
          </div>
        </div>
      </div>
      <hr />
      </div>
  );
};

export default Footer;
