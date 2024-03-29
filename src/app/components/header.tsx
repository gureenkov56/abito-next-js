import Image from 'next/image';
import Link from 'next/link';
import locationIcon from 'public/images/icons/location.svg'
import logo from 'public/images/logo.png'

/**
 * TODO: 
 * Mobile adaptive
 * Separate styles from global.scss
 * Location functional
 * Search functional
 */

const Header = () => {
  const siteName = 'Abito';

  return(
    <header>
      <div className="logo">
        <Link href='/'>
          <Image src={logo} alt="logo" width={30}/>
          <span>{siteName}</span>
        </Link>
      </div>
      <div className="search">
        <form>
          <input type="text" />
          <button>Search</button>
        </form>
      </div>
      <div className="location">
        <Image src={locationIcon} alt="locationIcon" width={20}/>
        <span>Moscow</span>
      </div>
      
    </header>
  )
}

export default Header
