import { Footer, Header } from "./components";
import { Contact, Home } from "./pages";
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
