import { useState, useEffect } from 'react';
import Repository from '../Repository';

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
    <section className="repository-list">
      <p>here we can see my whole journey as a developer, each repository is a piece of this history where I learned a lot, and this is just the beginning!</p>
      <h1>My Repositories</h1>

      <ul>
        {list.map(list => {
          return(
            <Repository key={list.name} repository={list}/>
          )
        })}
      </ul>
      
    </section>
  );
}