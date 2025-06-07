export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">Madhuwanthsai Sathishkumar</h1>
      <ul className="flex space-x-6 text-sm">
        <li><a href="#hero" className="hover:text-yellow-200">Home</a></li>
        <li><a href="#projects" className="hover:text-yellow-200">Projects</a></li>
        <li><a href="#about" className="hover:text-yellow-200">About</a></li>
        <li><a href="#contact" className="hover:text-yellow-200">Contact</a></li>
      </ul>
    </nav>
  );
}
