
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Rapti Handmade Papers</h3>
            <p className="text-gray-400 text-sm sm:text-base">Crafting premium Nepali lokta paper products with sustainable practices and traditional techniques passed down through generations.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm sm:text-base">Rapti Paper & Hand Craft</p>
            <p className="text-gray-400 text-sm sm:text-base">Rapti District, Nepal</p>
            <p className="text-gray-400 text-sm sm:text-base">contact@raptihandmadepapers.com.np</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <p className="text-gray-400 text-sm sm:text-base">Monday - Friday: 9am - 6pm</p>
            <p className="text-gray-400 text-sm sm:text-base">Saturday: 10am - 4pm</p>
            <p className="text-gray-400 text-sm sm:text-base">Sunday: Closed</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Rapti Handmade Papers. All rights reserved.</p>
          <p className="mt-2">Traditional Nepali lokta paper products | Handcrafted in Nepal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
