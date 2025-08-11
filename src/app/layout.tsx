import type { Metadata } from "next";
import "./globals.css";
import ScriptLoader from "../components/ScriptLoader";
import ClientOnlyWrapper from "../components/ClientOnlyWrapper";
import AnimationInitializer from "../components/AnimationInitializer";

export const metadata: Metadata = {
  title: "KLYRR - Modular GTM Systems for SaaS Growth",
  description: "KLYRR installs plug-and-play GTM engines that drive pipeline, conversions, and expansion — in days, not quarters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.png" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/custom-animation.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome-pro.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/spacing.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/klyrr-custom.css" />
      </head>
      <body suppressHydrationWarning={true}>
        
        {children}
        
        <ClientOnlyWrapper>
          <ScriptLoader />
          <AnimationInitializer />
        </ClientOnlyWrapper>
        
      </body>
    </html>
  );
}
