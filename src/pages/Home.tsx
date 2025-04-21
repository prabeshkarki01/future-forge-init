
import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Leaf, Recycle, Users, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const Home = () => {
  return (
    <div>
      {/* Hero Section with Glass Effect */}
      <div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url('/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png')` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-blue-50/30 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-12 sm:py-16 md:py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4 sm:mb-6 animate-fade-in">
            Crafting the Future of Paper
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-300">
            Where innovation meets sustainability in modern paper manufacturing.
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg opacity-0 animate-fade-in animation-delay-500"
          >
            Explore Our Products
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>

      {/* Features Section with Modern Cards */}
      <div className="py-16 sm:py-20 md:py-24 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent opacity-0 animate-fade-in">
              Why Choose RAPTIHANDMADE?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Sustainable Production",
                description: "Using eco-friendly processes and materials to protect our environment.",
                icon: Leaf
              },
              {
                title: "Premium Quality",
                description: "State-of-the-art technology ensuring superior paper quality.",
                icon: Sparkles
              },
              {
                title: "100% Recyclable",
                description: "All our products are designed with recycling in mind.",
                icon: Recycle
              }
            ].map((feature, index) => (
              <Card
                key={feature.title}
                className="group backdrop-blur-sm bg-white/90 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <CardHeader>
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm sm:text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* About Preview Section */}
      <div className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Our Heritage
              </h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                At RAPTIHANDMADE, we preserve the centuries-old tradition of Nepali handmade paper. 
                Our skilled artisans craft each sheet using sustainable lokta bark, following 
                time-honored techniques passed down through generations.
              </p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Every product tells a story of Nepalese culture, craftsmanship, and our commitment to 
                environmental sustainability.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
              >
                Learn more about our story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl mt-6 lg:mt-0">
              <img 
                src="/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png"
                alt="Traditional Nepali Kagaj Making"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Preview Section */}
      <div className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4 sm:mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Have questions about our products or interested in learning more about our 
              traditional papermaking process? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: MapPin,
                title: "Visit Our Workshop",
                content: "123 Craft Street, Kathmandu, Nepal"
              },
              {
                icon: Users,
                title: "Meet Our Artisans",
                content: "Schedule a tour of our facilities"
              },
              {
                icon: ArrowRight,
                title: "Contact Us",
                content: "Get in touch for custom orders",
                isLink: true
              }
            ].map((item, index) => (
              <Card
                key={item.title}
                className="text-center backdrop-blur-sm bg-white/70 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mx-auto h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm sm:text-base">
                    {item.content}
                  </CardDescription>
                  {item.isLink && (
                    <Link
                      to="/contact"
                      className="mt-4 inline-block text-green-600 hover:text-green-800 font-medium"
                    >
                      Contact us now
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
