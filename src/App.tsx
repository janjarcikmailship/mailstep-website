import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hp } from "./screens/Hp/Hp";
import { Reference } from "./screens/Reference/Reference";
import { Blog } from "./screens/Blog/Blog";
import { Contact } from "./screens/Contact/Contact";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hp />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </Router>
  );
};
