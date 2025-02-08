import { Container } from "@mui/material"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { IzFoodsProvider } from './context/izFoodsContext'
import Main from "./components/Main"


function App() {

  return (
    <>
      <Container>
        <IzFoodsProvider>
          <Header />
          <Main />
          <Footer />
        </IzFoodsProvider>
      </Container>
    </>
  )
}

export default App
