import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import  ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import AcademicAboutPage from "./pages/AcademicAboutPage";
import BookServicesPage from "./pages/BookServicesPage";
import ChatWidget from "./components/ChatWidget";

import LoadingScreen from "./components/LoadingScreen";

function App() {
  return (
    <>
      {/* Full-screen loading page */}
      <LoadingScreen />

      {/* Website Routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/services"
          element={<ServicesPage />}
        />

        <Route
          path="/products"
          element={<ProductsPage />}
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
        <ChatWidget />
    </>
  );
}

export default App;