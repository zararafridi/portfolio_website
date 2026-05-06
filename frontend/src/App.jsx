import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProjectDetail from "./components/ProjectDetail";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Layout from "./Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
