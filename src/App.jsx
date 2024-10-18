import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    //outlet swaps between the different pages conditionally by using the URL of the pages
    <>
      <Navigation />
      <main className=" w-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
