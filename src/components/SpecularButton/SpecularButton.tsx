import React, { useEffect, useRef, ElementType, ReactNode, CSSProperties } from 'react';
import './SpecularButton.css';

const PAD = 24;
const TAU = Math.PI * 2;
const WHITE: [number, number, number] = [255, 255, 255];

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const wrap = (value: number) => value - Math.floor(value);

const loopPosition = (x: number, y: number, halfX: number, halfY: number, r: number) => {
  const innerX = halfX - r;
  const innerY = halfY - r;
  const arc = (Math.PI / 2) * r;
  const quarter = innerX + innerY + arc;
  const ax = Math.abs(x);
  const ay = Math.abs(y);
  const qx = ax - innerX;
  const qy = ay - innerY;
  let s: number;
  if (qx > 0 && qy > 0) s = innerY + Math.atan2(qy, qx) * r;
  else if (qx > qy) s = Math.min(ay, innerY);
  else s = innerY + arc + innerX - Math.min(ax, innerX);
  if (x < 0) s = y >= 0 ? 2 * quarter - s : 2 * quarter + s;
  else if (y < 0) s = 4 * quarter - s;
  return wrap(s / Math.max(4 * quarter, 0.0001));
};

const rimPoint = (position: number, halfX: number, halfY: number, r: number): [number, number] => {
  const innerX = halfX - r;
  const innerY = halfY - r;
  const arc = (Math.PI / 2) * r;
  const quarter = innerX + innerY + arc;
  let s = wrap(position) * 4 * quarter;
  let signX = 1;
  let signY = 1;
  if (s > 3 * quarter) {
    s = 4 * quarter - s;
    signY = -1;
  } else if (s > 2 * quarter) {
    s -= 2 * quarter;
    signX = -1;
    signY = -1;
  } else if (s > quarter) {
    s = 2 * quarter - s;
    signX = -1;
  }
  let x = innerX - (s - innerY - arc);
  let y = halfY;
  if (s <= innerY) {
    x = halfX;
    y = s;
  } else if (s <= innerY + arc) {
    const angle = (s - innerY) / Math.max(r, 0.0001);
    x = innerX + Math.cos(angle) * r;
    y = innerY + Math.sin(angle) * r;
  }
  return [x * signX, y * signY];
};

let probeCtx: CanvasRenderingContext2D | null = null;
const toRgb = (value: string): [number, number, number] => {
  if (typeof document === 'undefined') return WHITE;
  if (value.startsWith('#')) {
    const hex = parseInt(value.slice(1, 7), 16);
    return [(hex >> 16) & 255, (hex >> 8) & 255, hex & 255];
  }
  probeCtx = probeCtx ?? document.createElement('canvas').getContext('2d');
  if (!probeCtx) return WHITE;
  probeCtx.fillStyle = '#000000';
  probeCtx.fillStyle = value;
  const str = String(probeCtx.fillStyle);
  if (str.startsWith('#')) {
    const hex = parseInt(str.slice(1, 7), 16);
    return [(hex >> 16) & 255, (hex >> 8) & 255, hex & 255];
  }
  const parts = str.match(/[\d.]+/g)?.map(Number) ?? WHITE;
  return [(parts[0] ?? 255), (parts[1] ?? 255), (parts[2] ?? 255)];
};

const rgba = (rgb: [number, number, number], alpha: number) =>
  `rgba(${Math.round(rgb[0])}, ${Math.round(rgb[1])}, ${Math.round(rgb[2])}, ${clamp(alpha, 0, 1).toFixed(3)})`;

export interface SpecularButtonProps {
  as?: ElementType;
  children?: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  radius?: number;
  tint?: string;
  tintOpacity?: number;
  blur?: number;
  textColor?: string;
  lineColor?: string;
  baseColor?: string;
  intensity?: number;
  idleIntensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  glow?: number;
  speed?: number;
  followMouse?: boolean;
  proximity?: number;
  autoAnimate?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  style?: CSSProperties;
  href?: string;
  target?: string;
  rel?: string;
  title?: string;
  [key: string]: any;
}

