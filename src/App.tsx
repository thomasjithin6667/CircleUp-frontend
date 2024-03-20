import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import AdminRouter from './routes/AdminRouter';
import UserRouter from './routes/UserRouter';
import { Toaster } from "sonner";

function App() {


  return (
    <>
       
    <Router>
      <Toaster/>
      <Routes>
        <Route path="/admin/*" element={<AdminRouter />} />
        <Route path="/*" element={<UserRouter />} />
      </Routes>
    </Router>
  </>
  )
}

export default App
