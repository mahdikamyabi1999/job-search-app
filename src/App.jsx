import Navbar from './components/Navbar/Navbar'
import Search from './components/searchdiv/Search'
import Jobs from './components/jobdiv/Jobs'
import Value from './components/valueDiv/Value'
import Footer from './components/footerDiv/Footer'
function App() {
return (
  <div className='w-[85%] m-auto bg-white'>
    <Navbar/>
    <Search/>
    <Jobs/>
    <Value/>
    <Footer/>
  </div>
)
}

export default App
