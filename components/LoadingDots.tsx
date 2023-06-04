import styles from "../styles/loading-dots.module.css";

const LoadingDots = ({
  color = "#000",
  style = "large",
}: {
  color: string;
  style: string;
}) => {
  return (
    <span className={style == "large" ? styles.loading2 : styles.loading}>
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  );
};

export default LoadingDots;

LoadingDots.defaultProps = {
  style: "large",
};
