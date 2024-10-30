import React, { useEffect, useState } from "react";
import Header from "../header";
import Image from "next/image";
import Footer from "../footer";
import { HomeBackground } from "../../../public/images";
import Head from "next/head";
import { strings } from "@/locales";
import GoToTop from "../goToTop";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import ReactWhatsApp from "../ReactWhatsApp";
import { Loader } from "../Loader";
const Layout = ({
  children,
  backgrouondImage,
  metadata = {
    title: strings.homeMetaTitle,
    description: strings.homeMetaDescription,
  },
  additionalJsonLd,
}) => {
  const { asPath } = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  return (
    <>
      <NextSeo
        title={metadata?.title}
        description={metadata?.description}
        canonical={`${origin}${asPath}`}
        openGraph={{
          type: "website",
          title: metadata?.title,
          locale: "en_IE",
          url: "https://www.o16labs.com/",
          description: metadata?.description,
          siteName: "O16 LABS",
          images: [],
        }}
      />
      {additionalJsonLd && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(additionalJsonLd),
            }}
          />
        </Head>
      )}
      <div className="w-full min-h-screen">
        <Header />
        <div className="min-h-screen relative h-full">
          <Image
            objectFit="cover"
            objectPosition="center"
            src={backgrouondImage || HomeBackground}
            alt="hero"
            // fetchpriority="high"
            title="hero"
            className={backgrouondImage ? "object-cover object-top" : ""}
            fill
            priority
          />
          {children ? (
            <div className="relative z-1">{children}</div>
          ) : (
            <Loader />
          )}

          <Footer />
          <GoToTop />
          <ReactWhatsApp />
        </div>
      </div>
    </>
  );
};

export default Layout;
