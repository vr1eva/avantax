import styles from "./Button.module.scss";
interface Props {
  onClick: () => void;
  name: string;
  variant: string
}

const Button = ({ onClick, name, variant = "default" }: Props) => {
  const buttonStyle = `${styles.button} ${styles[variant]}`
  return (
    <button className={buttonStyle} onClick={onClick}>{name}</button>
  );
};

export default Button;
