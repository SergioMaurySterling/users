import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersFrom from "../pages/form/RegistrationForm";
import UsersList from "../pages/list/usersList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersFrom />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
