import styles from './star.module.scss';

export default function Star({ topPosition, leftPosition }: { readonly topPosition: string, readonly leftPosition: string }) {
  return (
    <div
      className={styles.star}
      style={{
        top: topPosition,
        left: leftPosition,
      }}
    />
  );
}