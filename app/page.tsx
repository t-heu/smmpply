import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import Link from "next/link"
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg px-3 py-1 text-sm bg-blue-400 text-white">
                Bem-vindo a SMMPPLY
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simplifique Sua Vida com Nossos Serviços de Limpeza!</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Bem-vindo à solução para um lar limpo e organizado, sem o estresse da limpeza! 
              Nossos serviços profissionais de limpeza residencial estão aqui para tornar sua vida mais 
              fácil. Deixe-nos cuidar da sujeira enquanto você aproveita mais tempo livre para as coisas que 
              realmente importam. Agende uma limpeza hoje mesmo e descubra como podemos transformar seu espaço em um 
              ambiente impecável!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-12 md:py-24 lg:py-32">
        <div className="absolute inset-0 w-full bg-gray-900/10 pointer-events-none dark:bg-gray-50/10" />
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/imgA.jpg"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">Lista de Serviços</h3>
                <p className="max-w-prose text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Conheça nossos serviços:
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Limpeza geral.
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Limpeza profunda.
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Limpeza pós-reforma.
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Limpeza parcial.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg px-3 py-1 text-sm bg-blue-400 text-white">Testemunhas</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Garantia de Satisfação</h2>
            </div>
            <div className="max-w-[700px] space-y-4">
              <div className="grid items-center gap-4 lg:grid-cols-2 lg:gap-8">
                <div className="flex items-center space-x-4">
                  <Image
                    alt="Avatar"
                    className="rounded-full overflow-hidden object-cover object-center"
                    height="80"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    style={{
                      aspectRatio: "80/80",
                      objectFit: "cover",
                    }}
                    width="80"
                  />
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-semibold">Alice Johnson</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">CEO, Stellar Industries</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  Aqui entendemos a importância de um ambiente limpo e saudável em sua casa. Nossa equipe de profissionais dedicados está empenhada em fornecer serviços de limpeza residencial excepcionais, adaptados às suas necessidades individuais. Garantimos que cada cantinho de sua casa seja tratado com o máximo cuidado e atenção aos detalhes. Se, por qualquer motivo, você não estiver completamente satisfeito com nosso serviço, não hesite em nos informar. Sua satisfação é nossa prioridade número um, e faremos tudo o que estiver ao nosso alcance para garantir que sua experiência conosco seja nada menos que perfeita. Conte conosco para manter sua casa limpa e confortável, para que você possa desfrutar de momentos preciosos com sua família e amigos, sabendo que está em boas mãos.
                  </p>
                </div>
              </div>
              <div className="grid items-center gap-4 lg:grid-cols-2 lg:gap-8">
                <div className="flex items-center space-x-4">
                  <Image
                    alt="Avatar"
                    className="rounded-full overflow-hidden object-cover object-center"
                    height="80"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    style={{
                      aspectRatio: "80/80",
                      objectFit: "cover",
                    }}
                    width="80"
                  />
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-semibold">Bob Smith</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">CTO, Tech Innovators</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  Nossa missão é proporcionar a você uma casa limpa e fresca que você se orgulhe de chamar de lar. Estamos comprometidos em oferecer serviços de limpeza residencial da mais alta qualidade, utilizando produtos e técnicas seguras e eficazes. Nosso objetivo é exceder suas expectativas em cada visita. Se, por qualquer motivo, você não estiver completamente satisfeito com nosso serviço, entre em contato conosco imediatamente. Estamos aqui para garantir sua satisfação e faremos tudo ao nosso alcance para corrigir qualquer problema. Sua confiança é nossa prioridade, e estamos empenhados em construir relacionamentos duradouros baseados na qualidade e na confiança.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Formulário de Contato</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Para solicitar um orçamento ou agendar uma limpeza.
              </p>
            </div>
            <form className="grid max-w-sm gap-4 mx-auto text-left">
              <div className="grid gap-2 grid-cols-2">
                <div className="grid gap-2">
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-50" htmlFor="name">
                    Nome
                  </label>
                  <Input id="name" placeholder="Seu nome" required />
                </div>
                <div className="grid gap-2">
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-50" htmlFor="name">
                    Sobrenome
                  </label>
                  <Input id="sobrenome" placeholder="Sobrenome" required />
                </div>
              </div>
              <div className="grid gap-2">
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-50" htmlFor="email">
                  Email
                </label>
                <Input id="email" placeholder="Seu email" required type="email" />
              </div>
              <div className="grid gap-2">
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-50" htmlFor="message">
                  Menssagem
                </label>
                <Textarea id="message" placeholder="Sua menssagem" required />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="grid gap-2">
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-50" htmlFor="name">
                    CEP
                  </label>
                  <Input id="cep" placeholder="CEP" required />
                </div>
                <div className="grid gap-2">
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-50" htmlFor="name">
                    Endereço
                  </label>
                  <Input id="endereco" placeholder="Endereço" required />
                </div>
                <div className="grid gap-2">
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-50" htmlFor="name">
                    País
                  </label>
                  <Input id="pais" placeholder="País" required />
                </div>
                <div className="grid gap-2">
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-50" htmlFor="name">
                    Cidade
                  </label>
                  <Input id="cidade" placeholder="Cidade" required />
                </div>
                <div className="grid gap-2">
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-50" htmlFor="name">
                    Bairro
                  </label>
                  <Input id="bairro" placeholder="Bairro" required />
                </div>
                <div className="grid gap-2">
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-50" htmlFor="name">
                  Número
                  </label>
                  <Input id="number" placeholder="Número" required />
                </div>
              </div>
              <Button className="w-full bg-blue-400" type="submit">
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="w-full py-12">
        <div className="container flex flex-col items-center gap-2 text-center md:flex-row md:justify-between md:gap-4 lg:gap-6">
          <div className="flex items-center gap-2">
            <Image
              alt="Logo"
              height="40"
              src="/logo.png"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-400">
              SMMPPLY
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <Link className="p-2 rounded-full hover:bg-gray-100" href="#">
              <FacebookIcon className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link className="p-2 rounded-full hover:bg-gray-100" href="#">
              <TwitterIcon className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link className="p-2 rounded-full hover:bg-gray-100" href="#">
              <InstagramIcon className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
          <div className="space-y-2 text-xs md:flex-2 md:order-3 md:text-right lg:text-base">
            <p>
              <strong>Telefone:</strong>
              +1 (123) 456-7890{"\n                  "}
            </p>
            <p>
              <strong>E-mail:</strong>
              contact@smmpply.com{"\n                  "}
            </p>
          </div>
          <div className="space-y-2 text-xs md:flex-1 md:order-2 lg:text-base">
            <p>© 2023 SMMPPLY. Todos os direitos reservados.</p>
            <p>
              <Link className="underline" href="#">
                Política de Privacidade
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
