import { ContactForm } from "@/components/ContactForm";
import { PageWrapper } from "@/components/PageWrapper";

export default function Contact() {
    return (
        <PageWrapper>
            <h1 className="title text-center mt-36">Contact</h1>
            <section className="my-10">
                <ContactForm />
            </section>
        </PageWrapper>
    );
}
