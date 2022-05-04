import { ThemeProvider } from "styled-components"
import theme from "../styles/Constants/theme"
import 'normalize.css'
import NavBar from "../styles/Constants/NavBarStyles"
import NavBarComponent from "../src/components/Constants/NavBarComponent"

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
      <NavBarComponent />
      <Component {...pageProps} />
    </ThemeProvider>
      

  
  )
}

export default MyApp
