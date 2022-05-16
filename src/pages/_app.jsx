import Layout from "../components/Layout/Layout";
import styles from "../styles.css";

function MyApp({ Component, pageProps }) {
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   );
}

export default MyApp;
