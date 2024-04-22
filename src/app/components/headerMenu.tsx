import Image from "next/image";
import Link from "next/link";
import { PropsWithoutRef, useEffect, useState } from 'react'
import 'styles/header-menu.scss'
import { Category } from "@prisma/client";
import axios from "axios";

type HeaderMenuProps = {
  isShow: string
}

const HeaderMenu = ({ isShow }: PropsWithoutRef<HeaderMenuProps>) => {

  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    axios.get('/api/categories')
      .then(({ data }) => setCategories(data))
  })

  function getIcon(filePng: string | null): string {
    return filePng ? require(`public/images/png/categories/${filePng}`) : ''
  }

  const className = [isShow, 'menu'].join(" ")

  return (
    <div className={className} >
      <div className="left-side">
        <ul>
          {categories.map(({ name, id, icon }, index) => (
            <li key={id}>
              <Link href={`/category/${id}`} >
                <Image
                  src={getIcon(icon)}
                  alt={`Категория ${name}`}
                  width={25}
                />
                <span>{name}</span>
              </Link>
            </li>
          ))}
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

export default HeaderMenu
