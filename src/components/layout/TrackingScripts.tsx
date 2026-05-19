import Script from "next/script";
import { ANALYTICS } from "@/lib/site";

// Ports the legacy Gatsby zyosgroup.com tracking stack into the Next.js
// rebuild so the GTM container's historical events + HubSpot's contact
// timeline continue without a gap at cutover. IDs live in lib/site.ts.

export function TrackingScripts() {
  const { gtmId, hubspotPortalId } = ANALYTICS;
  return (
    <>
      <Script id="gtm-init" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
      </Script>
      <Script
        id="hs-script-loader"
        src={`https://js.hs-scripts.com/${hubspotPortalId}.js`}
        strategy="afterInteractive"
        async
        defer
      />
    </>
  );
}

export function TrackingNoscript() {
  const { gtmId } = ANALYTICS;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
