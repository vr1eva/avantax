import styles from "./Button.module.scss";
import { Poppins } from '@next/font/google'
const poppins = Poppins({
  weight: ['400', '500', '600', "900"],
  subsets: ['latin']
})

function doNothing() { }

const Button = ({ onClick = doNothing, type = "button", name, variant = "default", children, className }) => {
  const buttonStyle = `${styles.button} ${styles[variant]} ${[poppins.className]} ${className}`
  return (
    <button type={type} className={buttonStyle} onClick={onClick}>{children}{name}</button>
  );
};

export default Button;
