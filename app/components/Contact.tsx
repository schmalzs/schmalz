import cx from 'classnames';

export default function Contact({ className }: { className?: string }) {
  return (
    <section
      className={cx(
        'flex justify-center items-center text-xl text-gray',
        className
      )}
    >
      <a
        className="hover:text-[#000000] hover:-translate-y-2 duration-200"
        href="mailto:scott.schmalz@gmail.com"
      >
        scott.schmalz@gmail.com
      </a>
    </section>
  );
}
