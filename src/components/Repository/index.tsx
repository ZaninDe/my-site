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
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>
        Access repo
      </a>
    </li>
  );
}