import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/hd/black-apple-logo-2560-x-1600-k462be8xypr2fcut.jpg')",
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="flex flex-col gap-4 m-6 justify-center items-center w-full relative z-10">
        {/* Imagen principal con información */}
        <div className="relative group w-full max-w-screen-lg">
          <Link href="/store">
            <Image
              className="object-cover rounded-2xl hover:scale-105 transition-transform w-full"
              src="https://www.macstoreonline.com.mx/img//lp/business/Multi-Product.png"
              alt="Imagen principal"
              height={700}
              width={1900}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
              <h2 className="text-white text-3xl font-bold">Descubre Nuestros Productos</h2>
              <p className="text-white mt-2 text-lg text-center">Explora nuestra tienda y encuentra la mejor tecnología al alcance de tu mano.</p>
              <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg">Ver más</button>
            </div>
          </Link>
        </div>

        {/* Sección de productos con descripciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-screen-lg">
          <div className="relative group bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
            <Link href="/store">
              <Image
                className="h-96 w-full object-cover rounded-t-2xl"
                src="https://rymportatiles.com.pe/cdn/shop/collections/iphone.jpg?v=1703031092&width=1296"
                alt="Producto iPhone"
                height={200}
                width={400}
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                <h3 className="text-white text-xl font-semibold">iPhone</h3>
                <p className="text-white mt-1">La última tecnología en tus manos</p>
                <button className="mt-2 px-4 py-1 bg-white text-black rounded-lg">Ver más</button>
              </div>
            </Link>
          </div>

          <div className="relative group bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
            <Link href="/store">
              <Image
                className="h-96 w-full object-cover rounded-t-2xl"
                src="https://mac-center.com/cdn/shop/files/IMG-12444373.jpg?v=1723750058&width=823"
                alt="Producto Mac"
                height={200}
                width={400}
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                <h3 className="text-white text-xl font-semibold">MacBook</h3>
                <p className="text-white mt-1">Potencia y diseño en un solo equipo</p>
                <button className="mt-2 px-4 py-1 bg-white text-black rounded-lg">Ver más</button>
              </div>
            </Link>
          </div>

          <div className="relative group bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
            <Link href="/store">
              <Image
                className="h-96 w-full object-cover rounded-t-2xl"
                src="https://www.compudemano.com/wp-content/uploads/2020/12/airpods-max-plata.jpg"
                alt="Producto AirPods"
                height={200}
                width={400}
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                <h3 className="text-white text-xl font-semibold">AirPods Max</h3>
                <p className="text-white mt-1">Sonido inmersivo y de alta calidad</p>
                <button className="mt-2 px-4 py-1 bg-white text-black rounded-lg">Ver más</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
