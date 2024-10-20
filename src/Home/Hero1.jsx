import React, { useState, useEffect } from "react";

function Hero() {
  const [currentImage, setCurrentImage] = useState(1); // Start at 1 because we add a clone at the start
  const [isTransitioning, setIsTransitioning] = useState(true); // To control smooth transition
  const images = [
    // "/assets/images/ac_0.jpg",
    "/assets/images/bannerF.png",
    "/assets/images/bannerA.png",
    "/assets/images/bannerE.png",
    "/assets/images/bannerD.png",
    "/assets/images/lightpoles.png",
    "/assets/images/plumbing2.png",
  ];

  // Add the first and last image as clones
  const allImages = [
    images[images.length - 1], // Clone of the last image
    ...images,
    images[0], // Clone of the first image
  ];

  // Auto-slide images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const nextImage = () => {
    setIsTransitioning(true);
    setCurrentImage((prevImage) => prevImage + 1);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setCurrentImage((prevImage) => prevImage - 1);
  };

  // Handle the transition end to loop images
  const handleTransitionEnd = () => {
    if (currentImage === allImages.length - 1) {
      // Disable transition temporarily to avoid seeing the jump
      setIsTransitioning(false);
      setCurrentImage(1); // Jump back to the first real image (index 1)
    } else if (currentImage === 0) {
      setIsTransitioning(false);
      setCurrentImage(allImages.length - 2); // Jump back to the last real image
    }
  };

  // Re-enable transition when currentImage changes
  useEffect(() => {
    if (!isTransitioning) {
      // Wait a frame to re-enable the transition for smoothness
      setTimeout(() => {
        setIsTransitioning(true);
      }, 100); // 100ms delay to make sure the transition happens smoothly
    }
  }, [currentImage, isTransitioning]);

  return (
    <section id="banner" className="home-one">
      <div
        className="slider-container"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Images Wrapper */}
        <div
          className="image-slider"
          style={{
            display: "flex",
            transition: isTransitioning ? "transform 1s ease-in-out" : "none", // Smooth sliding transition
            transform: `translateX(-${currentImage * 100}%)`, // Shift the image container
          }}
          onTransitionEnd={handleTransitionEnd} // Listen for when the transition ends
        >
          {allImages.map((img, index) => (
            <div
              key={index}
              style={{
                minWidth: "100%", // Ensures each image takes the full width
                height: "70vh",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>

        {/* Image Controls */}
        <button
          className="prev-button"
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)", // Center vertically
            zIndex: 10, // Ensure it's on top
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Add some visibility
            color: "#fff", // Make arrow visible
            border: "none",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onClick={prevImage}
        >
          &#10094;
        </button>
        <button
          className="next-button"
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)", // Center vertically
            zIndex: 10,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Add some visibility
            color: "#fff", // Make arrow visible
            border: "none",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onClick={nextImage}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default Hero;
