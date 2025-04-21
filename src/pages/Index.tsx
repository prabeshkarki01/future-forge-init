
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-gray-50 to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-12 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Rapti Handmade Papers
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 opacity-0 animate-fade-in animation-delay-300">
            Traditional Nepali lokta paper products, handcrafted with sustainable practices and authentic techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in animation-delay-500">
            <Link to="/products">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-90 transition-opacity">
                Explore Our Products <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                Learn About Our Process
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Traditional Methods",
              description: "Our papers are crafted using centuries-old techniques passed down through generations of Nepali artisans."
            },
            {
              title: "Sustainable Practices",
              description: "We use lokta bushes that naturally regenerate, ensuring our papermaking process remains environmentally friendly."
            },
            {
              title: "Authentic Quality",
              description: "Each sheet of paper is carefully handcrafted to maintain the highest quality and authentic Nepali characteristics."
            }
          ].map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-white/80 shadow-md hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in" style={{ animationDelay: `${800 + index * 200}ms` }}>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
