import { Button } from "@/app/components/ui/button";


const packages = [
  {
    name: "Starter",
    price: "999",
    platforms: "Facebook & Instagram",
    features: ["Basic Social Media Package"],
  },
  {
    name: "Express",
    price: "1,599",
    platforms: "Facebook & Instagram",
    features: ["Social Media Growth Accelerator"],
  },
  {
    name: "Business",
    price: "2,999",
    platforms: "Facebook, Instagram, LinkedIn",
    features: ["Comprehensive Social Media Marketing Package"],
  },
  {
    name: "Enterprise",
    price: "3,599",
    platforms: "Facebook, Instagram, LinkedIn, Twitter",
    features: ["Advance Social Media Marketing package*"],
  },
]

const additionalServices = [
  "Social Media Marketing",
  "Website Design & Development",
  "App Development",
  "Search Engine Optimization",
  "Marketing & Advertising",
  "Branding & Designing",
]

const Packages = () => {
    return (
      <section id="packages" className="py-20 bg-gray-100">
          <Button className="w-full bg-white text-purple-700 hover:bg-gray-100">Get Started</Button>
       
      </section>
    );
  };
  
  export default Packages;
  