import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ThemeCustomizer } from "./components/theme/ThemeCustomizer";
import { ChatBot } from "./components/ai/ChatBot";
import { CursorTrail } from "./components/effects/CursorTrail";
import { Experience } from "./pages/Experience";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative ">
          {/* Scroll To Top */}
          <ScrollToTop />
          {/* Custom Cursor Trail */}
          <CursorTrail />

          {/* Main Layout */}
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </Layout>

          {/* Floating Components */}
          <ThemeCustomizer />
          <ChatBot />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
