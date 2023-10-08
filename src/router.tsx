import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App';
import Main from './layouts/Main';
import HomeLayout from './layouts/HomeLayout';
import Keep from './pages/Keep';
import Read from './pages/Read';
import All from './pages/All';
import Welcome from './pages/Welcome';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      {/* header, footer */}
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Keep />} />
        <Route path="/read" element={<Read />} />
        <Route path="/all" element={<All />} />
      </Route>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Route>,
  ),
);

export default router;
