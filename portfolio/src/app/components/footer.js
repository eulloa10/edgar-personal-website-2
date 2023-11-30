import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white text-black p-4 border-t border-black">
      <div className="container mx-auto flex items-center justify-center">
        <p className="mr-2">&copy; 2023 Edgar Ulloa</p>
        <a href="https://github.com/eulloa10" target="_blank" rel="noopener noreferrer" className="mx-2">
          <Image
            src="/github-mark.png"
            alt="GitHub logo"
            width={30}
            height={30}
          />
        </a>
        <a href="https://www.linkedin.com/in/edgarulloa/" target="_blank" rel="noopener noreferrer" className="mx-2">
          <Image
            src="/linkedin.png"
            alt="LinkedIn logo"
            width={30}
            height={30}
          />
        </a>
      </div>
    </footer>
  );
}
