import { Navbar, Sidebar } from "./layout";
import {
  AllNotes,
  ArchiveNotes,
  ErrorPage,
  TagNotes,
  TrashNotes,
} from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { useAppSelector } from "./hooks/redux";
import { TagsModal } from "./components";

// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { viewEditTagsModal } = useAppSelector((state) => state.modal);
  return (
    <div className="app">
      {viewEditTagsModal && <TagsModal type="edit" />}
      <ToastContainer
        position="bottom-right"
        theme="light"
        pauseOnHover
        autoClose={1500}
      />
      ;
      <Router>
        <Sidebar />
        <div className="app__container">
          <Navbar />
          <Routes>
            <Route path="/" element={<AllNotes />} />
            <Route path="/archive" element={<ArchiveNotes />} />
            <Route path="/trash" element={<TrashNotes />} />
            <Route path="/tag/:name" element={<TagNotes />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="/*" element={<Navigate to={"/404"} replace />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
