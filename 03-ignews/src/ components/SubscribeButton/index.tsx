import styles from './styles.module.scss';

interface SubscripeButtonprops {
  priceId: string;
}

export function SubscripeButton({ priceId }: SubscripeButtonprops) {
  return (
    <button
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
}