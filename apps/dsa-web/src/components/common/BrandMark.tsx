import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type BrandMarkProps = {
  /** 'icon' = square mark only; 'full' = icon + wordmark */
  variant?: 'icon' | 'full';
  /** pixel size of the square mark (height); width auto-scales for 'full' */
  size?: number;
  className?: string;
  /** force a theme instead of reading from next-themes */
  forceTheme?: 'light' | 'dark';
};

/**
 * 如意金股 (RuyiDailyStockAnalysis) 品牌标识组件。
 * 浅紫主题：亮色用 logo-light.svg，暗色用 logo-dark.svg，均保证清晰可读。
 */
export function BrandMark({
  variant = 'icon',
  size = 40,
  className,
  forceTheme,
}: BrandMarkProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark =
    forceTheme === 'dark' ||
    (forceTheme !== 'light' && mounted && resolvedTheme !== 'light');
  const src = isDark ? '/brand/logo-dark.svg' : '/brand/logo-light.svg';

  if (variant === 'full') {
    return (
      <img
        src={src}
        alt="如意金股 RuyiDailyStockAnalysis"
        height={size}
        className={className}
        draggable={false}
      />
    );
  }

  return (
    <img
      src="/brand/icon.svg"
      alt="如意金股"
      width={size}
      height={size}
      className={className}
      draggable={false}
    />
  );
}

export default BrandMark;
