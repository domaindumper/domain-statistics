import Link from 'next/link';
import * as React from 'react';

import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types/nav';

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'text-muted-foreground flex items-center text-sm font-medium',
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
}
