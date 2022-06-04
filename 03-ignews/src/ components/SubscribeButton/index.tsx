import styles from './styles.module.scss';

export function SubscripeButton() {
  return (
    <button
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
}