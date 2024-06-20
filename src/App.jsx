import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

// Routes
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Project from "./components/Project";
import ContactUs from "./components/ContactUs";
//Resume routes
import Resume from "./components/resume/Resume";
import Skills from "./components/resume/Skills";
import Education from "./components/resume/Education";
import Experience from "./components/resume/Experience";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="resume" element={<Resume />} >
          <Route path="skills" element={<Skills />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} />
          </Route>
          <Route path="projects" element={<Project />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
