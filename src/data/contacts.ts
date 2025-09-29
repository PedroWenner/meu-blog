export interface ContactItem {
  id: "email" | "linkedin" | "github" | "tiktok";
  href: string;
  handle?: string;
  color?: string;
  i18nKey: string;
}

export const contacts: ContactItem[] = [
  {
    id: "email",
    href: "mailto:pedro_wenner@outlook.com",
    handle: "pedro_wenner@outlook.com",
    color: "#e74c3c",
    i18nKey: "contact.items.email",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/pedro-wenner-54bb20350/",
    handle: "pedro-wenner-54bb20350",
    color: "#0a66c2",
    i18nKey: "contact.items.linkedin",
  },
  {
    id: "github",
    href: "https://github.com/pedrowenner/",
    handle: "PedroWenner",
    color: "#333333",
    i18nKey: "contact.items.github",
  },
  // {
  //   id: "tiktok",
  //   href: "https://www.tiktok.com/@kauemoraes.dev",
  //   handle: "@kauemoraes.dev",
  //   color: "#000000",
  //   i18nKey: "contact.items.tiktok",
  // },
];
