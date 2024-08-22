"use client"
import Image from "next/image";
import styled from "styled-components";

const BenefitsCheck = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: #00FF00;
  border-radius: 50%;
  margin-right: 10px;
`;

export default function Benefits() {
  return (
    <div className="flex gap-20 justify-center items-center py-16">
      <div className="description">

        <h2 className="text-white text-5xl font-bold">Da <span className="text-green">Facili</span> pra você.</h2>
        <p className="text-white text-xl w-56 pb-12">Somos o cuidado que transforma</p>

        <ul>
          <li className="flex items-center pb-6">
            <BenefitsCheck></BenefitsCheck><p className="text-white text-lg">Mais de 21 especialidades médicas</p>
          </li>
          <li className="flex items-center pb-6">
            <BenefitsCheck></BenefitsCheck><p className="text-white text-lg">Consulte em qualquer especialidade por <span className="text-green font-bold">apenas R$ 25,00</span></p>
          </li>
          <li className="flex items-center pb-6">
            <BenefitsCheck></BenefitsCheck><p className="text-white text-lg">Descontos em medicamentos</p>
          </li>
          <li className="flex items-center pb-6">
            <BenefitsCheck></BenefitsCheck><p className="text-white text-lg">Desconto em exames laboratoriais</p>
          </li>
          <li className="flex items-center">
            <BenefitsCheck></BenefitsCheck><p className="text-white text-lg">Agendamento de consultas de forma digital</p>
          </li>
        </ul>
      </div>

      <Image src="/bg-card.svg" width={513} height={360} alt="Imagem ilustrativa de prontuários médicos" className="pt-16" />
    </div>
  )
}
