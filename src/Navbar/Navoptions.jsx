import { Link } from "react-router-dom";
import "./navoptions.css";

const Navoptions = () => {
  return (
    <div className="subnavthree">
      <div className="container">
        <div className="item">
          <Link to="/products/vitamins">
            <p>Vitamins & Nutrition</p>
            <span className="dropdown-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path></g></svg></span>
          </Link>
        </div>
        <div className="item">
          <Link to="/products/diabetes">
            <p>Diabetes</p>
            <span className="dropdown-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path></g></svg></span>
          </Link>
        </div>
        <div className="item">
          <Link to="/products/healthcare">
            <p>Healthcare Devices</p>
            <span className="dropdown-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path></g></svg></span>
          </Link>
        </div>
        <div className="item">
          <Link to="/products/personal">
            <p>Personal Care</p>
            <span className="dropdown-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path></g></svg></span>
          </Link>
        </div>
        <div className="item">
          <Link to="/products/ayurveda">
            <p>Ayurveda Products</p>
            <span className="dropdown-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path></g></svg></span>
          </Link>
        </div>
        <div className="item">
          <Link to="/products/homeopathy">
            <p>Homeopathy</p>
            <span className="dropdown-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path></g></svg></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navoptions;
