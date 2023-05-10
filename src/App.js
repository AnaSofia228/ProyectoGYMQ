import { Route, Routes } from 'react-router-dom'
import { Homes } from './Pages/Home';
import { Store } from './Pages/Store';

function App() {
  return <Routes>
    <Route path='/Home' element={<Homes/>}/>
    <Route path='/Store' element={<Store/>}/>
  </Routes>
}

export default App;
