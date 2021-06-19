// https://material-ui.com/components/material-icons/#material-icons for all icons available on Material-ui.com
import AppleIcon from "@material-ui/icons/Apple";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Nav() {
  return (
    //   Header nav bar

    //flex-row => places items in ONE ROW
    <div className="nav-color text-white h-14 flex flex-row space-x-14">
      {/* mt-3 : margin-top */}
      {/* text-gray-300 : changed Apple Logo color */}
      {/* cursor-pointer : will add hand shaped cursor when hovered over the logo */}
      <AppleIcon className="h-7 mt-3 text-gray-300 cursor-pointer" />
      <h1 className=" mt-3 text-gray-300 cursor-pointer">Mac</h1>
      <h1 className=" mt-3 text-gray-300 cursor-pointer">uPad</h1>
      <h1 className=" mt-3 text-gray-300 cursor-pointer">uPhone</h1>
      <h1 className=" mt-3 text-gray-300 cursor-pointer">Watch</h1>
      <h1 className=" mt-3 text-gray-300 cursor-pointer">TV</h1>
      <h1 className=" mt-3 text-gray-300 cursor-pointer">Music</h1>
      <h1 className=" mt-3 text-gray-300 cursor-pointer">Support</h1>
      <SearchIcon className="h-7 mt-3 text-gray-300 cursor-pointer" />
      <ShoppingBasketIcon
        className="h-7
       mt-3 text-gray-300 cursor-pointer"
      />
    </div>
  );
}

export default Nav;
