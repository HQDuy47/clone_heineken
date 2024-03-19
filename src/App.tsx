import { Fragment } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./layout";
import { ReactNode, ComponentType } from "react";

type LayoutType = ComponentType<{ children: ReactNode }> | typeof Fragment;

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route: any, index: number) => {
            const Page = route.component;
            let Layout: LayoutType = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
