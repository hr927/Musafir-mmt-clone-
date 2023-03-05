import React from "react";
import AnimatedText from "react-animated-text-content";

const Animation = ({ content, animationType, tag }) => {
  return (
    <AnimatedText
      type="words" // animate words or chars
      animation={{
        x: "200px",
        y: "-20px",
        scale: 1.1,
        ease: "ease-in-out",
      }}
      animationType={animationType}
      interval={0.06}
      duration={0.8}
      tag={tag}
      className="animated-paragraph"
      includeWhiteSpaces
      threshold={0.1}
      rootMargin="20%"
      backgroundColor="black"
      style={{
        fontSize: "14px", // Default font size for large screens
        paadingBottom: "20px",
        "@media (max-width: 768px)": {
          // For tablets
          fontSize: "20px",
          animation: {
            x: "150px",
            y: "-15px",
            scale: 1,
            ease: "ease-in-out",
          },
        },
        "@media (max-width: 480px)": {
          // For mobiles
          fontSize: "10px",
          animation: {
            x: "100px",
            y: "-10px",
            scale: 0.9,
            ease: "ease-in-out",
          },
        },
      }}
    >
      {content}
    </AnimatedText>
  );
};

export default Animation;
