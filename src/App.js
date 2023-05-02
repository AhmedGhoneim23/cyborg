import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import { Header, Container, Footer } from './components/index';
import { Home, Profile } from './Pages/index'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  )
}

export default App;