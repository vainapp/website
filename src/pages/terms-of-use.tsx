import { NextSeo } from 'next-seo'

export default function TermsOfUse(): JSX.Element {
  return (
    <>
      <NextSeo
        title="Termos de Uso"
        description="Ao utilizar nossos serviços, você concorda com os termos e condições"
      />
      <div className="relative overflow-hidden bg-white py-16">
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <h1 className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Termos de Uso
            </h1>
          </div>
          <div className="prose prose-lg mx-auto mt-6 text-gray-500">
            <p className="mt-8 text-xl leading-8 text-gray-500">
              Ao acessar e usar nosso site e plataforma de gerenciamento de
              negócios, você concorda em cumprir os seguintes termos de uso:
            </p>
            <ol role="list">
              <li>
                O conteúdo do nosso site e plataforma, incluindo textos,
                gráficos, imagens e outros materiais, é de propriedade exclusiva
                de nós ou de nossos licenciadores e está protegido por direitos
                autorais e marcas registradas.
              </li>
              <li>
                É proibido reproduzir, modificar, distribuir, exibir
                publicamente, executar, republicar ou usar qualquer conteúdo de
                nosso site e plataforma para fins comerciais sem a permissão
                prévia por escrito de nós.
              </li>
              <li>
                O uso indevido de nosso site e plataforma, incluindo a tentativa
                de acessar informações não autorizadas ou a utilização de
                scripts automatizados, pode resultar em responsabilidade civil e
                criminal.
              </li>
              <li>
                Nós não garantimos que nosso site e plataforma esteja livre de
                erros ou esteja disponível sem interrupções. Nós também não
                garantimos que o conteúdo disponível no site e plataforma seja
                preciso, completo ou atualizado.
              </li>
              <li>
                Nós não somos responsáveis por quaisquer danos decorrentes do
                uso de nosso site e plataforma, incluindo, mas não se limitando
                a, danos diretos, indiretos, incidentais, punitivos ou
                conseqüentes.
              </li>
              <li>
                Você é responsável por manter a confidencialidade de sua conta e
                senha e por restringir o acesso ao seu computador, e você
                concorda em assumir a responsabilidade por todas as atividades
                que ocorram sob sua conta ou senha.
              </li>
              <li>
                Nós nos reservamos o direito de modificar esses termos de uso a
                qualquer momento. Qualquer alteração será publicada em nosso
                site e plataforma de gerenciamento de negócios. Seu uso
                continuado de nosso site e plataforma após qualquer alteração
                constitui sua aceitação dos novos termos de uso.
              </li>
              <li>
                Esse acordo é regido e interpretado de acordo com as leis do
                Brasil. Qualquer disputa relacionada a esse acordo será
                resolvida exclusivamente pelos tribunais do Brasil.
              </li>
              <li>
                Se qualquer disposição destes Termos de Uso for considerada
                inválida ou inexequível, essa disposição será limitada ou
                excluída na medida mínima necessária e não afetará a validade e
                aplicabilidade das disposições restantes.
              </li>
              <li>
                Esse acordo constitui o acordo integral entre as partes com
                relação ao assunto aqui tratado e substitui todos os acordos
                anteriores e contemporâneos, sejam escritos ou orais.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}
