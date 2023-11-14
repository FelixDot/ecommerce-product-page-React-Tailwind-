import { Link } from "react-router-dom";

const NavItem = ({ name }) => {
  return (
    <li>
      <Link className="text-darkGreyBlue border-b-[3px] border-transparent py-9 hover:border-b-[3px] hover:border-primary hover:text-black">
        {name}
      </Link>
    </li>
  );
};

export default NavItem;
