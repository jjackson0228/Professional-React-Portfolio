import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Background from '/images/leaves.png';

function App() {
  return (
    //outlet swaps between the different pages conditionally by using the URL of the pages
    <>
      <div
        className="min-h-screen bg-center w-screen bg-repeat flex flex-col justify-center"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <Header />
        <main className="flex justify-center items-center">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
