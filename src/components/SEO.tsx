import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  keywords?: string;
}

const SEO = ({
  title = "MyCampaigner - Automated Discount Campaigns for Shopify",
  description = "Create sophisticated discount campaigns that apply automatically at checkout using Shopify Functions. No code required. Available for all Shopify plans.",
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=630&fit=crop",
  ogType = "website",
  twitterCard = "summary_large_image",
  keywords = "shopify discounts, automated discounts, shopify functions, discount app, shopify campaigns, dynamic pricing, shopify automation",
}: SEOProps) => {
  const siteUrl = "https://mycampaigner.com";
  const fullTitle = title.includes("MyCampaigner")
    ? title
    : `${title} | MyCampaigner`;
  const canonicalUrl = canonical
    ? `${siteUrl}${canonical}`
    : window.location.href;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta
        property="og:description"
        content={ogDescription || description}
      />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="MyCampaigner" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={ogTitle || fullTitle} />
      <meta
        property="twitter:description"
        content={ogDescription || description}
      />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="MyCampaigner" />
    </Helmet>
  );
};

export default SEO;
