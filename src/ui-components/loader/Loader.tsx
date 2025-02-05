import { Triangle } from "react-loader-spinner";
import styles from "./Loader.module.scss";

const Loader = ({ title = "" }: { title?: string }) => {
  return (
    <div className={styles.LoaderContainer}>
      <div className={styles.Overlay}></div>
      {title ? <span>{title}</span> : null}
      <div className={styles.Loader}>
        <Triangle
          height="120"
          width="120"
          color="#7433ff"
          ariaLabel="triangle-loading"
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loader;
