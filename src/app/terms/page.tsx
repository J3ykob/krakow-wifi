import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "Terms of Use — Kraków WiFi",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-10">
        <Link
          href="/"
          className="text-sm text-primary hover:underline mb-6 inline-block"
        >
          &larr; Back to Home
        </Link>
        <h1 className="text-2xl font-bold mb-6">Terms of Use</h1>
        <div className="prose prose-sm text-muted space-y-4">
          <p>
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-6">
            Purpose
          </h2>
          <p>
            This website helps tourists and visitors find free municipal WiFi
            hotspots in Kraków, Poland. It provides information and links to the
            official city resources.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-6">
            Disclaimer
          </h2>
          <p>
            WiFi hotspot availability, locations, and connectivity are managed by
            the City of Kraków. This website is an independent directory and is
            not affiliated with or endorsed by the Kraków city government. We do
            not guarantee the accuracy, availability, or quality of WiFi
            services listed.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-6">
            Advertising
          </h2>
          <p>
            This website displays third-party advertisements. Ad content is
            managed by advertising networks and does not reflect endorsement by
            this website.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-6">
            Use at Your Own Risk
          </h2>
          <p>
            Connecting to public WiFi networks carries inherent risks. Users are
            responsible for their own online security. We recommend using a VPN
            and avoiding sensitive transactions on public networks.
          </p>
        </div>
      </main>
    </div>
  );
}
