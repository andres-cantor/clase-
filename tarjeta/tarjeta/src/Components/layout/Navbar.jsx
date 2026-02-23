export default function Navbar({ brand, cartCount }) {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h2 className="text-2xl font-bold">{brand}</h2>
      <ul className="flex gap-8">
        <li className="hover:text-blue-400 cursor-pointer">Inicio</li>
        <li className="hover:text-blue-400 cursor-pointer">Productos</li>
        <li className="hover:text-blue-400 cursor-pointer">Contacto</li>
        <li className="bg-blue-600 px-3 py-1 rounded" >
         {cartCount}
         </li>
      </ul>
    </nav>
  );
}



