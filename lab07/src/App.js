import './index.css'
import Image from './components/Image'
import Header from './components/Header'
import { Content } from './components/Content'
import Cards from './components/Cards'

function App() {
  return (
    <div className='App'>
      <Header />
      <Content />
      <Image />
      <Cards />
    </div>
  )
}

export default App
