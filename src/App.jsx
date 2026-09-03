import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import OffersPage from "./pages/OffersPage";
import ContactPage from "./pages/ContactPage";
import AcademicAboutPage from "./pages/AcademicAboutPage";
import BookServicesPage from "./pages/BookServicesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/services"
        element={<ServicesPage />}
      />

      <Route
        path="/offers"
        element={<OffersPage />}
      />

      <Route
        path="/contact"
        element={<ContactPage />}
      />

      <Route
        path="/academic-about"
        element={<AcademicAboutPage />}
      />

      <Route
        path="/book-services"
        element={<BookServicesPage />}
      />
    </Routes>
  );
}

export default App;