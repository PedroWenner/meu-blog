import { Routes, Route } from "react-router-dom";
import About from "@/pages/About/About";
import Projects from "@/pages/Projects/Projects";
import Experience from "@/pages/Experience/Experience";
import Skills from "@/pages/Skills/Skills";
import Contact from "@/pages/Contact/Contact";
import ProjectDetail from "@/pages/Projects/ProjectDetail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}
