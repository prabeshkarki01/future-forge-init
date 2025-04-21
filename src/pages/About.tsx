
import { Clock, Users, Rocket, Leaf, Award, Globe } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Hero Section */}
      <div className="pt-20 sm:pt-28 md:pt-32 pb-10 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6 sm:mb-8 animate-fade-in">
            Our Story
          </h1>
          <div className="prose prose-lg max-w-3xl mx-auto text-gray-600 opacity-0 animate-fade-in animation-delay-300">
            <p className="mb-4 text-center text-base sm:text-lg">
              Founded in 2024, RAPTIHANDMADE emerged from a vision to preserve and promote traditional Nepali kagaj (paper) making while creating sustainable handcrafted products.
            </p>
            <p className="text-center text-base sm:text-lg">
              Our artisans combine centuries-old techniques with modern innovation, creating handmade papers that carry cultural significance while meeting contemporary quality standards.
            </p>
          </div>
        </div>
      </div>

      {/* Video and News Section */}
      <div className="py-16 sm:py-20 md:py-24 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-10 sm:mb-16">Featured Media</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* YouTube Video Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-video">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/OtdDfAoNqs0"
                  title="Rapti Handmade Papers Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
              <div className="p-4 bg-gray-50">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  Our Traditional Process
                </h3>
                <p className="text-sm text-gray-600">
                  Watch our artisans create beautiful handmade paper using traditional Nepali techniques.
                </p>
              </div>
            </div>
            
            {/* News Article */}
            <div className="rounded-xl overflow-hidden shadow-lg bg-white flex flex-col">
              <img 
                src="/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png"
                alt="Nepali Handmade Paper"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-grow">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-3">
                  Featured in Setopati News
                </h3>
                <p className="text-gray-600 mb-4">
                  Our traditional papermaking techniques and sustainable practices were recently featured in a Setopati article highlighting Nepal's cultural heritage crafts.
                </p>
                <a 
                  href="https://www.setopati.com/kinmel/business/341390?fbclid=IwY2xjawJxH_9leHRuA2FlbQIxMQABHtuJ14T4r90wdmfvEIp6dFTySJmv-4PpIGmcdAdVcOvCvRrHGlqanNKSO2Sq_aem_LLsLcLPt0eJBze0DgB3nhw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                    Read Full Article
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 sm:py-20 md:py-24 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-10 sm:mb-16">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Clock, title: "Raw Materials", description: "Sustainable sourcing of lokta bark" },
              { icon: Users, title: "Processing", description: "Traditional boiling and beating" },
              { icon: Rocket, title: "Formation", description: "Hand pouring and sun drying" },
              { icon: Leaf, title: "Quality Control", description: "Meticulous inspection by artisans" }
            ].map((step, index) => (
              <div key={step.title} className="glass p-6 sm:p-8 text-center rounded-2xl opacity-0 animate-fade-in hover:shadow-lg transition-all duration-300"
                   style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-xl bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Handcrafted Nepali Kagaj Section */}
      <div className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Handcrafted Nepali Kagaj
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4 text-base sm:text-lg">
                  Nepali kagaj is a treasured cultural heritage dating back hundreds of years. Our paper is meticulously handcrafted from the inner bark of the lokta bush (Daphne papyracea), which grows naturally in Nepal's Himalayan region at elevations between 6,500 and 9,500 feet.
                </p>
                <p className="mb-4 text-base sm:text-lg">
                  The sustainable harvesting process involves cutting only the mature lokta stems, allowing the plant to regenerate. Once harvested, the bark undergoes a traditional process of boiling, beating, and hand-pouring onto frames. The resulting paper is then sun-dried in the Himalayan climate.
                </p>
                <p className="text-base sm:text-lg">
                  This time-honored technique creates paper renowned for its exceptional durability, resistance to damage from humidity, insects, and mold. Each sheet captures the essence of Nepalese craftsmanship and environmental harmony.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">100% Handmade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">Eco-friendly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">Nepal Heritage</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl mt-8 lg:mt-0">
              <img 
                src="/lovable-uploads/e394db73-5823-4cc4-ad1d-000b7b9739eb.png"
                alt="Traditional Nepali Kagaj Making"
                className="w-full object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="py-16 sm:py-20 md:py-24 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-10 sm:mb-16">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
            {[
              {
                name: "Pema Sherpa",
                role: "Founder & Creative Director",
                bio: "With 15 years of experience in traditional Nepali craftsmanship, Pema leads our creative vision and preserves authentic techniques.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop"
              },
              {
                name: "Rajesh Tamang",
                role: "Head of Production",
                bio: "A master craftsman from a family of paper makers, Rajesh oversees our production ensuring the highest quality standards.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop"
              },
              {
                name: "Amrita Rai",
                role: "Sustainability Officer",
                bio: "Passionate about environmental conservation, Amrita ensures our processes remain eco-friendly and sustainable.",
                image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&h=400&auto=format&fit=crop"
              }
            ].map((member, index) => (
              <div 
                key={member.name}
                className="glass p-4 sm:p-6 rounded-xl text-center opacity-0 animate-fade-in hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <Avatar className="h-24 w-24 sm:h-32 sm:w-32 border-4 border-white shadow-md">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-green-700 font-medium mb-3 sm:mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm sm:text-base">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