export const SpecularButton: React.FC<SpecularButtonProps> = ({
  as,
  children = 'Get Started',
  size = 'md',
  radius = 10,
  tint = '#38BDF8',
  tintOpacity = 0.05,
  blur = 8,
  textColor = '#f5f5f5',
  lineColor = '#38BDF8',
  baseColor = '#334155',
  intensity = 1,
  idleIntensity = 0.35,
  shineSize = 12,
  shineFade = 34,
  thickness = 1.2,
  glow = 0.8,
  speed = 0.35,
  followMouse = true,
  proximity = 220,
  autoAnimate = false,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  style,
  ...rest
}) => {
  const Component: ElementType = as ?? (rest.href ? 'a' : 'button');
  const buttonRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wakeRef = useRef<(() => void) | null>(null);

  const settings = {
    radius: Math.max(0, radius),
    lineColor: String(lineColor),
    baseColor: String(baseColor),
    intensity: Math.max(0, intensity),
    idleIntensity: clamp(idleIntensity, 0, 1),
    shineSize: Math.max(0, shineSize),
    shineFade: Math.max(0, shineFade),
    thickness: Math.max(0.8, thickness),
    glow: Math.max(0, glow),
    speed,
    followMouse,
    proximity: Math.max(1, proximity),
    autoAnimate,
    disabled
  };
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  useEffect(() => {
    const button = buttonRef.current;
    const canvas = canvasRef.current;
    if (!button || !canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const reduce = typeof window !== 'undefined'
      ? window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
      : false;

    const view = { width: 1, height: 1, ratio: 1 };
    const pointer = { x: 0, y: 0, known: false };
    const state = { spot: 0, level: 0, press: 0, ready: false };
    let raf = 0;
    let last = 0;
    let visible = true;
    let lineColorRgb: [number, number, number] = toRgb(settings.lineColor);

    const cornerRadius = (s: typeof settings) => Math.min(s.radius, view.width / 2, view.height / 2);

    const restSpot = (s: typeof settings) => {
      const r = cornerRadius(s);
      const inset = r * (1 - Math.SQRT1_2);
      return loopPosition(inset - view.width / 2, view.height / 2 - inset, view.width / 2, view.height / 2, r);
    };

    const aim = (s: typeof settings) => {
      if (!s.followMouse || s.disabled || !pointer.known) return null;
      const rect = button.getBoundingClientRect();
      const scale = rect.width / view.width || 1;
      const halfX = view.width / 2;
      const halfY = view.height / 2;
      const x = (pointer.x - rect.left - rect.width / 2) / scale;
      const y = (rect.top + rect.height / 2 - pointer.y) / scale;
      const distance = Math.hypot(Math.max(Math.abs(x) - halfX, 0), Math.max(Math.abs(y) - halfY, 0));
      const t = clamp(1 - distance / s.proximity, 0, 1);
      const near = t * t * (3 - 2 * t);
      const nearest = loopPosition(x, y, halfX, halfY, cornerRadius(s));
      if (distance > 0) return { spot: nearest, near };
      const depth = clamp(Math.min(halfX - Math.abs(x), halfY - Math.abs(y)) / (halfY * 0.8), 0, 1);
      const sway = restSpot(s) - (x / halfX) * 0.06 - (y / halfY) * 0.02;
      const offset = sway - nearest - Math.round(sway - nearest);
      return { spot: wrap(nearest + offset * depth * depth * (3 - 2 * depth)), near };
    };

    const draw = (s: typeof settings) => {
      const { width, height, ratio } = view;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (width < 2 || height < 2) return;

      ctx.setTransform(ratio, 0, 0, ratio, PAD * ratio, PAD * ratio);

      const r = cornerRadius(s);
      const halfX = width / 2;
      const halfY = height / 2;
      const [rimX, rimY] = rimPoint(state.spot, halfX, halfY, r);
      const px = halfX + rimX;
      const py = halfY - rimY;

      const currentIntensity = clamp(s.intensity * (state.level + state.press * 0.8), 0, 1.5);
      if (currentIntensity <= 0.01) return;

      // Specular highlight gradient centered at the specular reflection point
      const reach = 16 + s.shineSize * 1.5 + s.glow * 10;
      const grad = ctx.createRadialGradient(px, py, 0, px, py, reach);
      grad.addColorStop(0, rgba(lineColorRgb, 0.95 * currentIntensity));
      grad.addColorStop(0.35, rgba(lineColorRgb, 0.5 * currentIntensity));
      grad.addColorStop(0.7, rgba(lineColorRgb, 0.15 * currentIntensity));
      grad.addColorStop(1, rgba(lineColorRgb, 0));

      // 1. Draw crisp lit edge along the button border
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(0, 0, width, height, r);
      ctx.lineWidth = Math.max(s.thickness * 1.4, 1.4);
      ctx.strokeStyle = grad;
      ctx.stroke();
      ctx.restore();

      // 2. Draw soft specular glare bloom
      if (s.glow > 0 && currentIntensity > 0.08) {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        const bloomReach = 14 + s.glow * 18;
        const bloom = ctx.createRadialGradient(px, py, 0, px, py, bloomReach);
        bloom.addColorStop(0, rgba(lineColorRgb, 0.4 * currentIntensity * s.glow));
        bloom.addColorStop(0.3, rgba(lineColorRgb, 0.18 * currentIntensity * s.glow));
        bloom.addColorStop(0.7, rgba(lineColorRgb, 0.04 * currentIntensity * s.glow));
        bloom.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = bloom;
        ctx.fillRect(px - bloomReach, py - bloomReach, bloomReach * 2, bloomReach * 2);
        ctx.restore();
      }
    };

    const frame = (now: number) => {
      raf = 0;
      if (!visible) return;
      const s = settingsRef.current;
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
      last = now;

      const target = aim(s);
      const spinning = s.autoAnimate && !reduce;
      const steering = !!target && target.near > 0;

      if (!state.ready) {
        state.spot = restSpot(s);
        state.level = s.autoAnimate ? 1 : s.idleIntensity;
        state.ready = true;
      }

      let diff = 0;
      if (spinning && !steering) {
        state.spot = wrap(state.spot + (s.speed / TAU) * dt);
      } else {
        diff = (steering ? target.spot : restSpot(s)) - state.spot;
        diff -= Math.round(diff);
        state.spot = wrap(state.spot + diff * (1 - Math.exp(-dt * 8)));
      }

      const level = s.autoAnimate ? 1 : s.idleIntensity + (1 - s.idleIntensity) * (target ? target.near : 0);
      state.level += (level - state.level) * (1 - Math.exp(-dt * 7));
      state.press *= Math.exp(-dt * 5);

      draw(s);

      const settling = Math.abs(diff) > 0.0005 || Math.abs(level - state.level) > 0.002 || state.press > 0.005;
      if (settling || (spinning && !steering)) {
        raf = requestAnimationFrame(frame);
      } else {
        last = 0;
      }
    };

    const wake = () => {
      if (!raf && visible) raf = requestAnimationFrame(frame);
    };

    const measure = (entry?: ResizeObserverEntry) => {
      const box = entry?.borderBoxSize?.[0];
      view.width = Math.max(1, box ? box.inlineSize : button.offsetWidth);
      view.height = Math.max(1, box ? box.blockSize : button.offsetHeight);
      view.ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round((view.width + PAD * 2) * view.ratio));
      canvas.height = Math.max(1, Math.round((view.height + PAD * 2) * view.ratio));
      lineColorRgb = toRgb(settingsRef.current.lineColor);
      if (state.ready) draw(settingsRef.current);
      wake();
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.known = true;
      wake();
    };

    const onPointerDown = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.known = true;
      if (!settingsRef.current.disabled) state.press = 1;
      wake();
    };

    const onPointerEnd = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') return;
      pointer.known = false;
      wake();
    };

    const onPointerLeave = () => {
      pointer.known = false;
      wake();
    };

    const resizeObserver = new ResizeObserver(entries => measure(entries[entries.length - 1]));
    resizeObserver.observe(button);

    const intersection = new IntersectionObserver(entries => {
      visible = entries.some(entry => entry.isIntersecting);
      if (visible) {
        last = 0;
        wake();
      }
    });
    intersection.observe(button);

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerup', onPointerEnd, { passive: true });
    window.addEventListener('pointercancel', onPointerEnd, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
    button.addEventListener('pointerdown', onPointerDown as any);
    measure();
    wakeRef.current = wake;

    return () => {
      cancelAnimationFrame(raf);
      wakeRef.current = null;
      resizeObserver.disconnect();
      intersection.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerEnd);
      window.removeEventListener('pointercancel', onPointerEnd);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
      button.removeEventListener('pointerdown', onPointerDown as any);
    };
  }, []);

  useEffect(() => {
    wakeRef.current?.();
  });

  return (
    <Component
      ref={buttonRef}
      type={Component === 'button' ? type : undefined}
      disabled={Component === 'button' ? disabled : undefined}
      onClick={onClick}
      className={`specular-button specular-button--${size}${className ? ` ${className}` : ''}`}
      style={{
        '--sb-radius': `${radius}px`,
        '--sb-tint': tint,
        '--sb-tint-opacity': tintOpacity,
        '--sb-blur': `${blur}px`,
        '--sb-text-color': textColor,
        ...style
      } as CSSProperties}
      {...rest}
    >
      <canvas ref={canvasRef} className="specular-button__light" aria-hidden="true" />
      <span className="specular-button__label">{children}</span>
    </Component>
  );
};

export default SpecularButton;
