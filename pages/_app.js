import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from "components/PageChange/PageChange.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/fontawesome-free-6.1.1-web/css/all.css"
import "styles/tailwind.css";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`
    =====================================
    `);
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <title>Social-Manager</title>

          <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>


          <meta name="description" content="Keep up your discord community with Social Manager!"/>
          <meta name="keywords" content="admin, bot, dashboard, social, discord, discord moderation bot, manager, website, mod, discordapp, moderation"/>
          <meta name="theme-color" content="#ff5858"/>

          <link rel="apple-touch-icon" href="https://cdn.discordapp.com/avatars/968763404888211457/824126ef64e9d3cc3df309597df070b7.png"/>
          <link rel="shortcut icon" type="image/x-icon" href="https://cdn.discordapp.com/avatars/968763404888211457/824126ef64e9d3cc3df309597df070b7.png"/>
          <link rel="shortcut icon" href="https://cdn.discordapp.com/avatars/968763404888211457/824126ef64e9d3cc3df309597df070b7.png"/>

          <meta property="og:type" content="website"/>
          <meta property="og:image" content="https://cdn.discordapp.com/avatars/968763404888211457/824126ef64e9d3cc3df309597df070b7.png"/>
          <meta property="og:title" content="Social-Manager"/>
          <meta property="og:description" content="Keep up your discord community with Social Manager!"/>
          <meta property="og:url" content="https://social-manager.app"/>

          <meta name="twitter:card" content="app"/>
          <meta name="twitter:title" content="Social-Manager"/>
          <meta name="twitter:description" content="Keep up your discord community with Social Manager!"/>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    );
  }
}
