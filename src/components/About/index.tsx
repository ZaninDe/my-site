import Header from '../Header';

import styles from './styles.module.scss'

export default function About() {
  return(
    <>
      <Header />
      <div className={styles.fullContainer}>
      <div className={styles.contentContainer}>
        <img src="https://avatars.githubusercontent.com/u/60481984?v=4" alt="avatar"/>
        <p>I'm Gabriel Zanin a Web Developer and passionate about technology. <br/>I Spend most of time coding and studying at the university.</p>
      </div>
      
      <li>I'm currently studying at Unifesp</li>
      <li>Most used line of code git commit -m "Initial Commit"</li>
      <li>I’m looking for help with funny games.</li>
      <li>How to reach me: gabriel.zaninde@gmail.com</li>
      <li>Pronouns: Coder, Zanin, gabrielzanin.</li>
      <li>Fun fact: I play games and pratice some sports.</li>
      </div>
    
    </>
  )
}