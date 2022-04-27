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
