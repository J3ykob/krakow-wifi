import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Kraków WiFi",
};

export default function PrivacyPage() {
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
        <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose prose-sm text-muted space-y-4">
          <p>
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-6">
            Information We Collect
          </h2>
          <p>
            This website does not collect personal information directly. We use
            third-party advertising services (including Google AdSense) that may
            use cookies and similar technologies to serve personalized ads based
            on your browsing activity.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-6">
            Cookies &amp; Advertising
          </h2>
          <p>
            Third-party ad networks, including Google, use cookies to serve ads
            based on prior visits to this and other websites. Google&apos;s use
            of advertising cookies enables it and its partners to serve ads based
            on your visit to this site and/or other sites on the Internet.
          </p>
          <p>
            You may opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Ads Settings
            </a>
            .
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-6">
            Third-Party Links
          </h2>
          <p>
            This website links to external sites (including krakow.pl) that have
            their own privacy policies. We are not responsible for the content or
            privacy practices of those sites.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-6">
            Contact
          </h2>
          <p>
            If you have questions about this privacy policy, please contact us
            at the email address provided on this website.
          </p>
        </div>
      </main>
    </div>
  );
}
