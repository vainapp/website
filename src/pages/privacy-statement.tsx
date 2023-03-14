import { NextSeo } from 'next-seo'

import { Link } from '../components/Link'
import { PageHeader } from '../components/PageHeader'

export default function PrivacyPolicy(): JSX.Element {
  return (
    <>
      <NextSeo
        title="Política de privacidade"
        description="A segurança e privacidade dos seus dados é muito importante para
              nós."
      />
      <PageHeader
        title="Política de privacidade"
        description="A segurança e privacidade dos seus dados é muito importante para
        nós. Como tal, estabelecemos esta política de privacidade para
        explicar como coletamos, usamos e protegemos as informações que
        você nos fornece através de nosso site e plataforma de
        gerenciamento de negócios."
      />

      <div className="relative overflow-hidden bg-white py-16">
        <div className="relative px-6 lg:px-8">
          <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
            <h2>Coleta de informações</h2>
            <p>
              Coletamos informações quando você se registra em nossa plataforma,
              realiza uma compra, preenche um formulário ou entra em contato
              conosco. As informações coletadas podem incluir, mas não estão
              limitadas a, seu nome, endereço de e-mail, endereço, número de
              telefone e informações de cartão de crédito. Além disso, coletamos
              informações de navegação, como seu endereço IP e informações sobre
              seu uso da plataforma.
            </p>
            <h2>Uso das informações</h2>
            <p>
              As informações coletadas são usadas para personalizar sua
              experiência, melhorar nosso site e plataforma de gerenciamento de
              negócios, atender às suas solicitações de serviços e contatá-lo
              sobre ofertas especiais e novos produtos.
            </p>
            <h2>Segurança</h2>
            <p>
              Implementamos medidas de segurança para proteger suas informações
              contra acesso não autorizado, alteração, divulgação ou destruição.
              Nossas medidas de segurança incluem, mas não estão limitadas a,
              firewalls, criptografia e acesso restrito a dados.
            </p>
            <h2>Divulgação de informações</h2>
            <p>
              Não venderemos, trocaremos ou transferiremos suas informações
              pessoais para terceiros sem sua permissão, exceto quando
              necessário para cumprir uma obrigação legal ou para proteger
              nossos direitos.
            </p>
            <h2>Política de cookies</h2>
            <p>
              Nosso site e plataforma de gerenciamento de negócios usam cookies
              para melhorar sua experiência. Um cookie é um pequeno arquivo que
              é transferido para o seu computador quando você visita nosso site.
              Os cookies nos permitem reconhecê-lo quando você retorna e
              personalizar sua experiência.
            </p>
            <h2>Opções de privacidade</h2>
            <p>
              Você pode optar por não fornecer certas informações, mas isso pode
              impedir que você aproveite todos os recursos de nossa plataforma
              de gerenciamento de negócios.
            </p>
            <h2>Alterações na política de privacidade</h2>
            <p>
              Reservamo-nos o direito de modificar essa política de privacidade
              a qualquer momento. Qualquer alteração será publicada em nosso
              site e plataforma de gerenciamento de negócios. Se houver alguma
              alteração significativa, notificaremos você por e-mail ou através
              de uma notificação no site.
            </p>
            <h2>Contato</h2>
            <p>
              Se você tiver alguma dúvida ou preocupação sobre nossa política de
              privacidade, entre em contato conosco através do e-mail ou do
              número de telefone fornecidos{' '}
              <Link
                href="/contact"
                className="font-semibold text-orange-500 hover:text-orange-400"
              >
                na nossa página de contatos
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
