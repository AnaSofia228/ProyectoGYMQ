import { Route, Routes } from 'react-router-dom'
import { Homes } from './Pages/Home';

function App() {
  return <Routes>
    <Route path='/Home' element={<Homes/>}/>
  </Routes>
}

export default App;
