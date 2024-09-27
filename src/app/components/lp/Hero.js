import Image from 'next/image';

const Hero = () => {
    return (
      <section id="hero" className="h-screen flex flex-col justify-center items-center text-center">
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/banner.jpg"
        alt="Earth from space"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Reach New Heights with the assistance of our
          </h1>
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Digital <span className="bg-pink-600 px-2 py-1 rounded">Marketing</span> Solutions
          </div>
          <div className="w-64 h-32 relative">
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-pink-600"></div>
            <div className="absolute bottom-0 left-20 w-16 h-24 bg-pink-600"></div>
            <div className="absolute bottom-0 left-40 w-16 h-32 bg-pink-600"></div>
          </div>
          
        </div>
      </div>
    </div>
      </section>
    );
  };
  
  export default Hero;
  