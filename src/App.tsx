import { Container } from "@mui/material"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ThreeColumnLayout from "./components/ThreeColumnLayout"
import { IzFoodsProvider } from './context/izFoodsContext'

function App() {

  return (
    <>
      <Container>
        <IzFoodsProvider>
          <Header />
          <ThreeColumnLayout />
          <Footer />
        </IzFoodsProvider>
      </Container>
    </>
  )
}

export default App
