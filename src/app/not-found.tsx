import Footer from "@/sections/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-1 flex-col items-center justify-center space-y-4">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl">Página no encontrada :(</h2>
          <p>No se pudo encontrar el recurso solicitado</p>
          <button className="px-6 py-2 rounded-md bg-tr-color-500 text-pr-color-500">
            <Link href="/">Regresar al página principal</Link>
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
