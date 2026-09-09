// import { Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import ServicesPage from "./pages/ServicesPage";
// import  ProductsPage from "./pages/ProductsPage";
// import ContactPage from "./pages/ContactPage";
// import AcademicAboutPage from "./pages/AcademicAboutPage";
// import BookServicesPage from "./pages/BookServicesPage";
// import ChatWidget from "./compo
// import ScrollToTop from "./components/common/ScrollToTop";
// import LoadingScreen from "./components/LoadingScreen";
// import ChatWidget from "./components/ChatWidget";
// function App() {
//   return (
//     <>
//       {/* Full-screen loading page */}
//       <LoadingScreen />
//           <ScrollToTop />
// <ChatWidget />

//       {/* Website Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route
//           path="/services"
//           element={<ServicesPage />}
//         />

//         <Route
//           path="/products"
//           element={<ProductsPage />}
//         />

//         <Route
//           path="/contact"
//           element={<ContactPage />}
//         />

//         <Route
//           path="/academic-about"
//           element={<AcademicAboutPage />}
//         />

//         <Route
//           path="/book-services"
//           element={<BookServicesPage />}
//         />
//       </Routes>
//         <ChatWidget />
//     </>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import AcademicAboutPage from "./pages/AcademicAboutPage";
import BookServicesPage from "./pages/BookServicesPage";

import ScrollToTop from "./components/common/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import ChatWidget from "./components/ChatWidget";

function App() {
  return (
    <>
      {/* Full-screen loading page */}
      <LoadingScreen />

      {/* Scroll to top whenever the route changes */}
      <ScrollToTop />

      {/* Floating WhatsApp / Chat widget */}
      <ChatWidget />

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
    </>
  );
}

export default App;