import styles from "./Button.module.scss";
interface Props {
  onClick: () => void;
  text: string;
}

const Button = ({ onClick, text }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>{text}</button>
  );
};

export default Button;
