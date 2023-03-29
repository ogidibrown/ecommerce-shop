import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails'





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path="/" index element={< Home />} />
      <Route path='product/:id' element={<ProductDetails />} />
      {/* ... etc. */}
    </Route>
  )
);


function App() {


  return (
    <div className="overflow-hidden">
      <Header />
     <RouterProvider router = {router} />  
     <Sidebar />
     <Footer />
    </div>
  );
}

export default App;
