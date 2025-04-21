import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import GoogleMap from "@/components/GoogleMap";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields"
      });
      return;
    }

    toast({
      title: "Success",
      description: "Message sent successfully!"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 pt-20 sm:pt-28 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4 sm:mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-300">
            Have questions about our products or services? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8 opacity-0 animate-fade-in animation-delay-500">
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                content: ["123 Paper Mill Road", "Industrial District", "Production City"]
              },
              {
                icon: Phone,
                title: "Call Us",
                content: ["+1 (555) 123-4567"]
              },
              {
                icon: Mail,
                title: "Email Us",
                content: ["contact@papercraft.com"]
              }
            ].map((item, index) => (
              <Card key={item.title} className="glass p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      {item.title}
                    </h3>
                    {item.content.map((line, i) => (
                      <p key={i} className="text-sm sm:text-base text-gray-600">{line}</p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="order-first lg:order-none w-full h-64 sm:h-72 md:h-96 mb-8 opacity-0 animate-fade-in animation-delay-600 lg:mb-0">
            <GoogleMap 
              latitude={27.854510666767304} 
              longitude={82.67260432691184} 
              zoom={15} 
              mapType="satellite"
            />
          </div>
          
          <Card className="glass p-6 sm:p-8 opacity-0 animate-fade-in animation-delay-700 lg:col-span-2 xl:col-span-1 xl:col-start-2 xl:row-start-1 xl:row-span-1">
            <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <Input 
                  name="name"
                  type="text" 
                  placeholder="Your name" 
                  className="bg-white/50"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <Input 
                  name="email"
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-white/50"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <Textarea 
                  name="message"
                  placeholder="Your message" 
                  rows={4} 
                  className="bg-white/50"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-90 transition-opacity">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
