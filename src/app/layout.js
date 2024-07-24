import { Poppins } from "next/font/google";
import "@/app/styles/globals.css";
import Link from 'next/link';
import Image from "next/image";

const poppins = Poppins({
  display: "swap",
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang='pt' className={`${poppins.variable}`}>
      <body className="bg-blue">{children}
        <header className="space-y-10">
          <div className="bg-green text-purple flex gap-4 justify-center py-2 align-middle">
            <h3 className="text-sm">Assine agora através do nosso whatsapp   <span className="px-4 font-bold text-md  align-middle">|</span>   31 3157.2844</h3>
          </div>
            <nav className="flex items-center justify-center gap-32">
              <div>
                <Image src="/logo.svg" alt="Logo" width={177} height={100} />
              </div>
              <ul className="text-white flex gap-8">
                <li className="hover:text-green transition ease delay-100">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-green transition ease delay-100">
                  <Link href="/">Como funciona</Link>
                </li>
                <li className="hover:text-green transition ease delay-100">
                  <Link href="/">Benefícios</Link>
                </li>
                <li className="hover:text-green transition ease delay-100">
                  <Link href="/">Planos</Link>
                </li>
                <li className="hover:text-green transition ease delay-100">
                  <Link href="/">Contato</Link>
                </li>
                <li className="hover:text-green transition ease delay-100">
                  <Link href="/">Faq</Link>
                </li>
              </ul>
              <button>
                <Link className="bg-green rounded-xl py-3 px-8 font-bold text-blue border-2 border-green
              hover:bg-blue hover:text-white hover:border-2 transition ease" href="/">Assine agora</Link>
              </button>
            </nav>
        </header>
      </body>
    </html>
  );
}
