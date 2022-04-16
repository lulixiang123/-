import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import 'antd/dist/antd.css';
//Component相当于每一个页面
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
            <style jsx>
                {`
              `}
            </style>
        </Layout>
    )
}

export default MyApp
