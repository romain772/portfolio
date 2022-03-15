import Footer from "./Footer";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import { useWindowSize } from "../utils/helpers"

export default function Layout({ children }) {
  const size = useWindowSize()
    return (
      <>
        {size.width>800?
        <Header />:
        <MobileHeader/>}
        <main className="bg-gray-100">{children}</main>
        <Footer/>
      </>
    )
  }