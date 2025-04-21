
import React from 'react';

interface GoogleMapProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
  mapType?: 'roadmap' | 'satellite' | 'hybrid' | 'terrain';
}

const GoogleMap: React.FC<GoogleMapProps> = () => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-md">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14110.185782845942!2d82.6664691111117!3d27.854479694949006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997a5133dc4307b%3A0x86332014cb2840fb!2sRAPTI%20PAPER%20%26%20HAND%20CRAFT!5e0!3m2!1sen!2snp!4v1745039017541!5m2!1sen!2snp"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Rapti Handmade Papers - Visit Our Workshop in Nepal"
        aria-label="Google Maps showing Rapti Paper & Hand Craft location in Nepal"
      />
    </div>
  );
};

export default GoogleMap;
