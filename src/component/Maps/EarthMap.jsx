import React from 'react';

const EarthMap = () => {
  const apiKey = 'AIzaSyCwuGEx1aBBuVAoWhfK_gNBNwLAgrLyfQ0';
  const latitude = 51.505;
  const longitude = -0.09;
  const zoom = 13;
  const mapSrc = `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${latitude},${longitude}&zoom=${zoom}`;

  return (
    <div className="p-8 max-w-[42rem]">
      <h1 className="text-4xl leading-[45px] font-bold mb-6">Tour Map</h1>
      <div style={{ position: 'relative', height: '500px', width: '100%' }}>
        <iframe
          title="Google Map"
          src={mapSrc}
          style={{ border: 0, width: '100%', height: '100%' }}
          allowFullScreen
        ></iframe>
      </div>
      <div className="border-t border-gray-300 mt-[50px]"></div>
    </div>
  );
};

export default EarthMap;
