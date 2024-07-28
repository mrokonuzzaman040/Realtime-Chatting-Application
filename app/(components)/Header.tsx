import Link from 'next/link'

const Header = () => {
    return (
        <header className="fixed w-full bg-opacity-70 backdrop-filter backdrop-blur-lg z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold">Social Media App</h1>
                <nav className="space-x-4">
                    <Link href="/" className="hover:text-cyan-500">Home</Link>
                    <Link href="/faq" className="hover:text-cyan-500">FAQ</Link>
                    <Link href="/apps" className="hover:text-cyan-500">Apps</Link>
                    <Link href="/protocol" className="hover:text-cyan-500">Protocol</Link>
                    <Link href="/contact" className="hover:text-cyan-500">Contact</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
