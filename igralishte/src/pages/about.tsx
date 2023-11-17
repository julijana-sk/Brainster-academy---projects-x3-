import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import PageTitle from "../components/PageTitle";
import { AboutType } from "@/types/types";
import { useState } from "react";
import { ToggleBtn } from "@/components/ToggleBtn";
import AboutSection from "@/components/AboutSection";


interface Props {
  aboutContentData: AboutType;
}

type ActiveView = "about1" | "about2";


const AboutPage: NextPage<Props> = ({aboutContentData}) => {

  const [view, setView] = useState<ActiveView>("about1");

  return (
    <>
      <Head>
        <title>Igralishte - About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="d-flex flex-row align-items-center align-self-center my-3 justify-content-center">
        <img src="../pictures/icons/sparks-elements.png" alt="spakrs" className="mr-2" />
        <PageTitle title={aboutContentData.title}/>
      </div>

      <div className="container">
          <div className="row d-flex flex-column justify-content-center mr-auto ml-auto">
            <div className="col-12">
          <div className="row d-flex flex-row justify-content-center mb-4">
              <div className="col-11 align-items-center toggle-about-wrapper mr-auto ml-auto" data-toggle="buttons">
                <ToggleBtn title="Нашата приказна" onClick={() => setView("about1")} />
                <ToggleBtn title="Нашата работа" onClick={() => setView("about2")} />
              </div>
          </div>
              <div className="container p-0 mr-auto ml-auto">
                {view === "about1" ? <AboutSection title="Кои сме ние?" image={aboutContentData.image1} content={aboutContentData.first_content}/> : null}
                {view === "about2" ? <AboutSection title="Што работиме?" image={aboutContentData.image2} content={aboutContentData.second_content}/> : null}
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default AboutPage;


export const getStaticProps: GetStaticProps = async () => {

  const resAbout = await fetch("http://localhost:5001/about");
  const aboutContentData: AboutType = await resAbout.json();


 return {
    props: {
      aboutContentData
    },
 };
}