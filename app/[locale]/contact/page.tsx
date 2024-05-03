import { ContactForm } from "@/components/ContactForm";
import { PageWrapper } from "@/components/PageWrapper";
import { Params } from "@/types/params";

export default function Contact({ params: { lang } }: Params) {
    return (
        <PageWrapper yAxis>
            <h1 className="title text-center pt-36">Contact</h1>
            <section className="my-10">
                <ContactForm />
            </section>
        </PageWrapper>
    );
}
