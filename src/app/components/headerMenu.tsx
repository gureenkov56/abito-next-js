import Image from "next/image";
import Link from "next/link";
import { PropsWithoutRef } from 'react'
import 'styles/header-menu.scss'
import carIcon from 'public/images/png/categories/car-icon.png'
import buildIcon from 'public/images/png/categories/building-icon.png'
import telIcon from 'public/images/png/categories/tel-icon.png'

type HeaderMenuProps = {
  isShow: string
}

const headerMenu = ({isShow}: PropsWithoutRef<HeaderMenuProps>) => {

  const className = [isShow, 'menu'].join(" ")

  return (
    <div className={className} >
      <div className="left-side">
        <ul>
          <li>
            <Link href='/'>
              <Image src={carIcon} alt="alt" width={25} />
              <span>Автомобили</span>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <Image src={buildIcon} alt="alt" width={25} />
              <span>Недвижимость</span>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <Image src={telIcon} alt="alt" width={25} />
              <span>Техника</span>
            </Link>
          </li>
          
          
        </ul>
      </div>
      <div className='right-side'>
        <h2>Категория </h2>
        <h3>Подкатегория</h3>
        <ul>
          <li>Подкатегория 1</li>
          <li>Подкатег 2</li>
          <li>Подк 3</li>
        </ul>
      </div>
      
    </div>
  )
}

export default headerMenu
