//Preview related
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
//import "@contentful/live-preview/style.css";
//import Head from '../components/Common/Head';
import Layout from '../components/Common/Layout';

function TmnasApp({ Component, pageProps }) {
  // <Head></Head>
  return (
    <ContentfulLivePreviewProvider
      enableInspectorMode={pageProps.previewActive}
      enableLiveUpdates={pageProps.previewActive}
      locale={'en-US'}>
      <>
        <Layout>          
            <Component {...pageProps} />
        </Layout>
      </>
    </ContentfulLivePreviewProvider>
  )
}

export default TmnasApp
