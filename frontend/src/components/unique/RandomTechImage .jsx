import React from "react";

const RandomTechImage = () => {
  // Random image from Unsplash every refresh
  const imageUrl =
    // "https://source.unsplash.com/600x400/?webdevelopment,AI,laptop,programming";
"https://www.sourcesplash.com/i/random?q=technology&"
  return (
    <div className="h-full w-full">
      <img
        src={imageUrl}
        alt="Random Tech"
        className="w-full h-full object-cover "
      />
    </div>
  );
};

export default RandomTechImage;
