export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export interface AlohaButton {
  id: string;
  href: string;
  color: string;
  bgColor: string;
  height: string;
  marginBottom: string;
  borderColor: string;
  hoverBgColor: string;
  hoverColor: string;
  hoverBorderColor: string;
  text: string;
}

export interface Article {
  imageUrl: string;
  imageAlt: string;
  duration: string;
  mode: string;
  title: string;
  author: string;
  reviewCount: number;
  rating: number;
}
