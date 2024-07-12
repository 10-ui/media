type IconProps = React.HTMLAttributes<SVGElement>;

type useStates = {
  isScrolled: boolean;
  setIsScrolled: (isScrolled: boolean) => void;
};

export type { IconProps, useStates };
