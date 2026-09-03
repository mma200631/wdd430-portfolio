import Link from "next/link";

export default function Header() {
    return(
        <header className='flex flex-row items-center justify-between w-full px-16 py-4 bg-white dark:bg-black'>
            <div id='header-title' className='text-2xl font-bold'>Assumpta Chidinma Okpanachi</div>
            <nav className='flex flex-row gap-4'>
                <ul className='flex flex-row gap-4'>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>About</Link></li>
                </ul>
            </nav>
        </header>
    );
    
}