import { NavigationItems } from "../NavigationItems/NavigationItems";
import { NavigationBurgerIcon } from "../NavigationBurgerIcon/NavigationBurgerIcon";

const NAVIGATION_ITEMS = [
  {
    label: "People",
    url: "/people",
  },
  {
    label: "Planets",
    url: "/planets",
  },
];

// https://daisyui.com/components/navbar/#responsive-dropdown-menu-on-small-screen-center-menu-on-large-screen
export const Navigation = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm mb-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <NavigationBurgerIcon />
          </div>
          <NavigationItems mobile={true} data={NAVIGATION_ITEMS} />
        </div>
        <a className="btn btn-ghost text-xl">SemihWars</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <NavigationItems mobile={false} data={NAVIGATION_ITEMS} />
      </div>
    </div>
  );
};
