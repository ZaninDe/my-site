import styles from'./styles.module.scss';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

export default function Header() {
  return(

    
    <header className={styles.headerContainer}>
      <div className={styles.contentContainer}>

        <nav>
          <Link to="/">CV</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </nav>

      <div>
        <SocialIcon url="https://www.linkedin.com/in/gabriel-zanin-ab802a206/" style={{ height: 25, width: 25, margin: 7 }}/>
        <SocialIcon url="https://github.com/ZaninDe" bgColor="#eba417" style={{ height: 25, width: 25, margin: 7 }}/>
        <SocialIcon url="mailto:someone@yoursite.com" style={{ height: 25, width: 25, margin: 7 }}/>
        <SocialIcon url="https://www.facebook.com/gabriel.zanin.7927/" style={{ height: 25, width: 25, margin: 7 }}/>
      </div>
        
      </div>
    </header>
  );
}