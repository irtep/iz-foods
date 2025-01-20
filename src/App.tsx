import { Container } from "@mui/material"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ThreeColumnLayout from "./components/ThreeColumnLayout"
import { izFoodsProvider } from './context/izFoodsProvider'

function App() {

  return (
    <>
      <Container>
        <Iz4Provider>
          <Header />
          <ThreeColumnLayout />
          <Footer />
        </Iz4Provider>
      </Container>
    </>
  )
}

export default App
