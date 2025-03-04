const buildConfig = () => {

  const name = process.env.NEXT_PUBLIC_DISPLAY_NAME || "Gabby Lulu";
  const copyright = process.env.NEXT_PUBLIC_COPYRIGHT || "Copyright";
  const defaultTitle =
    process.env.NEXT_DEFAULT_METADATA_DEFAULT_TITLE || "Gabby Lulu";
  const defaultDescription = process.env.NEXT_PUBLIC_DESCRIPTION || "Gabby Lulu's personal website";

  return {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    name: {
      name,
      copyright,
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s - ${defaultTitle}`,
        },
        description: defaultDescription,
      },
    },
    ogImageSecret:
      process.env.OG_IMAGE_SECRET ||
      "secret_used_for_signing_and_verifying_the_og_image_url",

  };
};

export const config = buildConfig();
