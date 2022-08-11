import Head from "next/head";

interface SEOProps {
  title: string;
  description?: string;
  previewImageURL?: string;
}

export function SEO({
  title,
  description = "Slogan do projeto",
  previewImageURL = "/images/logo.png",
}: SEOProps) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:description" content={description} key="ogdesc" />
      {previewImageURL && (
        <meta property="og:image" content={previewImageURL} key="ogimage" />
      )}
      <meta property="og:site_name" content="Grupo C" key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />

      <title>{title}</title>
    </Head>
  );
}
