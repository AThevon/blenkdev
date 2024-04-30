import { Hero } from "@/components/Hero";
import { PageWrapper } from "@/components/PageWrapper";
import { Parallax } from "@/components/Parallax";

export default function Home() {
    return (
        <PageWrapper>
            <Hero />
            <Parallax />
        </PageWrapper>
    );
}
