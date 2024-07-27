import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <h1 className="text-center text-white font-bold text-8xl lg:w-9/12
      flex justify-center items-center mx-auto pt-20">
      Inovando os cuidados da saúde</h1>
      <p className="text-green font-bold text-center">Simples. Essencial. Digital.</p>
      <Image src="/img-hero.png" alt="Hero" width={988} height={1000} className="mx-auto pt-16"/>
    </div>
  )
}
