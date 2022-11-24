import { FC } from 'react';
import { Container } from 'components';
// import Work from './work';

const SiteFooter: FC = () => (
  <footer className="border-t bg-accent-1 border-accent-2">
    {/* <Work /> */}
    <Container>
      <div className="flex flex-col items-center gap-8 py-28 md:flex-row md:justify-around">
        <p
          className="mb-10 text-4xl font-bold leading-tight tracking-tight text-center md:text-5xl md:text-left md:mb-0 md:pr-4"
          role="heading"
          aria-level={4}
        >
          Like this website?
        </p>
        <a
          href="https://github.com/wrux/bloke"
          className="px-12 py-3 mx-3 mb-6 font-bold text-center text-white transition-colors duration-200 bg-black border border-black hover:bg-white hover:text-black md:px-8 md:mb-0"
        >
          View the source code
        </a>
      </div>
    </Container>
  </footer>
);

export default SiteFooter;
