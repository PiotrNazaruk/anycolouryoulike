import React, { Component } from "react";
import Gallery from "./components/Gallery";
import "./App.css";
import "./styles/main.scss";
import $ from "jquery";
let contentful = require("contentful");
let lightbox = require("lightbox2")



class App extends Component {
  state = {
    data: "",
    title: "low",
    isOpen: false,
    isClicked: false,
    scrollH: window.scrollY
  
  };
  componentDidMount() {
   
    let client = contentful.createClient({
      space: "gd77gp8d0qpx",
      accessToken: "D1w5JgX4SWrw2VbRNkc_t8zxAkR1MufJu-thlPFL-ek"
    });
    client
      .getEntries()
      .then(response => {
        this.setState({
          data: response.items
        });
      })
      .catch(console.error);
  }
  burgerHandle =()=>{
    this.setState({
      isOpen: !this.state.isOpen
    
    })
    const navigation = document.querySelector('.navigation');
    console.log(navigation)
    navigation.classList.add('open-close')
  }
  listHandle =()=>{
    this.setState({
      isOpen: !this.state.isOpen
    })
    const navigation = document.querySelector('.navigation');
    console.log(navigation)
    navigation.classList.remove('open-close')
  }
   showIcon = ()=>{
    const upIcon = document.querySelector('.up-anchor');
    const scrollHeight = window.scrollY;
   console.log(scrollHeight,upIcon)
   
   if(scrollHeight > 200){
    upIcon.classList.add('shw')
}
else{
    upIcon.classList.remove('shw')
}
  
}
  scrollTo = ()=>{
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      window.location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  }
  init =()=>{
    document.addEventListener('scroll',this.showIcon)
    this.scrollTo()
  }
  render() {
    {this.init()}
    const photos = [...this.state.data];
    return (
      <div className="wrapper">
           <a href="#logo-anchor"> <div className="up-anchor"><img src={require('./pictures/up-icon.svg')} alt=""></img></div></a>
        <div className="logo-anchor" id="logo-anchor"></div>
        <div className="icon-wrapper">
            <div className="nav__icon" onClick={this.burgerHandle}>
                <span className={`nav__icon-item ${this.state.isOpen ? "active rotate1": ""}`}></span>
                <span className={`nav__icon-item ${this.state.isOpen ? "active dnone": ""}`}></span>
                <span className={`nav__icon-item ${this.state.isOpen ? "active rotate2": ""}`}></span>
            </div>
        </div>
        <nav className={`navigation ${this.state.isOpen ? "open-close": ""}`}>
            <a href="index.html"><div className="navigation__logo"></div></a>
            <ul>
                <li className="navigation__list"><a onClick={this.listHandle} className="navigation__link" href="#gallery">Galeria</a></li>
                <li className="navigation__list"><a onClick={this.listHandle} className="navigation__link"  href="#about">O mnie</a></li>
                <li className="navigation__list"><a onClick={this.listHandle} className="navigation__link"  href="#footer">Kontakt</a></li>
            </ul>
        </nav>
        <header className="header" id="header">
             <a href="#gallery"><div className="header__photo" id="header__photo">
              
             </div>
            
            </a>
            <div className="photo-cover"></div> 
       
        </header>
          <Gallery photos={photos} />
          <section class="about" id="about">
            <div class="about__container">
             
                <div class="about__content">
                    <div class="about__photo"><img src={require('./pictures/profilowe2.png')} alt=""></img></div>
                    <div class="about__text">
        
                        <p>Agencja <b>Any Colour You Like</b> na rynku fotograficznym działa od 2012 roku. Przez te kilka lat osiągnęliśmy wiele sukcesów. Praca w tej branży daje możliwości ciągłego poznawania ciekawych ludzi oraz odwiedzania wielu nowych, nieznanych miejsc. Dzięki temu praca nigdy nie jest nudna a zdjęcia są oryginalne i niepowtarzalne. </p>
                        <p class="text-second">Fotografia <b>nieruchomości</b> to główna specjalizacja w której działamy. Zajmujemy się fotografią na potrzeby biur nieruchomości, współpracujemy z developerami, hotelami, restauracjami, architektami, właścicielami nieruchomości komercyjnych jak i prywatnych.</p>
                    </div> 
                </div>
            </div>   
        </section>
          <footer id="footer" class="footer">
            
            <div class="footer__container" id="footer">
               
                <ul class="footer__container-list">
                    <li>Any Colour You Like</li>
                    <li>Mateusz Sadownik</li>
                    <li><a href="tel:+48510100369">510100369</a></li>
                    <li> 
                        <a href="mailto:sadownik.mateusz@gmail.com">hi@anycolouryoulike.pl</a> </li>
                </ul>
                <div class="footer__container-icon">
  
                    <a class="file" href="https://www.facebook.com/AnyColourYouLikeAgency/" target="_blank" > <img src={require('./pictures/facebook-logo.png')} alt=""></img>
                    </a>
                    <a class="file" href="https://www.instagram.com/sadorro/" target="_blank" > <img src={require('./pictures/instagram-logo.png')} alt=""></img>
                    </a>
                    <a class="file" href="https://www.behance.net/mateuszsadownik" target="_blank" > <img src={require('./pictures/behance-logo-button.png')} alt=""></img>
                    </a>
                        <a class="file" href="index.html" target="_blank" download > <img src={require('./pictures/pobierz.png')} alt=""></img>
                        </a>
                           
                   

               </div> 
               <div class="author"><p>designed and created by: Piotr Nazaruk</p></div>            
               </div>  

        </footer>
      </div>
    );
  }
}

export default App;
