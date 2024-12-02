import { ContactHero } from '../../components/contact/contact-hero';
import { ContactForm } from '../../components/contact/contact-form';

export function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactForm />
    </div>
  );
}