import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

const MouseTrailingEffect = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const circlesRef = useRef<HTMLDivElement[]>([]);
  const numCircles = 20;
  const circleDistance = 30;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useLayoutEffect(() => {
    const circles = circlesRef.current;

    circles.forEach((circle, index) => {
      const angle = (2 * Math.PI * index) / numCircles;
      const x = coords.x + circleDistance * Math.cos(angle);
      const y = coords.y + circleDistance * Math.sin(angle);

      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";
      circle.style.transform = `scale(${(numCircles - index) / numCircles})`;

      circle.setAttribute("data-x", x.toString());
      circle.setAttribute("data-y", y.toString());
    });

    const animateCircles = () => {
      circles.forEach((circle, index) => {
        const prevCircle = circles[index + 1] || circles[0];
        const x = parseFloat(circle.getAttribute("data-x") || "0");
        const y = parseFloat(circle.getAttribute("data-y") || "0");
        const newX =
          x + (parseFloat(prevCircle.getAttribute("data-x") || "0") - x) * 0.1;
        const newY =
          y + (parseFloat(prevCircle.getAttribute("data-y") || "0") - y) * 0.1;

        circle.style.left = newX - 12 + "px";
        circle.style.top = newY - 12 + "px";
        circle.setAttribute("data-x", newX.toString());
        circle.setAttribute("data-y", newY.toString());
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();
  }, [coords]);

  return (
    <>
      {Array.from({ length: numCircles }).map((_, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => el && (circlesRef.current[index] = el)}
        ></div>
      ))}
    </>
  );
};

export default MouseTrailingEffect;
