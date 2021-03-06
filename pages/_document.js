import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// import Document from "next/document";
// //highlight-next-line
// import { ServerStyleSheet } from "styled-components";
// export default class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     //highlight-next-line
//     const sheet = new ServerStyleSheet();
//     const originalRenderPage = ctx.renderPage;
//     try {
//       ctx.renderPage = () =&gt;
//         originalRenderPage({
//           //highlight-next-line
//           enhanceApp: App =&gt; props =&gt; sheet.collectStyles()
//         });
//       const initialProps = await Document.getInitialProps(ctx);
//       return {
//         ...initialProps,
//         styles: (
//           &lt;&gt;
//             {initialProps.styles}
//             //highlight-next-line               
//             {sheet.getStyleElement()}
          
//         )
//       };
//     } finally {
//       sheet.seal();
//     }
//   }
// }