import { Router, Switch, Route, Link } from "react-router-dom";

import './App.css';

import Contactus from './Contactus.js';

import './assets/css/aos/aos.css';
import './assets/css/bootstrap/bootstrap-grid.css';
import './assets/css/bootstrap/bootstrap-reboot.css';
import './assets/css/bootstrap/bootstrap.css';

import './assets/css/font-awesome/font-awesome.css';
import './assets/css/swiper/swiper.css';

import './assets/css/bootstrap.css';
import './assets/css/responsive.css';
import './assets/css/style.css';

import './assets/fonts/fontawesome-webfont.eot';
import './assets/fonts/fontawesome-webfont.svg';
import './assets/fonts/fontawesome-webfont.ttf';
import './assets/fonts/fontawesome-webfont.woff';
import './assets/fonts/fontawesome-webfont.woff2';
import './assets/fonts/lg.eot';
import './assets/fonts/lg.svg';
import './assets/fonts/lg.ttf';
import './assets/fonts/lg.woff';

import gallery2 from './assets/images/gallery2.jpg';
import background from './assets/images/background.jpg';
import logo from './assets/images/logo.png';
import post1 from './assets/images/post1.jpg';
import post2 from './assets/images/post2.jpg';
import post3 from './assets/images/post3.jpg';
import post4 from './assets/images/post4.jpg';
import post5 from './assets/images/post5.jpg';
import post6 from './assets/images/post6.jpg';
import rcntpost3 from './assets/images/rcntpost3.png';

