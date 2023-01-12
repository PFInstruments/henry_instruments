import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="https://www.instagram.com">
            <i className="icon ion-social-instagram"></i>
          </a>

          <a href="https://www.twitter.com">
            <i className="icon ion-social-twitter"></i>
          </a>
          <a href="https://www.facebook.com">
            <i className="icon ion-social-facebook"></i>
          </a>
          <a href="https://www.github.com">
            <i className="icon ion-social-github"></i>
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/">Home</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/about">About us</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/privacy">Privacy policies</Link>
          </li>
        </ul>
        <p className="copyright">Henry Music © 2022</p>
      </footer>
    </div>
  );
}
