
const Portfolio = () => {
    return (
      <section id="portfolio" className="py-20 bg-gray-100">
        <h2 className="text-center text-4xl font-bold mb-8">Our Features</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold">Feature 1</h3>
            <p>Description of feature 1.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold">Feature 2</h3>
            <p>Description of feature 2.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold">Feature 3</h3>
            <p>Description of feature 3.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  