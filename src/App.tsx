import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Start} from './components'
import {GiftSetContainer, OrderContainer} from './containers'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Start />} path="/" />
        <Route element={<GiftSetContainer />} path="/gift-set"/>
        <Route element={<OrderContainer />} path="/order"/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