function App() {
    return (
      <div className="App">
       <>
  {/* Loader Start */}
  <div className="css-loader">
    <div className="loader-inner line-scale d-flex align-items-center justify-content-center" />
  </div>
  {/* Loader End */}
  {/* Header Start */}
  <header className="position-absolute w-100">
    <div className="container">
      <div className="top-header d-none d-sm-flex justify-content-between align-items-center">
        <div className="contact">
          <a href="tel:+9876543211" className="tel"><i className="fa fa-phone" aria-hidden="true" />+9876543211</a>
          <a href="mailto:sam@gmail.com"><i className="fa fa-envelope" aria-hidden="true" />sam@gmail.com</a>
        </div>
        <nav className="d-flex aic">
          <a href="#" className="login"><i className="fa fa-user" aria-hidden="true" />Login</a>
          <ul className="nav social d-none d-md-flex">
            <li><a href="https://www.facebook.com/fh5co" target="_blank"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
          </ul>
        </nav>
      </div>
      <nav className="navbar navbar-expand-md navbar-light">
        <a className="navbar-brand" href="index.html"><img src={logo} alt="Multipurpose" /></a>
        <div className="group d-flex align-items-center">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
          <a className="login-icon d-sm-none" href="#"><i className="fa fa-user" /></a>
          <a className="cart" href="#"><i className="fa fa-shopping-cart" /></a>
        </div>
        <a className="search-icon d-none d-md-block" href="#"><i className="fa fa-search" /></a>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Admin</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Show in charge</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About us</a></li>
            <li className="nav-item"><Link to={"/Contactus"} className="nav-link">Contact Us</Link></li>
          </ul>
          <form className="bg-white search-form" method="get" id="searchform">
            <div className="input-group">
              <input className="field form-control" id="s" name="s" type="text" placeholder="Search" />
              <span className="input-group-btn">
                <input className="submit btn btn-primary" id="searchsubmit" name="submit" type="submit" defaultValue="Search" />
              </span>
            </div>
          </form>
        </div>
      </nav>
    </div>
  </header>
  {/* Header End */}
  {/* Hero Start */}
  <section className="hero">
    <div className="container">
      <div className="row">
        <div className="col-12 offset-md-1 col-md-11">
        <div className="swiper-slide slide-content d-flex align-items-center">
                <div className="single-slide">
                  <h1><p>Ticket<br /> Booking System</p>
                  </h1>
                  <h2>Let's Sit Back &amp; Book Movies</h2>
                </div>
              </div>
              </div>
            </div>
            </div>
          {/* Add Control */}
     
    <div className="texture" />
    <div className="diag-bg" />
  </section>
  {/* Hero End */}
  {/* Call To Action Start */}
  <br />
  <section className="cta">
    <div className="container">
        <h2>FOR LIMITING THE QUEUES AT COUNTERS</h2>
          <h3>Enjoy Your Time at Our Website !</h3>
        </div>
        </section>

  <section className="recent-posts">
    <div className="container">
      <div className="title text-center">
        <h5 className="title-primary">Now Showing</h5>
        <h1 className="title-blue">Housefull Movies</h1>
      </div>
      <br />
  
  
      <h1>Hera Pheri</h1>
      <div className="image">
       <img src={post1} height="300px" width="300px"/>
        <br />
      <time dateTime="2019-04-06T13:53">26th January, 2021</time> 
      </div>

            <div className="post-content">
            <h3><a href="#">Three unemployed men find the answer to all their money problems when they recieve a call from a kidnapper. However, things do not go as planned.</a></h3>
              </div>
              <div className="post">
              <p>Genre:Comedy</p>
              <a href="#" class="btn btn-info" role="button">Book Now</a>
            </div>

            <br />
            <br />

            <h1>Mission Mangal</h1>
            <div className="image">
       <img src={post2} height="300px" width="300px"/>
        <br />
      <time dateTime="2019-04-06T13:53">26th January, 2021</time> 
      </div>

            <div className="post-content">
            <h3><a href="#">A group of scientists at ISRO battle in their personal and professional lives and work tirelessly towards their only motive, the Mars Orbiter Mission.</a></h3>
              </div>
              <div className="post">
              <p>Genre:Drama, Sci-Fi</p>
              <a href="#" class="btn btn-info" role="button">Book Now</a>
            </div>

            <br />
            <br />

            <h1>Total Dhamaal</h1>
            <div className="image">
       <img src={post3} height="300px" width="300px"/>
        <br />
      <time dateTime="2019-04-06T13:53">26th January, 2021</time> 
      </div>

            <div className="post-content">
            <h3><a href="#">A group of people learn about a hidden treasure and then they race to find it and claim it.</a></h3>
              </div>
              <div className="post">
              <p color="black">Genre:Comedy</p>
              <a href="#" class="btn btn-info" role="button">Book Now</a>
            </div>

            <br />
            <br />

            <h1>Naam Shabana</h1>
            <div className="image">
       <img src={post4} height="300px" width="300px"/>
        <br />
      <time dateTime="2019-04-06T13:53">26th January, 2021</time> 
      </div>

            <div className="post-content">
            <h3><a href="#">This Spin-off from Baby (2015) provides the back-story of intelligence agent Shabana, and chronicles how she becomes a spy.</a></h3>
              </div>
              <div className="post">
              <p color="black">Genre:Action,Thriller</p>
              <a href="#" class="btn btn-info" role="button">Book Now</a>
            </div>

            <br />
            <br />

            <h1>Home Alone</h1>
            <div className="image">
       <img src={post5} height="300px" width="300px"/>
        <br />
      <time dateTime="2019-04-06T13:53">26th January, 2021</time> 
      </div>

            <div className="post-content">
            <h3><a href="#">Macaulay Culkin stars in this comedy smash about a boy who is accidently left behind when his family goes to Paris for the holidays.</a></h3>
              </div>
              <div className="post">
              <p color="black">Genre:Comedy</p>
              <a href="#" class="btn btn-info" role="button">Book Now</a>
            </div>

            <br />
            <br />

            <h1>Scavenger Hunt</h1>
            <div className="image">
       <img src={post6} height="300px" width="300px"/>
        <br />
      <time dateTime="2019-04-06T13:53">26th January, 2021</time> 
      </div>

            <div className="post-content">
            <h3><a href="#">To inherit a fortune, various addressees of a will must compete in a wild scavenger hunt to collect selected items, but cannot be simply bought.</a></h3>
              </div>
              <div className="post">
              <p color="black">Genre:Comedy</p>
              <a href="#" class="btn btn-info" role="button">Book Now</a>
            </div>


          </div>
  </section>

  <section className="cta cta2">
    <div className="container">
      
          <h2>HOPE YOU ENJOYED THE EXPERIENCE, SEE YOU SOON !</h2>
          <p>Please help us improve with Your Feedback</p>
        </div>
          <a href="#" className="btn btn-primary">Give Feedback !</a>
  </section>

  
  <footer>
    {/* Widgets Start */}
    <div className="footer-widgets">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-3">
            
              <h6 className="widget-tiltle">&nbsp;</h6>
              <div className="media">
                <i className="fa fa-map-marker" />
                <div className="media-body ml-3">
                  <h6>Address</h6>
                  Patkar-Varde College<br />
                  Goregaon(W)
                </div>
              </div>
              <div className="media">
                <i className="fa fa-envelope-o" />
                <div className="media-body ml-3">
                  <h6>Have any queries?</h6>
                  <a href="mailto:support@steelthemes.com">support.tbs@gmail.com</a>
                </div>
              </div>
              <div className="media">
                <i className="fa fa-phone" />
                <div className="media-body ml-3">
                  <h6>Contact Us:</h6>
                  <a href="tel:+610791803458"> +9876543211</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="single-widget tags-widget" data-aos="fade-up" data-aos-delay={800}>
              <h6 className="widget-tiltle">Popular Tags</h6>
              <a href="#">Bollywood</a>
              <a href="#">Hollywood</a>
              <a href="#">Romance</a>
              <a href="#">Comedy</a>
              <a href="#">Action</a>
              <a href="#">Horror</a>
            </div>
          
              <h6 className="widget-tiltle">All Copyrights Reserved !</h6>
              <p>We respect your privacy</p>
              <ul className="nav social-nav">
                <li><a href="https://www.facebook.com/fh5co" target="_blank"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              </ul>
            </div>
          </div>
        </div>
    {/* Widgets End */}
    {/* Foot Note Start */}

    <div className="foot-note">
      <div className="container">
        <div className="footer-content text-center text-lg-left d-lg-flex justify-content-between align-items-center">
          <h4>© 2021 All Rights Reserved. Design of Home Page By Samidha</h4>
         <h5>Terms Of Use Privacy &amp; Security Statement</h5>
              
        </div>
      </div>
      </div>
    {/* Foot Note End */}
  </footer>
</>

      </div>
    );
  } 

export default App;
