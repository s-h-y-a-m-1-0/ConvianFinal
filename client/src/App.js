import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Account from "./pages/account";
import AddForm from "./pages/addForm";
import AddBlog from "./pages/addBlog";
import Blogs from "./pages/blogs";
import FormAction from "./pages/formAction";
import Forms from "./pages/forms";
import Home from "./pages/home";
import List from "./pages/List";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/account" element={<Account />} />
          <Route path="/addForm" element={<AddForm />} />
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/formAction" element={<FormAction />} />
          <Route path="/list" element={<List />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
