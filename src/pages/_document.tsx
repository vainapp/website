import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document(): JSX.Element {
  return (
    <Html lang="pt">
      <Head>
        <Script
          id="clarity-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "fggb9wa8v7");
            `,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CVER62W793"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-CVER62W793');
        `}
        </Script>
      </Head>
      <Main />
      <NextScript />
    </Html>
  )
}
