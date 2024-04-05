import Image from "next/image";
import Link from "next/link";
import locationIcon from "public/images/icons/location.svg";
import logo from "public/images/logo.png";
import headerStyles from "styles/header.scss";
import categoriesIcon from "public/images/icons/list.svg";
import xIcon from "public/images/icons/x.svg";

/**
 * TODO:
 * Mobile adaptive
 * Separate styles from global.scss
 * Location functional
 * Search functional
 */
type HeaderProps = {
  isShowCategories: boolean
  toggleMenu: () => {}
}

const Header = ({isShowCategories, toggleMenu}: HeaderProps) => {
  const siteName = "Abito";

  return (
    <header className={headerStyles.header}>
      <div className="logo">
        <Link href="/">
          <Image src={logo} alt="logo" width={30} />
          <span>{siteName}</span>
        </Link>
      </div>
      <div className="all-categories">
        <button onClick={toggleMenu}>
          <Image 
            src={isShowCategories ? xIcon : categoriesIcon} 
            alt="Categories" 
            width={20} 
          />
          Categories 
        </button>
      </div>
      <div className="search">
        <form>
          <input type="text" />
          <button>Search</button>
        </form>
      </div>
      <div className="location">
        <Image src={locationIcon} alt="locationIcon" width={20} />
        <span>Moscow</span>
      </div>
    </header>
  );
};

export default Header;
