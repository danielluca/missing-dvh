export type DropdownLink = {
  linkLabel: string;
  linkType: "dropdown";
  dropdownSections: {
    sectionHeadline: string;
    sectionLinks: {
      linkLabel: string;
      linkDescription?: string;
      linkHref: string;
      isExternalLink?: boolean;
      linkIcon?: {
        src: string;
        alt: string;
      };
    }[];
  }[];
};
