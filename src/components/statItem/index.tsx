// src/components/statItem.tsx
import React, { useEffect, useRef, useState } from "react";

interface StatItemProps {
  number: string;
  label: string;
  delay?: number;
}

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      setCount(Math.floor(progressRatio * target));

      if (progress < duration) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [target, duration, start]);

  return count;
}

const DigitSegment: React.FC<{ digits: string; start: boolean; duration?: number }> = ({ digits, start, duration = 1200 }) => {
  const numericTarget = parseInt(digits.replace(/,/g, ""), 10) || 0;
  const count = useCountUp(numericTarget, duration, start);
  return <span>{count.toLocaleString()}</span>;
};

const StatItem: React.FC<StatItemProps> = ({ number, label, delay = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);


  const parts = number.split(/(\d[\d,]*)/);

  return (
    <div ref={ref} className="stat-item">
      <div className="stat-number">
        {parts.map((part, i) => {
          
          if (/^\d[\d,]*$/.test(part)) {
            return <DigitSegment key={i} digits={part} start={visible} />;
          }
          
          return <span key={i}>{part}</span>;
        })}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default StatItem;
