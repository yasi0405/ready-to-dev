import {ContactSection} from '@/components/ContactSection';
import {ExperienceBand} from '@/components/ExperienceBand';
import {ExpertiseSection} from '@/components/ExpertiseSection';
import {Hero} from '@/components/Hero';
import {ScrollReveal} from '@/components/ScrollReveal';
import {ServicesSection} from '@/components/ServicesSection';
import {ValueIcons} from '@/components/ValueIcons';

type Props = {
  params: Promise<{locale: string}>;
};

export default async function HomePage({params}: Props) {
  const {locale} = await params;

  return (
    <>
      <ScrollReveal>
        <Hero locale={locale} />
      </ScrollReveal>
      <ScrollReveal>
        <ExpertiseSection locale={locale} />
      </ScrollReveal>
      <ScrollReveal>
        <ExperienceBand locale={locale} />
      </ScrollReveal>
      <ScrollReveal>
        <ServicesSection locale={locale} />
      </ScrollReveal>
      <ScrollReveal>
        <ValueIcons locale={locale} />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection locale={locale} />
      </ScrollReveal>
    </>
  );
}
