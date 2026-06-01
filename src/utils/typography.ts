import { cva, type VariantProps } from 'class-variance-authority';

export const typeStyle = cva('font-sans', {
  variants: {
    variant: {
      h1: 'text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl',
      h2: 'text-3xl leading-tight font-bold tracking-tight md:text-4xl lg:text-5xl',
      h3: 'text-2xl leading-tight font-bold tracking-tight md:text-3xl lg:text-4xl',
      h4: 'text-xl leading-tight font-bold tracking-tight md:text-2xl lg:text-3xl',
      h5: 'text-lg leading-tight font-bold tracking-wider uppercase md:text-xl',
      h6: 'text-base leading-tight font-bold tracking-tight md:text-lg',
      heroTitle:
        'text-5xl leading-none font-extrabold tracking-normal md:text-6xl lg:text-7xl',
      heroSummary: 'text-base leading-relaxed font-normal md:text-lg',
      featureTitle: 'text-xl leading-tight font-bold tracking-normal',
      overline: 'text-xs leading-tight font-bold tracking-normal uppercase',
      cardMeta:
        'text-xs leading-relaxed font-semibold tracking-widest uppercase lg:text-sm',
      cardSummary: 'text-sm leading-relaxed font-normal lg:text-base',
      action: 'text-base leading-none font-bold tracking-normal',
      pill: 'text-xs leading-tight font-bold tracking-normal',
      meta: 'text-sm leading-none font-normal tracking-normal',
      metaEmphasis: 'font-semibold tracking-normal',
      tocLink: 'text-sm leading-snug font-semibold tracking-normal',
      caption: 'text-sm leading-snug font-normal tracking-normal',
      figureCaption:
        'text-sm leading-relaxed font-normal tracking-normal italic lg:text-base',
      footer: 'text-xs leading-relaxed font-normal tracking-normal',
      footerLink: 'text-xs leading-relaxed font-medium tracking-normal',
      siteAction:
        'text-sm leading-none font-semibold tracking-normal max-sm:text-xs',
      siteLogoMark: 'text-4xl md:text-5xl',
      homeLogoMark: 'text-7xl md:text-6xl lg:text-7xl',
      homeWordmark: 'text-5xl md:text-4xl lg:text-5xl',
      footerLogoMark: 'text-7xl md:text-8xl',
      textXs: 'text-xs leading-relaxed font-normal lg:text-sm',
      textSm: 'text-sm leading-relaxed font-normal lg:text-base',
      textMd: 'text-base leading-relaxed font-normal lg:text-lg',
      textLg: 'text-lg leading-relaxed font-normal lg:text-xl xl:text-2xl',
    },
    tone: {
      default: '',
      muted: 'text-gray-400',
    },
  },
  defaultVariants: {
    tone: 'default',
  },
});

export type TypeStyleProps = VariantProps<typeof typeStyle>;
