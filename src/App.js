import './App.css';
import { Routes, Route, } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import Register from './components/Register/Register';
import Navigation from './components/Shared/Navigation/Navigation';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import Blog from './components/Blog/Blog';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AdminRoute from './components/Login/AdminRoute/AdminRoute';
import ManageAllPost from './components/Admin/ManageAllPost/ManageAllPost';
import AddPost from './components/AddPost/AddPost'
import Details from './components/Details/Details';
import Footer from './components/Shared/Footer/Footer';

function App() {
  
  return (
    <>
    <AuthProvider>
      <Navigation/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="home" element={<Home/>} />
      <Route path="blog" element={<PrivateRoute><Blog/></PrivateRoute>} />
      <Route path="addpost" element={<PrivateRoute><AddPost/></PrivateRoute>} />
      <Route path="/details/:id" element={<PrivateRoute><Details/></PrivateRoute>}></Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="makeadmin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />
      <Route path="manageallpost" element={<AdminRoute><ManageAllPost /></AdminRoute>} />
      </Routes>
      <Footer/>
    </AuthProvider>
    </>
  );
}

export default App;
