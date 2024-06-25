import { ProjectTabs } from "@/components/projects/ProjectTabs";
import { PageWrapper } from "@/components/wrappers/PageWrapper";
import Head from "next/head";

const pageTitle = "Projects | Adrien Thevon | BlenkDev";
const pageDescription = "Discover some of the projects I have worked on, from web applications to UX/UI design.";
const imageUrl = "https://postimg.cc/1gS4dYZF";
const pageUrl = "https://blenkdev.fr";


export default async function Projects() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="projects, portfolio, Adrien Thevon, BlenkDev, fullstack, web applications, UX/UI design" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
      </Head>
      <PageWrapper>
        <ProjectTabs />
      </PageWrapper>
    </>
  );
}