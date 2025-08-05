import type { Metadata } from "next";
import "./globals.css";
import ScriptLoader from "../components/ScriptLoader";
import ClientOnlyWrapper from "../components/ClientOnlyWrapper";

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
      </head>
      <body suppressHydrationWarning={true}>
        {/* Preloader */}
        <ClientOnlyWrapper>
          <div id="loading" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div className="preloader" style={{display: 'flex', gap: '8px'}}>
              <span style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                animation: 'preloader 1.4s ease-in-out infinite both',
                animationDelay: '-0.32s'
              }}></span>
              <span style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                animation: 'preloader 1.4s ease-in-out infinite both',
                animationDelay: '-0.16s'
              }}></span>
            </div>
          </div>
        </ClientOnlyWrapper>
        
        {children}
        
        <ClientOnlyWrapper>
          <ScriptLoader />
        </ClientOnlyWrapper>
        
      </body>
    </html>
  );
}
