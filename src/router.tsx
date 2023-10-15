import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomeLayout from './layouts/HomeLayout';
import Keep from './pages/Keep';
import Read from './pages/Read';
import All from './pages/All';
import Welcome from './pages/Welcome';
import NaverLogin from './pages/NaverLogin';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      {/* AppLayout : header, footer */}
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Keep />} />
        <Route path="/read" element={<Read />} />
        <Route path="/all" element={<All />} />
      </Route>
      <Route path="/index.php/welcome" element={<Welcome />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/naverLogin" element={<NaverLogin />} />
    </Route>,
  ),
);

export default router;
