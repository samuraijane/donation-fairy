import { Route } from "react-router-dom";
import Categories from "./categories/categories";
import Credits from "./credits/credits";
import Donate from "./donate/donate";
import Landing from "./landing/landing";
import Locations from "./locations/locations";

const Routes = () => {

  return (
    <>
      <Route
        exact={true}
        path="/"
        render={() => <Landing />}
      />
      <Route
        exact={true}
        path="/categories"
        render={() => <Categories />}
      />
      <Route
        exact={true}
        path="/credits"
        render={() => <Credits />}
      />
      <Route
        exact={true}
        path="/donate"
        render={() => <Donate />}
      />
      <Route
        exact={true}
        path="/locations"
        render={() => <Locations />}
      />
    </>
  )
};

export default Routes;