import { NextSeo } from 'next-seo'

import { PageHeader } from '../components/PageHeader'

export default function TermsOfUse(): JSX.Element {
  return (
    <>
      <NextSeo
        title="Termos de uso"
        description="Ao utilizar nossos serviços, você concorda com os termos e condições."
      />
      <PageHeader
        title="Termos de uso"
        description="Ao acessar e usar nosso site e plataforma de gerenciamento de
              negócios, você concorda em cumprir os seguintes termos de uso."
      />

      <div className="relative overflow-hidden bg-white py-16">
        <div className="relative px-6 lg:px-8">
          <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
            <p>
              O conteúdo do nosso site e plataforma, incluindo textos, gráficos,
              imagens e outros materiais, é de propriedade exclusiva de nós ou
              de nossos licenciadores e está protegido por direitos autorais e
              marcas registradas.
            </p>
            <p>
              O conteúdo do nosso site e plataforma, incluindo textos, gráficos,
              imagens e outros materiais, é de propriedade exclusiva de nós ou
              de nossos licenciadores e está protegido por direitos autorais e
              marcas registradas.
            </p>
            <p>
              É proibido reproduzir, modificar, distribuir, exibir publicamente,
              executar, republicar ou usar qualquer conteúdo de nosso site e
              plataforma para fins comerciais sem a permissão prévia por escrito
              de nós.
            </p>
            <p>
              O uso indevido de nosso site e plataforma, incluindo a tentativa
              de acessar informações não autorizadas ou a utilização de scripts
              automatizados, pode resultar em responsabilidade civil e criminal.
            </p>
            <p>
              Nós não garantimos que nosso site e plataforma esteja livre de
              erros ou esteja disponível sem interrupções. Nós também não
              garantimos que o conteúdo disponível no site e plataforma seja
              preciso, completo ou atualizado.
            </p>
            <p>
              Nós não somos responsáveis por quaisquer danos decorrentes do uso
              de nosso site e plataforma, incluindo, mas não se limitando a,
              danos diretos, indiretos, incidentais, punitivos ou conseqüentes.
            </p>
            <p>
              Você é responsável por manter a confidencialidade de sua conta e
              senha e por restringir o acesso ao seu computador, e você concorda
              em assumir a responsabilidade por todas as atividades que ocorram
              sob sua conta ou senha.
            </p>
            <p>
              Nós nos reservamos o direito de modificar esses termos de uso a
              qualquer momento. Qualquer alteração será publicada em nosso site
              e plataforma de gerenciamento de negócios. Seu uso continuado de
              nosso site e plataforma após qualquer alteração constitui sua
              aceitação dos novos termos de uso.
            </p>
            <p>
              Esse acordo é regido e interpretado de acordo com as leis do
              Brasil. Qualquer disputa relacionada a esse acordo será resolvida
              exclusivamente pelos tribunais do Brasil.
            </p>
            <p>
              Se qualquer disposição destes Termos de Uso for considerada
              inválida ou inexequível, essa disposição será limitada ou excluída
              na medida mínima necessária e não afetará a validade e
              aplicabilidade das disposições restantes.
            </p>
            <p>
              Esse acordo constitui o acordo integral entre as partes com
              relação ao assunto aqui tratado e substitui todos os acordos
              anteriores e contemporâneos, sejam escritos ou orais.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
