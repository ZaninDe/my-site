import styles from './styles.module.scss';

interface RepositoryItemsProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export default function Repository(props: RepositoryItemsProps) {
  return(
    <li className={styles.ItemContainer}>
      <div className={styles.titleContainer}>
        <strong>{props.repository.name}</strong>
        <p>Public</p>
      </div>
      <p>{props.repository.description !== null ? props.repository.description : "No Description"}</p>

      <a href={props.repository.html_url}>
        Access repository
      </a>
    </li>
  );
}