import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    //outlet swaps between the different pages conditionally by using the URL of the pages
    <>
      <Header />
      <main className=" w-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
