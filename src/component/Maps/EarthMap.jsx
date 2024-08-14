import React, { useEffect } from 'react';

// Function to initialize the map
const initMap = () => {
  // Create a new map instance
  const map = new window.google.maps.Map(document.getElementById('map'), {
    center: { lat: 51.505, lng: -0.09 },
    zoom: 13,
  });

  // Add an AdvancedMarkerElement
  new window.google.maps.marker.AdvancedMarkerElement({
    position: { lat: 51.505, lng: -0.09 },
    map,
    title: 'Hello World!',
  });
};

// Function to load the Google Maps API script
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const existingScript = document.getElementById('google-maps-script');
    if (existingScript) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

const EarthMap = () => {
  useEffect(() => {
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your actual API key
    const scriptSrc = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=geometry,places`;

    // Load the Google Maps script and initialize the map
    loadScript(scriptSrc)
      .then(() => {
        // Initialize the map after the script has loaded
        if (window.google) {
          initMap();
        } else {
          console.error('Google Maps API did not load.');
        }
      })
      .catch((error) => {
        console.error('Failed to load Google Maps script:', error);
      });
  }, []);

  return (
    <div className="p-8 max-w-[42rem]">
      <h1 className="text-4xl leading-[45px] font-bold mb-6">Tour Map</h1>
      <div id="map" style={{ height: '500px', width: '100%' }}></div>
      <div className="border-t border-gray-300 mt-[50px]"></div>
    </div>
  );
};

export default EarthMap;
