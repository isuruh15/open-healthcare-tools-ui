import { Route, Routes } from "react-router-dom";
import { SecureRoute, useAuthContext } from "@asgardeo/auth-react";
import { SelectedSampleProvider } from "../Contexts/SelectedSampleContext";

interface SideNavItem {
  path: string;
  component: JSX.Element;
}

interface Props {
  items: SideNavItem[];
}

const AppRoutes = ({ items }: Props) => {
  const { signIn } = useAuthContext();

  return (
    <SelectedSampleProvider>
      <Routes>
        {items.map((item) => (
          // item.path === "/" ?
          //   (< Route key={item.path} path={item.path} element={item.component}/>)
          // :
          //   (<SecureRoute
          //     path={item.path}
          //     component={item.component}
          //     callback={() => {
          //       // Fires when the user is not authenticated.
          //       // Will be directed to sign in.
          //       signIn();
          //     }}
          //   />)


          <Route key={item.path} path={item.path} element={item.component} />
        ))}
      </Routes>
    </SelectedSampleProvider>
  );
};

export default AppRoutes;
