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

  const handleLinkHover = () => {
    document.body.classList.add("link-hover");
  };

  const handleLinkLeave = () => {
    document.body.classList.remove("link-hover");
  };

  const links = document.querySelectorAll("a, button");

  links.forEach((el) => {
    el.addEventListener("mouseenter", handleLinkHover);
    el.addEventListener("mouseleave", handleLinkLeave);
  });

  window.addEventListener("mousemove", moveMouse);

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
    links.forEach((el) => {
      el.removeEventListener("mouseenter", handleLinkHover);
      el.removeEventListener("mouseleave", handleLinkLeave);
    });
  };
}, []);

  return (
    <>
      <div ref={circleRef} className="cursor-circle" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}