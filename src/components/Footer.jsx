
import iconinstagram from "../assets/images/icon-instagram.svg";
import iconticktock from "../assets/images/icon-tiktok.svg";
import iconbluesky from "../assets/images/icon-bluesky.svg";



export default function Footer(){
    return(
         <section className="footer">
    <ul className="footer__links">
      <li className="footer__item">
        <a href="#" className="footer__link">
          <img src={iconinstagram} alt="Instagram" />
        </a>
      </li>
      <li className="footer__item">
        <a href="#" className="footer__link">
          <img src={iconticktock} alt="TikTok" />
        </a>
      </li>
      <li className="footer__item">
        <a href="#" className="footer__link">
          <img src={iconbluesky} alt="Blue Sky" />
        </a>
      </li>
      
    </ul>
    <p className="footer__text">Made with ❤️ and 🥑</p>
  </section>
    )
}