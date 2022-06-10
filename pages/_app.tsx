import '@/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

// 이곳에서의 'console.log' 는 클라이언트와 서버 양쪽 콘솔에 찍힌다.
