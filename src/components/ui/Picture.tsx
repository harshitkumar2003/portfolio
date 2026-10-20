import manifest from '../../data/image-manifest.json';

type Entry = { w: number; h: number; widths: number[] };
const m = manifest as Record<string, Entry>;

interface Props {
  name: string;
  alt: string;
  sizes: string;
  eager?: boolean;
  className?: string;
}

/** AVIF + WebP responsive picture with intrinsic dimensions (prevents layout shift). */
export function Picture({ name, alt, sizes, eager = false, className }: Props) {
  const e = m[name];
  if (!e) throw new Error(`Unknown image "${name}" — run npm run images`);
  const set = (ext: string) => e.widths.map((w) => `/images/${name}-${w}.${ext} ${w}w`).join(', ');
  const largest = e.widths[e.widths.length - 1];
  return (
    <picture>
      <source type="image/avif" srcSet={set('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={set('webp')} sizes={sizes} />
      <img
        className={className}
        src={`/images/${name}-${largest}.webp`}
        alt={alt}
        width={e.w}
        height={e.h}
        sizes={sizes}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  );
}
