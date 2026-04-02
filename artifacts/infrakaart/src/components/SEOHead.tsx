import { Helmet } from "react-helmet-async";

interface SchemaItem {
  "@type": string;
  [key: string]: unknown;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  keywords?: string;
  schemas?: object | object[];
  schema?: object;
  noindex?: boolean;
  geoRegion?: string;
  geoPlacename?: string;
  geoPosition?: string;
  articlePublished?: string;
  articleModified?: string;
}

const SITE_NAME = "Infrakaart";
const SITE_URL = "https://infrakaart.com";
const DEFAULT_OG_IMAGE = "https://infrakaart.com/og-image.jpg";
const TWITTER_HANDLE = "@infrakaart";
const LOCALE = "en_IN";

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  keywords,
  schemas,
  schema,
  noindex = false,
  geoRegion,
  geoPlacename,
  geoPosition,
  articlePublished,
  articleModified,
}: SEOHeadProps) {
  const fullTitle = title.includes("Infrakaart") ? title : `${title} | Infrakaart`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  const allSchemas: object[] = [];
  if (schema) allSchemas.push(schema);
  if (schemas) {
    if (Array.isArray(schemas)) allSchemas.push(...schemas);
    else allSchemas.push(schemas);
  }

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": allSchemas,
  };

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <link rel="canonical" href={canonicalUrl} />

      <meta name="author" content="Infrakaart Technologies Pvt. Ltd." />
      <meta name="publisher" content="Infrakaart" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="English" />
      <meta name="rating" content="general" />

      {geoRegion && <meta name="geo.region" content={geoRegion} />}
      {geoPlacename && <meta name="geo.placename" content={geoPlacename} />}
      {geoPosition && <meta name="geo.position" content={geoPosition} />}
      {geoPosition && <meta name="ICBM" content={geoPosition} />}

      <link rel="alternate" hrefLang="en-in" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={LOCALE} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} - ${title}`} />

      {articlePublished && <meta property="article:published_time" content={articlePublished} />}
      {articleModified && <meta property="article:modified_time" content={articleModified} />}
      {ogType === "article" && <meta property="article:publisher" content={`${SITE_URL}`} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} - ${title}`} />

      <meta name="theme-color" content="#EAB308" />
      <meta name="application-name" content={SITE_NAME} />
      <meta name="apple-mobile-web-app-title" content={SITE_NAME} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />

      {allSchemas.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(schemaGraph)}
        </script>
      )}
    </Helmet>
  );
}
