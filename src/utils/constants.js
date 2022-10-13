const apyDayOptions = [7, 30, 60, 90, 365];
const DEFAULT_SELECTED_APY = 30;

export const isDevelopment = process.env.NODE_ENV === "development";
export const isProduction = process.env.NODE_ENV === "production";

const mappedLinks = {
  links: [
    {
      isButton: false,
      label: "Products",
      links: [
        {
          href: "https://ousd.com",
          icon: {
            alternativeText: "origin-dollar.svg",
            caption: "origin-dollar.svg",
            url: "https://cmsmediaproduction.s3.amazonaws.com/origin_dollar_a31b75ef3e.svg",
          },
          label: "",
        },
        {
          href: "https://story.xyz",
          icon: {
            alternativeText: "origin-story.svg",
            caption: "origin-story.svg",
            url: "https://cmsmediaproduction.s3.amazonaws.com/origin_story_8c05dcae2f.svg",
          },
          label: "",
        },
      ],
      order: 1,
    },
    {
      href: "/company",
      isButton: false,
      label: "Company",
      links: [],
      order: 2,
    },
    {
      href: "/community",
      isButton: false,
      label: "Community",
      links: [],
      order: 3,
    },
  ],
};

module.exports = {
  apyDayOptions,
  DEFAULT_SELECTED_APY,
  mappedLinks,
};
