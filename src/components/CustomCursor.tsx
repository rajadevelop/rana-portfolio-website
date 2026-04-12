import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", moveMouse);

    const animate = () => {
      // Smooth follow (lerp)
      circle.current.x += (mouse.current.x - circle.current.x) * 0.1;
      circle.current.y += (mouse.current.y - circle.current.y) * 0.1;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${circle.current.x}px, ${circle.current.y}px)`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <>
      <div ref={circleRef} className="cursor-circle" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}