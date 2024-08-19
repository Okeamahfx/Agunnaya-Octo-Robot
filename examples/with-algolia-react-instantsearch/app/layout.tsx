import React from "react";

import "../styles/global.css";
import "instantsearch.css/themes/satellite-min.css";

export const metadata = {
  title: "Next.js with Algolia React InstantSearch",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}