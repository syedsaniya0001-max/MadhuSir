import React, { useEffect, useRef } from 'react';

interface ParticleCanvasProps {
  theme?: 'emerald' | 'golden' | 'midnight';
}

export const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ theme = 'emerald' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle color palettes depending on theme
    const getColors = () => {
      switch (theme) {
        case 'golden':
          return ['rgba(245, 158, 11, ', 'rgba(252, 211, 77, ', 'rgba(251, 113, 133, '];
        case 'midnight':
          return ['rgba(167, 139, 250, ', 'rgba(252, 211, 77, ', 'rgba(129, 140, 248, '];
        case 'emerald':
        default:
          return ['rgba(245, 158, 11, ', 'rgba(16, 185, 129, ', 'rgba(52, 211, 153, '];
      }
    };

    const particleCount = Math.min(38, Math.floor(width / 35));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.8,
      speedY: Math.random() * 0.4 + 0.15,
      speedX: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      colorPrefix: getColors()[Math.floor(Math.random() * getColors().length)]
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.opacity += Math.sin(Date.now() * p.pulseSpeed) * 0.008;

        if (p.opacity < 0.1) p.opacity = 0.15;
        if (p.opacity > 0.7) p.opacity = 0.65;

        // Wrap around
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${p.opacity})`;
        ctx.shadowBlur = p.radius * 6;
        ctx.shadowColor = `${p.colorPrefix}0.8)`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-1000"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
