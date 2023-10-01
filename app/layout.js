import Footer from "./(components)/footer/footer";
import Header from "./(components)/header/header";

export default function Layout({ children }) {
  return (
    <>
      <link rel="stylesheet" href="globals.css" />
      <html lang="en">
        <Header/>
        {children}
        <Footer />
      </html>
    </>
  );
}
