import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';

export default function Home() {
  return (
    <section className="container grid h-screen items-center content-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-center gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-6xl">
          Template Nextjs 13
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Tailwind, Vitest, Testing-library, Shadcn-ui, Lucide-Icons and more!
        </p>
      </div>
      <div className="flex justify-center gap-4 md:mt-4">
        <Link
          href="https://github.com/new?template_name=template-nextjs13&template_owner=vagnermaltauro"
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Start Now
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: 'outline' })}
        >
          GitHub
        </Link>
      </div>
    </section>
  );
}
