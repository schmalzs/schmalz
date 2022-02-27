import cx from 'classnames';
import { SocialIcon } from 'react-social-icons';

const Icon = (props: { url: string }) => (
  <SocialIcon
    target="_blank"
    rel="noopener noreferrer"
    className="duration-200 hover:scale-125"
    {...props}
  />
);

export default function Social({ className }: { className?: string }) {
  return (
    <section
      className={cx(
        'flex items-center justify-center flex-grow space-x-8 md:space-x-12',
        className
      )}
    >
      <Icon url="https://www.linkedin.com/in/scottschmalz" />
      <Icon url="https://github.com/schmalzs" />
      <Icon url="https://gitlab.com/schmalzs" />
      <Icon url="https://twitter.com/scottschmalz" />
    </section>
  );
}
