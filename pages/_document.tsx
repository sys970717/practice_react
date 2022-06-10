import Document, { Html, Head, Main, NextScript } from 'next/document';
import theme from "@/assets/styles/theme"
import { ServerStyleSheets } from '@mui/styles';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="ko">
                <Head>
                    <meta name="description" content="Test Front" />
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async ctx => {
    // getInitialProps 는 서버단에서 실행되는 내용.
    const materialSheeets = new ServerStyleSheets();
    const originRednerPage = ctx.renderPage;

    ctx.renderPage = () => 
        originRednerPage({
            enhanceApp: App => props => materialSheeets.collect(<App {...props } />)
        });

    const initialProps = await Document.getInitialProps(ctx);
    return {
        ...initialProps,
        styles: <>{initialProps.styles}</>
    }
}