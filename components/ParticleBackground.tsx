'use client';

import { useEffect, useRef } from 'react';

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: { x: number; y: number; z: number; size: number; speed: number }[] = [];
    const particleCount = 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 + 0.1, // Depth for parallax
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.2 + 0.05,
      });
    }

    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Base color for particles: Amethyst #534AB7
      ctx.fillStyle = 'rgba(83, 74, 183, 0.6)';

      particles.forEach((p) => {
        // Move particles slowly upwards
        p.y -= p.speed;
        
        // Parallax effect based on scroll and depth (z)
        const parallaxOffset = scrollY * (p.z * 0.5);
        
        let drawY = p.y - parallaxOffset;

        // Wrap around
        if (drawY < -10) {
          p.y = height + 10 + parallaxOffset;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        // Size varies slightly by depth
        ctx.arc(p.x, drawY, p.size * p.z, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
