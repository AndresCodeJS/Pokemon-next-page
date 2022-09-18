import Head from "next/head";
import React, { FC } from "react";
import Navbar from "../ui/Navbar";

type Props = {
  children: React.ReactNode;
  title?: string;
};
const origin = (typeof window === 'undefined'?'':window.location.origin)

export const Layout: FC<Props> = ({ children, title }) => {
  
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Andres Gomez" />
        <meta
          name="description"
          content={`Information about ${title || "Pokemon"}`}
        />
        <meta name="keyword" content={`${title} ,Pokemon, Pokedex`} />

        <meta
          property="og:title"
          content={`Información sobre ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/img/banner.png`}
        />
      </Head>

      <Navbar />

      <main>{children}</main>
    </>
  );
};
