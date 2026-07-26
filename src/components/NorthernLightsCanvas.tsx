import React, { useEffect, useRef } from 'react';

interface NorthernLightsCanvasProps {
  interactive?: boolean;
}

export const NorthernLightsCanvas: React.FC<NorthernLightsCanvasProps> = ({ interactive = true }) => {
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

    // Stars
    const stars: { x: number; y: number; size: number; alpha: number; speed: number }[] = [];
    for (let i = 0; i < 80; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.7,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random(),
        speed: Math.random() * 0.015 + 0.005,
      });
    }

    // Floating heart & rose petal particles
    const petals: { x: number; y: number; size: number; speedY: number; speedX: number; rot: number; rotSpeed: number; opacity: number }[] = [];
    for (let i = 0; i < 25; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * -0.6 - 0.2,
        speedX: Math.sin(Math.random() * Math.PI) * 0.3,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.6 + 0.3,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.008;

      // Dark velvet gradient background (Deep Maroon to Violet)
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#160211'); // Deep dark violet-black
      bgGrad.addColorStop(0.4, '#2B041E'); // Rich burgundy-violet
      bgGrad.addColorStop(0.8, '#4A0826'); // Velvet maroon
      bgGrad.addColorStop(1, '#1A000C'); // Deep rose black

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw Northern Lights Aurora Waves
      // Wave 1: Maroon Crimson Wave
      drawAuroraWave(ctx, width, height, time, {
        color1: 'rgba(180, 20, 60, 0.25)',
        color2: 'rgba(128, 0, 32, 0.05)',
        amplitude: 60,
        frequency: 0.003,
        yOffset: height * 0.25,
      });

      // Wave 2: Violet Rose Wave
      drawAuroraWave(ctx, width, height, time + 2, {
        color1: 'rgba(138, 43, 226, 0.22)',
        color2: 'rgba(74, 14, 78, 0.02)',
        amplitude: 80,
        frequency: 0.002,
        yOffset: height * 0.32,
      });

      // Wave 3: Golden Crimson Shimmer Wave
      drawAuroraWave(ctx, width, height, time + 4, {
        color1: 'rgba(230, 160, 70, 0.15)',
        color2: 'rgba(190, 30, 70, 0.01)',
        amplitude: 50,
        frequency: 0.004,
        yOffset: height * 0.2,
      });

      // Render Stars
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0.1) {
          star.speed = -star.speed;
        }
        ctx.fillStyle = `rgba(255, 240, 220, ${Math.max(0, Math.min(1, star.alpha))})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render Floating Rose Petals / Hearts
      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(time + p.y * 0.01) * 0.4;
        p.rot += p.rotSpeed;

        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = `rgba(220, 38, 78, ${p.opacity})`;

        // Draw heart shape
        ctx.beginPath();
        const topCurveHeight = p.size * 0.3;
        ctx.moveTo(0, topCurveHeight);
        ctx.bezierCurveTo(0, 0, -p.size / 2, 0, -p.size / 2, topCurveHeight);
        ctx.bezierCurveTo(-p.size / 2, (p.size + topCurveHeight) / 2, 0, p.size, 0, p.size);
        ctx.bezierCurveTo(0, p.size, p.size / 2, (p.size + topCurveHeight) / 2, p.size / 2, topCurveHeight);
        ctx.bezierCurveTo(p.size / 2, 0, 0, 0, 0, topCurveHeight);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

function drawAuroraWave(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  time: number,
  config: { color1: string; color2: string; amplitude: number; frequency: number; yOffset: number }
) {
  ctx.save();
  const grad = ctx.createLinearGradient(0, config.yOffset - config.amplitude * 2, 0, config.yOffset + config.amplitude * 3);
  grad.addColorStop(0, config.color1);
  grad.addColorStop(1, config.color2);

  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.moveTo(0, height);

  for (let x = 0; x <= width; x += 10) {
    const y =
      config.yOffset +
      Math.sin(x * config.frequency + time) * config.amplitude +
      Math.cos(x * config.frequency * 1.5 + time * 0.7) * (config.amplitude * 0.5);
    ctx.lineTo(x, y);
  }

  ctx.lineTo(width, height);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
