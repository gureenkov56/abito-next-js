import React, { PropsWithChildren, useState } from "react"
import Header from "../components/header"
import HeaderMenu from "../components/headerMenu"
import '../styles/global.scss'

const Main = ({children}: PropsWithChildren) => {
  const [isShowCategories, setIsShowCategories] = useState(true)
  const headerMenuClass = isShowCategories ? 'show' : 'hidden'

  
  
  return (
    <>
      <Header 
        isShowCategories={isShowCategories}
        // TODO: fix this stupid crutch
        toggleMenu={() => {setIsShowCategories(!isShowCategories); return false}} 
      />
      <HeaderMenu 
        isShow={headerMenuClass}
      />

      <main>{children}</main>

      <footer>Footer</footer>
    </>
  )
}

export default Main
