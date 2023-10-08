import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
