import { Routes, Route } from "react-router-dom";
import Login from "./_auth/Login/Login";
import { AllUsers, CreatePost, EditPost, Explore, Home, PostDetails, Profile, Saved, UpdateProfile } from "./_root/pages";
import Signup from "./_auth/SignUp/Signup";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <main className="flex h-screen">
        <Routes>
          {/*Public Routees*/}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
          </Route>

          {/*rivate Routees*/}
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/all-users" element={<AllUsers />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update-post/:id" element={<EditPost />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/update-profile/:id" element={<UpdateProfile/>} />
          </Route>
        </Routes>
        <Toaster />
      </main>
    </>
  );
}

export default App;
