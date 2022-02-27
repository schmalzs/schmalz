import Hero from '~/components/Hero';
import Social from '~/components/Social';

export default function Index() {
  return (
    <>
      <Hero />
      <Social className="flex-grow" />
    </>
  );
}
