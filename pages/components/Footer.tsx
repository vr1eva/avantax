import styles from  "./Footer.module.css"
interface Props {
  text: string;
}

const Footer = ({ text } : Props) => {
  return (
    <div className={styles.footer} >
      <div className={styles.footerText}>{text}</div>
    </div>
  );
};

export default Footer;