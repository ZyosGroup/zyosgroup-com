import { jsonLdScript, webPageSchema, serviceSchema, breadcrumb } from "@/lib/schema";
import { SITE } from "@/lib/site";

export function PageSchema({
  path,
  name,
  description,
  service,
  breadcrumbTrail,
}: {
  path: string; // "/solutions"
  name: string;
  description: string;
  service?: { type: string };
  breadcrumbTrail?: { name: string; url: string }[];
}) {
  const url = `${SITE.url}${path}`;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          webPageSchema({ url, name, description })
        )}
      />
      {service ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            serviceSchema({
              url,
              name,
              description,
              serviceType: service.type,
            })
          )}
        />
      ) : null}
      {breadcrumbTrail ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(breadcrumb(breadcrumbTrail))}
        />
      ) : null}
    </>
  );
}
