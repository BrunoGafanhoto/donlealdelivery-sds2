import './style.css';
import {ReactComponent as YoutubeIcon} from './youtube.svg';
import {ReactComponent as LinkedinIcon} from './linkedin.svg';
import {ReactComponent as InstagranIcon} from './instagram.svg';

function Footer(){
    return(
      <footer className="main-footer">
          &copy;DonLeal Delivery - Desenvolvido por Bruno dos Santos
          <div className="footer-icons">

                <a href="" target="_new">
                  <YoutubeIcon/>   
                </a>
                <a href="" target="_new">
                  <LinkedinIcon/>  
                </a>
                <a href="" target="_new">
                  <InstagranIcon/>  
                </a>
          </div>
      </footer>
    )
}

export default Footer;