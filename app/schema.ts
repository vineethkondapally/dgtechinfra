import type { Metadata } from "next";

export const metadata: Metadata = {
  other: {
    "schema:Organization": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "DHRITI Global Technologies & Infrastructure Pvt Ltd",
      "url": "https://dgtechinfra.com",
      "logo": "https://dgtechinfra.com/logo.png",
      "description": "Integrated solutions across 15+ diverse sectors",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5, Nehru Outer Ring Road Sambhupur, Dundigal",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500043",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "telephone": "+91-9948146882",
        "email": "contact@dgtechinfra.com"
      },
      "sameAs": [
        "https://www.facebook.com/dgtechinfra",
        "https://www.linkedin.com/company/dgtechinfra",
        "https://twitter.com/dgtechinfra"
      ]
    })
  }
};
