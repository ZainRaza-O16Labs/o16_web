import { Html, Head, Main, NextScript } from "next/document";
import { strings } from "@/locales";
import Script from "next/script";

export default function Document() {
  const metadata = {
    title: strings.homeMetaTitle,
    description: strings.homeMetaDescription,
  };
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Tawk.to script */}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6674311feaf3bd8d4d12af90/1i0qtvp7p';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `,
          }}
        />

        {/* Clarity Script */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "o21ke2lwa2");
        `,
          }}
        />

        {/* Google Analytics Script */}
        {/* <Script
          async
          strategy="beforeInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-6S0MXS4M9D`}
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6S0MXS4M9D');
        `,
          }}
        /> */}

        <Script
          async
          strategy="beforeInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=GT-5R3653XR`}
        />

        <Script
          id="google-analytics-2"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GT-5R3653XR');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
