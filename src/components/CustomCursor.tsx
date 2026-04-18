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

    const handleMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        document.body.classList.add("cursor-hidden");
      }
    };

    const handleMouseOver = () => {
      document.body.classList.remove("cursor-hidden");
    };

    // 🔥 Detect hover on clickable elements
    const handlePointerHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest("a, button, [role='button'], input, textarea")) {
        document.body.classList.add("cursor-hover");
      } else {
        document.body.classList.remove("cursor-hover");
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mousemove", handlePointerHover); // 👈 important
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseover", handleMouseOver);

    const animate = () => {
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
      window.removeEventListener("mousemove", handlePointerHover);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={circleRef} className="cursor-circle" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}