import { Footer, Header } from "./components";
import { Contact, Home, Portfolio } from "./pages";
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
