export default function Footer() {

    return (
        <footer className="bg-gray-100 py-4 mt-8">
            <div className="container mx-auto px-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Fluenceo — All rights reserved.
            </div>
        </footer>
    );
}
