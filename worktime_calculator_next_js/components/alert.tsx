import styles from "./alert.module.css";
import cn from "classnames";

type Props = {
  children: any;
  type: any;
};

const Alert: React.FC<Props> = ({ children, type }) => {
  return (
    <div
      className={cn({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
};

export default Alert;
