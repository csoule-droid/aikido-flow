import { Helmet } from "react-helmet-async";

interface HreflangLink {
  hreflang: string;
  href: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  schema?: object;
  /** Override default hreflang links for internationalized pages */
  alternateLanguages?: HreflangLink[];
}

const BASE_URL = "https://aikidoconnect.fr";
const DEFAULT_OG_IMAGE = "https://aikidoconnect.fr/og-image.jpg";

// Default hreflang configuration for French site with x-default
const getDefaultHreflangLinks = (canonicalUrl?: string): HreflangLink[] => {
  const path = canonicalUrl || "/";
  return [
    { hreflang: "fr-FR", href: `${BASE_URL}${path}` },
    { hreflang: "fr", href: `${BASE_URL}${path}` },
    { hreflang: "x-default", href: `${BASE_URL}${path}` },
  ];
};

export function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  articlePublishedTime,
  articleModifiedTime,
  schema,
  alternateLanguages,
}: SEOProps) {
  const fullTitle = title.includes("AikidoConnect") 
    ? title 
    : `${title} | AikidoConnect`;
  
  const fullCanonicalUrl = canonicalUrl 
    ? `${BASE_URL}${canonicalUrl}` 
    : undefined;

  // Use provided alternate languages or generate defaults
  const hreflangLinks = alternateLanguages || getDefaultHreflangLinks(canonicalUrl);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
      
      {/* Language Meta */}
      <html lang="fr" />
      <meta httpEquiv="content-language" content="fr-FR" />
      
      {/* Hreflang Links for International SEO */}
      {hreflangLinks.map((link) => (
        <link 
          key={link.hreflang}
          rel="alternate" 
          hrefLang={link.hreflang} 
          href={link.href} 
        />
      ))}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="AikidoConnect" />
      {fullCanonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}
      
      {/* Article specific */}
      {ogType === "article" && articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {ogType === "article" && articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

// Helper to create hreflang links for future internationalization
export const createHreflangLinks = (
  path: string,
  languages: { code: string; region?: string }[]
): HreflangLink[] => {
  const links: HreflangLink[] = languages.map((lang) => ({
    hreflang: lang.region ? `${lang.code}-${lang.region}` : lang.code,
    href: `${BASE_URL}/${lang.code}${path}`,
  }));
  
  // Add x-default pointing to French version
  links.push({ hreflang: "x-default", href: `${BASE_URL}${path}` });
  
  return links;
};

// Pre-built schemas for common use cases
export const schemas = {
  organization: {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": "AikidoConnect",
    "description": "Guide pédagogique national pour découvrir et apprendre l'aïkido en France",
    "url": "https://aikidoconnect.fr",
    "sport": "Aïkido",
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "audience": {
      "@type": "PeopleAudience",
      "suggestedGender": "female",
      "suggestedMinAge": 18
    }
  },
  
  createArticle: (options: {
    headline: string;
    description: string;
    url: string;
    datePublished?: string;
    dateModified?: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": options.headline,
    "description": options.description,
    "url": `https://aikidoconnect.fr${options.url}`,
    "publisher": {
      "@type": "Organization",
      "name": "AikidoConnect",
      "url": "https://aikidoconnect.fr"
    },
    "datePublished": options.datePublished || "2024-01-01",
    "dateModified": options.dateModified || new Date().toISOString().split('T')[0],
    "inLanguage": "fr-FR"
  }),
  
  createFAQPage: (faqs: { question: string; answer: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }),
  
  createSportsActivityLocation: (options: {
    name: string;
    description: string;
    sport: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": options.name,
    "description": options.description,
    "sport": options.sport,
    "areaServed": {
      "@type": "Country",
      "name": "France"
    }
  })
};
