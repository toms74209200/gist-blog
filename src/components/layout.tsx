import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <body className={["max-w-screen-md", "px-4", "py-8", "mx-auto"].join(" ")}>
      {children}
    </body>
  );
};

export default Layout;
