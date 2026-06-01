import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-heading font-800 text-8xl text-teal-500 mb-4">404</p>
        <h1 className="font-heading font-700 text-2xl text-teal-900 mb-3">
          Page Not Found
        </h1>
        <p className="font-body text-sm text-muted mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back to the lodge.
        </p>
        <Link
          href="/"
          className="inline-block font-body font-600 text-sm tracking-wide bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-3 rounded-xl transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
