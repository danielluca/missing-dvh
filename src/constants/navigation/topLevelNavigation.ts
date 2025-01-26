import type { DropdownLink } from "src/types/DropdownLink";
import type { SingleLink } from "src/types/SingleLink";

export type NavItems = SingleLink | DropdownLink;

export const topLevelNavigation: NavItems[] = [
  {
    linkLabel: "Service",
    linkType: "dropdown",
    dropdownSections: [
      {
        sectionHeadline: "Unsere Services",
        sectionLinks: [
          {
            linkLabel: "Mandantenstammdaten erfassen",
            linkDescription: "Digitaler Mandantenfragebogen für Deine Kanzlei",
            linkHref: "#",
          },
          {
            linkLabel: "Personalstammdaten erfassen",
            linkDescription: "Digitaler Personalfragebogen für Deine Mandanten",
            linkHref: "#",
          },
          {
            linkLabel: "Bewegungsdaten erfassen",
            linkDescription: "Manage Bewegungsdaten deiner Mandanten",
            linkHref: "#",
          },
        ],
      },
      {
        sectionHeadline: "Mehr",
        sectionLinks: [
          {
            linkLabel: "Zertifizierte Partner",
            linkDescription:
              "Unsere Partner helfen Dir bei der implementierung",
            linkHref: "#",
          },
          {
            linkLabel: "Hilfe Center",
            linkDescription: "Finde Antworten auf Deine Fragen",
            linkHref: "#",
          },
          {
            linkLabel: "Produkt-Updates",
            linkDescription: "Überblick zu Updates und neue Funktionen",
            linkHref: "#",
          },
        ],
      },
    ],
  },
  {
    linkLabel: "Lösungen",
    linkType: "dropdown",
    dropdownSections: [
      {
        sectionHeadline: "Nach Kanzleiphase",
        sectionLinks: [
          {
            linkLabel: "Für Startup Kanzleien",
            linkDescription:
              "Neu gegründete Kanzlei mit einem wachsendem Mandantenstamm",
            linkHref: "#",
          },
        ],
      },
    ],
  },
  {
    linkLabel: "Preise",
    linkType: "dropdown",
    dropdownSections: [
      {
        sectionHeadline: "Preise",
        sectionLinks: [
          {
            linkLabel: "Mandantenstammdaten erfassen",
            linkDescription: "Digitaler Mandantenfragebogen für Deine Kanzlei",
            linkHref: "#",
          },
          {
            linkLabel: "Personalstammdaten erfassen",
            linkDescription: "Digitaler Personalfragebogen für Deine Mandanten",
            linkHref: "#",
          },
        ],
      },
    ],
  },
  {
    linkType: "single",
    linkLabel: "Blog",
    linkHref: "#",
  },
];
