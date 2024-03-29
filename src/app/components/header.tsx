import Image from 'next/image';
import locationIcon from 'public/images/icons/location.svg'

const Header = () => {
  const siteName = 'Abito';

  return(
    <header>
      <div className="logo">{siteName}</div>
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
