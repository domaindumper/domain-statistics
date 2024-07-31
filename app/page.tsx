import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        All possible domain states
        </h1>
        <p className="text-muted-foreground max-w-[700px] text-lg">We provide comprehensive APIs to generate all possible domain registration, expiration, and deletion states, including root registrar and root name server data. These APIs are free to use for any project. For premium services, explore our offerings at: https://www.domaindumper.com.</p>
        <p className="text-muted-foreground max-w-[700px] text-lg">
          Click on <Link href={'/api-doc'}>Doc</Link> to see the swagger UI.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          API Documentation
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
