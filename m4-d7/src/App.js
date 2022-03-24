import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import WarningSign from './components/WarningSign'
// import MyBadge from './components/MyBadge'
// import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import MyNavbar from './components/MyNavbar'
import fantasyBooks from './fantasyBooks.json'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from './components/Registration'
import NotFound from './components/NotFound'

function App()
{
  return (
    <BrowserRouter>
      <MyNavbar />
      <div className="App App-header">
        <Routes>
          <Route path='/' element={<BookList books={fantasyBooks} />} />
          <Route path='/register' element={<Registration />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {/* <WarningSign text="Watch out again!" /> */}
        {/* <MyBadge text="NEW!!" color="info" /> */}
        {/* <SingleBook book={fantasyBooks[0]} /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
