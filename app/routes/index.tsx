import Contact from '~/components/Contact';
import Hero from '~/components/Hero';
import Social from '~/components/Social';

export default function Index() {
  return (
    <>
      <Hero />
      <Contact className="flex-grow" />
      <Social className="flex-grow" />
    </>
  );
}
