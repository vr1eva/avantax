import Header from ".//Header";
import Footer from ".//Footer";

export default function({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}