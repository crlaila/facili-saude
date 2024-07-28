import Image from "next/image";

export default function How() {
  return (
    <div className="bg-white -mt-32 text-center pt-52 pb-20">
      <div>
        <h2 className="text-sub text-gray font-bold">Como funciona o nosso desconto saúde?</h2>
        <p className="text-gray lg:w-6/12 text-center mx-auto">Você conta com benefícios que garantem a você e à sua família acesso a mais de 
          21 especialidades com <span className="text-blue font-bold">consultas particular</span> por um preço justo e acessível.</p>
      </div>
      <div className="max-w-3xl mx-auto mt-16 flex gap-14">
        <div className="flex flex-col items-center justify-center text-gray 
        py-10 px-7 w-56 rounded-3xl bg-white drop-shadow-custom border-white border-2 box-hover">
          <Image  src="/contract.svg" alt="Contrato" width={36} height={36} className="mx-auto"/>
          <h3 className="font-bold py-3">Contrato</h3>
          <p className="text-xs">Pra ter o seu desconto basta selecionar o plano que mais combina com você e assinar o seu contrato digital.</p>
        </div>
        <div className="flex flex-col items-center justify-center text-gray 
        py-10 px-7 w-56 rounded-3xl bg-white drop-shadow-custom border-white border-2 box-hover">
          <Image  src="/active.svg" alt="Ativação" width={22} height={36} className="mx-auto"/>
          <h3 className="font-bold py-3">Ative</h3>
          <p className="text-xs">Pronto! Agora que você já assinou o seu contrato você passa a fazer parte de diversos benefícios.</p>
        </div>
        <div className="flex flex-col items-center justify-center text-gray 
        py-10 px-7 w-56 rounded-3xl bg-white drop-shadow-custom border-white border-2 box-hover">
          <Image  src="/use.svg" alt="Use" width={18} height={36} className="mx-auto"/>
          <h3 className="font-bold py-3">Use</h3>
          <p className="text-xs">Agora sim! :) <br/>Após a ativação você já está liberado para aproveitar todos os seus descontos.</p>
        </div>
      </div>
    </div>
  )
}
