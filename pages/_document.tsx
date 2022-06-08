import Document, { Html, Head, Main, NextScript } from 'next/document';
import theme from "@/assets/styles/theme";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="ko">
                <Head>
                    <meta name="description" content="Test Front" />
                    <meta name="theme-color" content={theme.paletee.primary.main} />
                </Head>
            </Html>
        )
    }
}