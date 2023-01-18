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
      </Head>
      <Main />
      <NextScript />
    </Html>
  )
}
