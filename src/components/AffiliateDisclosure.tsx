import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function AffiliateDisclosure({
  locale,
}: {
  locale: Locale;
}) {
  const dict = await getDictionary(locale);
  return (
    <div className="rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed px-4 py-3">
      <strong className="font-semibold">⚑ </strong>
      {dict.affiliate.disclosure}
    </div>
  );
}
