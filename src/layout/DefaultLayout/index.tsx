import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ReactNode } from "react";

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
