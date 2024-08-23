import Image from "next/image";
import { Check } from "@phosphor-icons/react/dist/ssr";

export default function Plan() {
  return (
    <div className="bg-white">
      <h1>Escolha sua assinatura</h1>

      <div className="plans">
        <div className="plans-box">

          <div className="individual">
            <div className="title">
              <p>Plano Mensal</p>
              <h2>INDIVIDUAL</h2>
            </div>
            <div className="price">
              <p><span>R$</span>24,90</p>
            </div>
            <div className="description">
              <ul>
                <li>
                  <Check size={16} />
                  <p>Válido para você</p>
                </li>
                <li>
                  <Check size={16} />
                  <p>Consultas presenciais com mais de 20 especialidades</p>
                </li>
                <li>
                  <Check size={16} />
                  <p>Desconto em +200 exames laboratoriais</p>
                </li>
                <li>
                  <Check size={16} />
                  <p>Desconto em medicamentos</p>
                </li>
                <li>
                  <Check size={16} />
                  <p>Agendamento em até 5 dias úteis</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="individual">
            <div className="title">
              <p>Plano Mensal</p>
              <h2>FAMILIAR</h2>
            </div>
            <div className="price">
              <p><span>R$</span>87,90</p>
            </div>
            <div className="description">
              <ul>
                <li>
                  <Check size={16} />
                  <p>Válido para você + <b>3 pessoas</b></p>
                  <small>(incluso não dependentes)</small>
                </li>
                <li>
                  <Check size={16} />
                  <p>Consultas presenciais com mais de 20 especialidades</p>
                </li>
                <li>
                  <Check size={16} />
                  <p>Desconto em +200 exames laboratoriais</p>
                </li>
                <li>
                  <Check size={16} />
                  <p>Desconto em medicamentos</p>
                </li>
                <li>
                  <Check size={16} />
                  <p>Agendamento em até 5 dias úteis</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <Image src="/cred.png" alt="Planos" width={359} height={25} />

    </div>
  );
}
