import Header from "../components/header"
import '../styles/global.scss'

const Main = ({children}) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <footer>Footer</footer>
    </>
  )
}

export default Main
