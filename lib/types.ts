type IconProps = React.HTMLAttributes<SVGElement>;

type useStates = {
  isScrolled: boolean;
  setIsScrolled: (isScrolled: boolean) => void;
};

type Article = {
  src: string;
  alt: string;
  href: string;
  date: string;
  category: string;
  title: string;
};

export type { IconProps, useStates, Article };
