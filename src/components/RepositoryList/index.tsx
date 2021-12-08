import { useState, useEffect } from 'react';
import Repository from '../Repository';
import Header from '../Header';

import styles from './styles.module.scss';

interface RepositoryProps {
  name: string;
  description: string;
  html_url: string;
}
export default function RepositoryList() {
  const [list, setList] = useState<RepositoryProps[]>([])
  useEffect(() => {
    fetch('https://api.github.com/users/ZaninDe/repos')
    .then(response => response.json())
    .then(data => setList(data))

    console.log(list)

  },[])
  return(
    <>
      <Header />
      <div className={styles.ContentContainer}>
      <section className={styles.repositoryContainer}>
        {/* <p>here we can see my whole journey as a developer, each repository is a piece of this history where I learned a lot, and this is just the beginning! 🚀🚀</p> */}
        <h1>My Repositories</h1>

        <ul>
          {list.map(list => {
            return(
              <Repository key={list.name} repository={list}/>
            )
          })}
        </ul>
        
      </section>
      </div>
    </>
  );
}