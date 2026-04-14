export default function Badge({ children, type = "default" }) {
  const styles = {
    default: "badge",
    high: "badge badge-high",
    medium: "badge badge-medium",
    low: "badge badge-low",
    completed: "badge badge-low",
    pending: "badge badge-medium",
  };

  return (
    <span className={styles[type] || styles.default}>
      {children}
    </span>
  );
}