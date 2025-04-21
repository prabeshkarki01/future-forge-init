
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package2, ArrowRight, Send, PenLine } from "lucide-react";
import { Link } from "react-router-dom";

// Product data organized by categories
const productCategories = [
  {
    id: "writing-paper",
    title: "Writing Paper",
    products: [
      {
        id: 1,
        name: "Handmade Lokta Paper",
        description: "Premium textured writing paper made from sustainable lokta fiber",
        image: "/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png"
      },
      {
        id: 2,
        name: "Premium Letter Set",
        description: "Elegant stationery set with matching envelopes",
        image: "/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png"
      },
      {
        id: 3,
        name: "Himalayan Fiber A4",
        description: "Durable writing sheets with natural Himalayan fiber inclusions",
        image: "/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png"
      }
    ]
  },
  {
    id: "notebooks",
    title: "Notebooks",
    products: [
      {
        id: 4,
        name: "Handbound Journal",
        description: "Traditional Nepali binding with 100% lokta paper pages",
        image: "/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png"
      },
      {
        id: 5,
        name: "Pocket Notebook",
        description: "Small-format notebook with durable handmade cover",
        image: "/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png"
      },
      {
        id: 6,
        name: "Artist Sketchbook",
        description: "Thick textured pages perfect for sketching and watercolor",
        image: "/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png"
      }
    ]
  },
  {
    id: "envelopes",
    title: "Envelopes",
    products: [
      {
        id: 7,
        name: "Decorative Envelopes",
        description: "Hand-decorated envelopes with traditional Nepali motifs",
        image: "/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png"
      },
      {
        id: 8,
        name: "Business Envelopes",
        description: "Professional-grade handmade envelopes for business correspondence",
        image: "/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png"
      }
    ]
  },
  {
    id: "gift-wrap",
    title: "Gift Wrap",
    products: [
      {
        id: 9,
        name: "Printed Gift Paper",
        description: "Handprinted wrapping paper with botanical designs",
        image: "/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png"
      },
      {
        id: 10,
        name: "Luxury Gift Bags",
        description: "Handcrafted paper gift bags with cotton handles",
        image: "/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png"
      }
    ]
  },
  {
    id: "custom",
    title: "Custom",
    products: [
      {
        id: 11,
        name: "Wedding Stationery",
        description: "Custom invitations and stationery for your special day",
        image: "/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png"
      },
      {
        id: 12,
        name: "Corporate Branding",
        description: "Custom paper products featuring your company logo",
        image: "/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png"
      }
    ]
  }
];

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Header */}
      <div className="pt-20 sm:pt-28 md:pt-32 pb-10 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4 sm:mb-6 animate-fade-in">
            Our Premium Paper Products
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto text-center mb-6 sm:mb-8 opacity-0 animate-fade-in animation-delay-300">
            Discover our range of handcrafted Nepali paper products made using traditional techniques and sustainable materials.
          </p>
        </div>
      </div>

      {/* Product Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        {productCategories.map((category, categoryIndex) => (
          <div key={category.id} className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6 sm:mb-8 opacity-0 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}>
              {category.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {category.products.map((product, productIndex) => (
                <Card 
                  key={product.id} 
                  className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0 animate-fade-in bg-white/90"
                  style={{ animationDelay: `${(categoryIndex * 100) + (productIndex * 100)}ms` }}
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 sm:mb-5 text-sm">{product.description}</p>
                    <Button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700">
                      Inquire
                      <Send className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Custom Orders CTA */}
      <div className="py-12 sm:py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-xl bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center mb-4 sm:mb-6">
                  <PenLine className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Custom Orders
                </h2>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Looking for something unique? We specialize in custom paper products tailored to your specific needs.
                  From corporate stationery to wedding invitations, our artisans can create bespoke paper solutions that
                  reflect your vision and values.
                </p>
                <Link to="/contact">
                  <Button className="flex items-center gap-2 text-base sm:text-lg px-4 py-2 sm:px-6 sm:py-6 h-auto bg-green-600 hover:bg-green-700">
                    Request a Custom Order
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg mt-6 lg:mt-0">
                <img 
                  src="/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png" 
                  alt="Custom Paper Products" 
                  className="w-full h-48 sm:h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
