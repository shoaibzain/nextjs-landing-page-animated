import Hero from './components/lp/Hero';
import About from './components/lp/About';
import Affordable from './components/lp/Affordable';
import Packages from './components/lp/Packages';
import Portfolio from './components/lp/Portfolio';

export default function Home() {
  return (
    <>

      <main >
        <Hero />
        <About />
        <Affordable />
        <Packages />
        <Portfolio />
      </main>

    </>
  );
}
