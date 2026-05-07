const SITE_REPO_URL = "https://github.com/yildizali/yildizalicom";

const Footer = () => {
  return (
    <footer className="mt-16 pb-16 text-xs text-zinc-500 lg:mt-24 lg:pb-24">
      <p>
        Built with React, Vite, and Tailwind CSS. Deployed on GitHub Pages —{" "}
        <a
          href={SITE_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-zinc-400 underline-offset-2 transition-colors hover:text-amber-300 hover:underline focus-visible:text-amber-300 focus-visible:underline"
        >
          view source
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
