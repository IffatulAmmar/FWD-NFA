import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./Pages";
import Books from "./Pages/books";
import Team from "./Pages/team";
import Contact from "./Pages/contact";



function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="books" element={<Books/>}/>
          <Route path="team"element={<Team/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;