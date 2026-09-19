'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    href: string;
    label: string;
}

export default function NavLink(){
    const pathname= usePathname()

    const links: NavLinkProps[]=[
        {href:'/', label: 'Home'},
        {href:'/about', label:'About'},
        {href:'/projects', label:'Projects'},
        {href:'/contact', label:'Contact'}

    ];

    return(
        <nav className="flex gap-6">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              isActive
                ? "font-bold underline"
                : "text-gray-600 hover:text-black"
            }
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
    );
}
;