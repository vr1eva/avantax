import styles from "./Button.module.scss";
import { Poppins } from '@next/font/google'
const poppins = Poppins({
  weight: ['400', '500', '600', "900"],
  subsets: ['latin']
})

const Button = ({ onClick, name, variant = "default", children }) => {
  const buttonStyle = `${styles.button} ${styles[variant]} ${[poppins.className]}`
  return (
    <button className={buttonStyle} onClick={onClick}>{children} {name}</button>
  );
};

export default Button;
