import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-md z-20">
      <nav className="flex justify-between items-center mx-auto w-full container py-4 sm:py-4 px-4 sm:px-4 lg:px-8">
        <div className="text-2xl font-bold">
          <Image
            src="/images/logo.png"  // Path relative to the "public" directory
            alt="Logo"
            width={150}
            height={50}
          />
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:underline">What We Do</a>
          </li>
          <li>
            <a href="#affordable" className="hover:underline">Affordable</a>
          </li>
          <li>
            <a href="#packages" className="hover:underline">Packages</a>
          </li>
          <li>
            <a href="#portfolio" className="hover:underline">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">Contact</a>
          </li>
        </ul>
        <ul className="flex space-x-6">
          <li>
            <a href="#hero" className="hover:underline">+971 52 427 5955</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
