import Header from "./Header/Header";

import { ReactNode } from "react";

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
    </div>
  );
}

export default DefaultLayout;
