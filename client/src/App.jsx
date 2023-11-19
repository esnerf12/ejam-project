import { Header } from './components/Header.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Title } from './components/Title.jsx'
import { Steps } from './components/Steps.jsx'
import { Content } from './components/Content.jsx'
import { Footer } from './components/Footer.jsx'
import { Carousel } from './components/Carousel.jsx'
import { useScreenSize } from './hooks/useScreenSize.js'
import './App.css'

function App() {
  const { width } = useScreenSize()
  return (
    <>
      {
        width > 1355
        ? <Header></Header>
        : <Carousel></Carousel>
      }
      <Navbar></Navbar>
      <div className='md:px-0 md:py-0 px-[30px] py-[32px]'>
        <Title></Title>
        <Steps></Steps>
        <Content></Content>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
