import { Routes, Route } from "react-router-dom";
import Profile from "./_root/pages/Profile/Profile";
import Login from "./_auth/Login/Login";
import { Home } from "./_root/pages";
import Signup from "./_auth/SignUp/Signup";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

function App() {
  
  return (
    <>
      <main className="flex h-screen">
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
          </Route>
        </Routes>
        <Toaster />
      </main>
    </>
  );
}

export default App;
