import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ServicesDetails from "./pages/ServicesDetails";
import BlogDetail from "./pages/BlogDetail";
import ListOfFavorite from "./pages/ListOfFavorite";
import EditAccount from "./pages/EditAccount";
import AddService from "./pages/AddService";
import EditService from "./pages/EditService";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/servicesDetail/:id" element={<ServicesDetails />} />
            <Route path="/blogDetail" element={<BlogDetail />} />
            <Route path="/listOfFavorite" element={<ListOfFavorite />} />
            <Route path="/editAccount" element={<EditAccount />} />
            <Route path="/addService" element={<AddService />} />
            <Route path="/editService/:id" element={<EditService />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
