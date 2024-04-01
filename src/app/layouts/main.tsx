import { useState } from "react"
import Header from "../components/header"
import HeaderMenu from "../components/headerMenu"
import '../styles/global.scss'

const Main = ({children}) => {
  const [isShowCategories, setIsShowCategories] = useState(false)
  const headerMenuClass = isShowCategories ? 'show' : 'hidden'
  
  return (
    <>
      <Header 
        isShowCategories={isShowCategories}
        toggleMenu={() => setIsShowCategories(!isShowCategories)} 
      />
      <HeaderMenu 
        className={headerMenuClass}
      />

      <main>{children}</main>

      <footer>Footer</footer>
    </>
  )
}

export default Main
