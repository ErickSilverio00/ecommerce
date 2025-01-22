import React, { useState } from "react";
import {
  ContainerImageMagnifier,
  ContainerImgMagnifier,
  ContainerMagnifierImg,
} from "./styles";

export default function ImageMagnifier({ imgUrl, imgAlt }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseHover = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });

    setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
  };

  return (
    <ContainerImageMagnifier
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseHover}
    >
      <ContainerImgMagnifier src={imgUrl} alt={imgAlt} />

      {showMagnifier && (
        <div
          style={{
            position: "absolute",
            left: `${cursorPosition.x - 100}px`,
            top: `${cursorPosition.y - 100}px`,
            pointerEvents: "none",
            zIndex: 9999999999999,
          }}
        >
          <ContainerMagnifierImg
            style={{
              backgroundImage: `url(${imgUrl})`,
              backgroundPosition: `${position.x}% ${position.y}%`,
            }}
          />
        </div>
      )}
    </ContainerImageMagnifier>
  );
}
