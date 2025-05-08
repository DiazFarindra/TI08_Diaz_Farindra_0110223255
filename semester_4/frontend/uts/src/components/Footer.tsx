
export const Footer = () => {
    return (
        <footer id='about' className="mt-32 bg-white rounded-lg shadow-lg m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">
                    © 2025 <a href="https://instagram.com" className="hover:underline">Diaz Farindra</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                    <li>
                        <a href="#hero" className="hover:underline me-4 md:me-6">Global</a>
                    </li>
                    <li>
                        <a href="#stats" className="hover:underline me-4 md:me-6">Stats</a>
                    </li>
                    <li>
                        <a href="#province" className="hover:underline me-4 md:me-6">Province</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:underline">About</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}
