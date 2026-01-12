import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  speed: number;
  r: number;
  o: number;
};

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const DOT_COUNT = 150;
    const MAX_SPEED = 0.45;
    const ANGLE_DRIFT = 0.015;
    const NOISE = 0.02;
    const FRICTION = 0.985;
    const CURSOR_RADIUS = 200;
    const CURSOR_FORCE = 0.08;

    const mouse = { x: -9999, y: -9999 };

    const dots: Dot[] = Array.from({ length: DOT_COUNT }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        angle,
        speed: Math.random() * 0.25 + 0.15,
        vx: Math.cos(angle),
        vy: Math.sin(angle),
        r: Math.random() * 1.5 + 0.7,
        o: Math.random() * 0.6 + 0.35,
      };
    });

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      const bg = ctx.createRadialGradient(w / 2, 0, 0, w / 2, h, h);
      bg.addColorStop(0, "#0f2a44");
      bg.addColorStop(0.6, "#0a192f");
      bg.addColorStop(1, "#020c1b");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      dots.forEach(d => {
        d.angle += (Math.random() - 0.5) * ANGLE_DRIFT;
        const targetVx = Math.cos(d.angle) * d.speed;
        const targetVy = Math.sin(d.angle) * d.speed;

        d.vx += (targetVx - d.vx) * 0.05;
        d.vy += (targetVy - d.vy) * 0.05;

        d.vx += (Math.random() - 0.5) * NOISE;
        d.vy += (Math.random() - 0.5) * NOISE;

        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CURSOR_RADIUS) {
          const force = (1 - dist / CURSOR_RADIUS) * CURSOR_FORCE;
          d.vx += (dx / dist) * force;
          d.vy += (dy / dist) * force;
        }
        d.vx *= FRICTION;
        d.vy *= FRICTION;

        d.vx = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, d.vx));
        d.vy = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, d.vy));

        d.x += d.vx;
        d.y += d.vy;
        if (d.x > w + 50) d.x = -50;
        if (d.x < -50) d.x = w + 50;
        if (d.y > h + 50) d.y = -50;
        if (d.y < -50) d.y = h + 50;
        
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.shadowBlur = 16;
        ctx.shadowColor = "rgba(100,255,200,0.9)";
        ctx.fillStyle = `rgba(100,255,200,${d.o})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default Background;
