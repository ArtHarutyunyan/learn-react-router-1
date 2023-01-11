import "./App.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { SinglePage } from "./components/SinglePage";
import { CreatePost } from "./pages/CratePost";
import { EditPost } from "./pages/EditPost";
import { LoginPage } from "./pages/LoginPage";
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<BlogPage />} />
          <Route path="posts/:id" element={<SinglePage />} />
          <Route path="posts/:id/edit" element={<EditPost />} />
          <Route
            path="posts/new"
            element={
              <RequireAuth>
                <CreatePost />
              </RequireAuth>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "dashboard",
//         element: <Dashboard />,
//         loader: ({ request }) =>
//           fetch("/api/dashboard.json", {
//             signal: request.signal,
//           }),
//       },
//       {
//         element: <AuthLayout />,
//         children: [
//           {
//             path: "login",
//             element: <Login />,
//             loader: redirectIfUser,
//           },
//           {
//             path: "logout",
//             action: logoutUser,
//           },
//         ],
//       },
//     ],
//   },
// ]);
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route path="contact" element={<Contact />} />
//       <Route
//         path="dashboard"
//         element={<Dashboard />}
//         loader={({ request }) =>
//           fetch("/api/dashboard.json", {
//             signal: request.signal,
//           })
//         }
//       />
//       <Route element={<AuthLayout />}>
//         <Route path="login" element={<Login />} loader={redirectIfUser} />
//         <Route path="logout" />
//       </Route>
//     </Route>
//   )
// );

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <h1>Hello World</h1>
//         <Link to="about1">About Us</Link>
//       </div>
//     ),
//   },
//   {
//     path: "about",
//     element: (
//       <div>
//         <h1>About</h1>
//         <Link to="about1">About Us 1</Link>
//       </div>
//     ),
//   },
//   {
//     path: "about1",
//     element: <div>About1</div>,
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

export default App;
