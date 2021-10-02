import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css';
import '../styles/Header.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default MyApp
