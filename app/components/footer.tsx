export default function Footer(){
    return(
        <footer className='flex flex-row items-center justify-center w-full px-16 py-4 bg-white dark:bg-black'>
            <div className='text-center text-gray-600 dark:text-gray-400'>
                <p>&copy; {new Date().getFullYear()} Assumpta Chidinma Okpanachi. All rights reserved.</p>
                <p>Build with Next.js and Tailwind CSS</p>
            </div>
        </footer>
    );
}