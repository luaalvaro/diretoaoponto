import { Button, Flex, List, ListIcon, ListItem, Text, Link } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { FcCheckmark } from 'react-icons/fc'

const Home = () => {
  return (
    <>
      <Head>
        <title>Direto ao ponto - Programação web com Next.JS + Supabase</title>
      </Head>
      <Flex
        background="linear-gradient(180deg, #363636 0%, rgba(0, 0, 0, 0.9) 100%)"
        minHeight="100vh"
        direction="column"
        fontFamily="Montserrat"
      >
        <Flex
          width="100%"
          background="#FFB800"
          height="36px"
          align="center"
          justify="center"
          fontSize="14px"
        >
          <Text
            fontWeight={700}
            mr="10px"
            color="wine"
          >
            Oferta liberada!!!
          </Text>
          <Text
            textDecoration="line-through 2px"
          >
            De R$ 299,00
          </Text>
          <Text>
            &nbsp;por 12x de R$ 7,80
          </Text>
        </Flex>
        <Flex
          width="100%"
          maxWidth="800px"
          px="25px"
          mx="auto"
          direction="column"
        >
          <Flex
            align="center"
            justify="center"
            mt="25px"
            mb="10px"
          >
            <Image src="/logo.svg" alt="Logo" width={224} height={82} />
          </Flex>

          <Text
            fontSize="18px"
            fontWeight={300}
            letterSpacing="-.5px"
            color="rgba(255,255,255,0.75)"
            textAlign="center"
            mt="-5px"
            lineHeight="16px"
          >
            Programação web com Next.JS + Supabase
          </Text>

          <Flex
            my="30px"
          >
            <iframe
              width="100%"
              height="199px"
              src="https://www.youtube.com/embed/jzKaA2nMLKc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Flex>

          <Link
            href="https://sun.eduzz.com/1288359"
            background="#3EF0B3"
            color="#000"
            height="44px"
            fontSize="14px"
            fontWeight={600}
            boxShadow="2px 3px 0 #363636"
            borderRadius="8px"
            textAlign="center"

            _hover={{
              background: '#2FC893'
            }}
          >
            GARANTIR MEU ACESSO<br /> DIRETO AO PONTO!
          </Link>

          <Text
            fontSize="12px"
            color="#fff"
            mt="5px"
            textAlign="center"
            opacity={0.8}
          >
            12x R$ 7,80 ou R$ 78,00 à vista
          </Text>

          <Text
            fontSize={20}
            color="#fff"
            fontWeight={600}
            mt="30px"
          >
            Por quê direto ao ponto?
          </Text>
          <Text
            mt="10px"
            color="#fff"
            textAlign="justify"
          >
            Muita gente me pergunta, como foi que eu consegui sair <strong>do zero ao meu primeiro emprego</strong> como desenvolvedor web tão rapidamente.
          </Text>
          <Text
            mt="10px"
            color="#fff"
            textAlign="justify"
          >
            Além disso, minha primeira vaga como programador já foi uma vaga intermediária pagando valores que passam facilmente de <b>5 salários mínimos...</b>
          </Text>
          <Text
            mt="10px"
            color="#fff"
            textAlign="justify"
          >
            E a verdade é que a constância na tomada de decisões foi o que me fez conseguir alcançar essas metas de forma rápida.
          </Text>
          <Text
            mt="10px"
            color="#fff"
            textAlign="justify"
          >
            Diante dos meses que me dediquei estudando, algo que me fez evoluir muito foi praticar criandode diversas aplicações
          </Text>
          <Text
            mt="10px"
            color="#fff"
            textAlign="justify"
          >
            Dessa forma eu montei um <b>portfólio simples, porém cheio de experiência</b>, e esse foi um dos difereciais nas minhas entrevistas de emprego.
          </Text>
          <Text
            mt="10px"
            color="#fff"
            textAlign="justify"
          >
            Eu percebi que existem certos padrões na vida de um desenvolvedor web, e eu decidi de uma forma minha,
          </Text>
          <Text
            mt="10px"
            color="#fff"
            textAlign="justify"
          >
            agregar esses valores em forma de um treinamento rápido para você <strong>criar uma aplicação totalmente do zero</strong>,
          </Text>
          <Text
            mt="10px"
            color="#fff"
            textAlign="justify"
          >
            para ter mais um projeto para agregar no seu portfólio, e te ajudar a conquistar aquele <strong>tão sonhado emprego como desenvolvedor</strong>
          </Text>

          <Text
            mt="10px"
            color="#fff"
            textAlign="justify"
            mb="20px"
          >
            Serão 11 aulas onde vamos passar por todos os programas e instalações necessários para acompanhar a criação da aplicação.
          </Text>

          <Link
            href="https://sun.eduzz.com/1288359"
            background="#3EF0B3"
            color="#000"
            height="44px"
            fontSize="14px"
            fontWeight={600}
            boxShadow="2px 3px 0 #363636"
            borderRadius="8px"
            textAlign="center"

            _hover={{
              background: '#2FC893'
            }}
          >
            GARANTIR MEU ACESSO<br /> DIRETO AO PONTO!
          </Link>
          <Text
            fontSize="12px"
            color="#fff"
            mt="5px"
            textAlign="center"
            opacity={0.8}
          >
            12x R$ 7,80 ou R$ 78,00 à vista
          </Text>

          <Flex
            mt="20px"
            bg="#fff"
            padding="5"
            borderRadius="4px"
            mb="30px"
          >
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FcCheckmark} color='green.500' />
                Programas e instalações necessarias
              </ListItem>
              <ListItem>
                <ListIcon as={FcCheckmark} color='green.500' />
                Iniciando e configurando projeto Next.JS e Chakra UI
              </ListItem>
              <ListItem>
                <ListIcon as={FcCheckmark} color='green.500' />
                Conhecendo o figma e criando o prototipo da nossa aplicação
              </ListItem>
              <ListItem>
                <ListIcon as={FcCheckmark} color='green.500' />
                Criando todos os componentes necessários com Chakra UI
              </ListItem>
              <ListItem>
                <ListIcon as={FcCheckmark} color='green.500' />
                Criando as interações dos componentes
              </ListItem>
              <ListItem>
                <ListIcon as={FcCheckmark} color='green.500' />
                Capturando as informações do Formulário
              </ListItem>
              <ListItem>
                <ListIcon as={FcCheckmark} color='green.500' />
                Configurando supabase e criando inserção e captura dos dados
              </ListItem>
              <ListItem>
                <ListIcon as={FcCheckmark} color='green.500' />
                Atualização em tempo real e deletar conta
              </ListItem>
              <ListItem>
                <ListIcon as={FcCheckmark} color='green.500' />
                Atualizar informações da conta
              </ListItem>
              <ListItem>
                <ListIcon as={FcCheckmark} color='green.500' />
                Revisão final e deploy da aplicação
              </ListItem>
            </List>
          </Flex>

          <Text
            mt="10px"
            color="#fff"
            textAlign="justify"
          >
            Todas as aulas são comentadas, tentando ser o mais direto possível.
          </Text>
          <Text
            mt="10px"
            color="#fff"
            textAlign="justify"
          >
            Essa aplicação estava presente no meu portfólio quando eu fui contratado, e com certeza ela pode ser um diferencial nas suas próximas entrevistas!
          </Text>
          <Text
            mt="10px"
            color="#fff"
            textAlign="justify"
          >
            Além disso, como essa é uma ideia nova, que saiu da minha cabeça, <strong>eu te dou uma garantia incondicional de 07 dias</strong>
          </Text>
          <Text
            mt="10px"
            color="#fff"
            textAlign="justify"
          >
            Se você fizer o treinamento e achar que o projeto não vale o que você pagou, basta pedir o estorno do seu valor, e eu ainda vou te agradecer por ter confiado em mim!!
          </Text>
          <Text
            mt="10px"
            color="#fff"
            textAlign="justify"
          >
            Sem muita enrolação, eu estou liberando uma promoção que vai ficar disponível pelos próximos 30 minutos,
          </Text>
          <Text
            mt="10px"
            color="#fff"
            textAlign="justify"
          >
            E este treinamento que estava sendo vendido por 299,00 reais, vai estar disponível por apenas 78 reais
          </Text>
          <Text
            mt="10px"
            color="#fff"
            textAlign="justify"
          >
            E você ainda pode <strong>parcelar em 12x de 7,80 no cartão de crédito...</strong>
          </Text>
        </Flex>
        <Flex
          width="100%"
          maxWidth="800px"
          px="25px"
          mx="auto"
          direction="column"
        >
          <Flex
            my="30px"
            direction={["column", "column", "row", "row", "row"]}
            justify={["initial", "initial", "center", "center", "center"]}
            gridGap="20px"
          >
            <Flex
              gridGap="10px"
              align="center"
            >
              <Image src="/seguro.svg" alt="Compra segura" width={35} height={40} />

              <Text
                fontSize="12px"
                color="#318834"
              >
                COMPRA<br />
                100% SEGURA
              </Text>
            </Flex>
            <Flex
              gridGap="10px"
              align="center"
            >
              <Image src="/seguro2.svg" alt="Compra segura" width={30} height={40} />

              <Text
                fontSize="12px"
                color="#318834"
              >
                PRIVACIDADE<br />
                PROTEGIDA
              </Text>
            </Flex>
            <Flex
              gridGap="10px"
              align="center"
            >
              <Image src="/seguro3.svg" alt="Compra segura" width={28} height={21} />

              <Text
                fontSize="12px"
                color="#318834"
              >
                GODADDY ®<br />
                VERIFICADO E PROTEGIDO
              </Text>
            </Flex>
          </Flex>

          <Flex
            direction="column"
          >
            <Link
              href="https://sun.eduzz.com/1288359"
              background="#3EF0B3"
              color="#000"
              height="44px"
              fontSize="14px"
              fontWeight={600}
              boxShadow="2px 3px 0 #363636"
              borderRadius="8px"
              textAlign="center"

              _hover={{
                background: '#2FC893'
              }}
            >
              GARANTIR MEU ACESSO<br /> DIRETO AO PONTO!
            </Link>
            <Text
              fontSize="12px"
              color="#fff"
              mt="5px"
              textAlign="center"
              opacity={0.8}
            >
              12x R$ 7,80 ou R$ 78,00 à vista
            </Text>


            <Flex
              my="30px"
              borderTop="1px solid rgba(255,255,255,0.1)"
              direction="column"
            >
              <Text
                mt="10px"
                color="#fff"
                fontSize="12px"
                textAlign="justify"
              >
                Esta formação tem como objetivo construir do zero, uma aplicação para controle financeiro, utilizando o next js e supabase. O instrutor Luã Álvaro, mostra desde os programas necessários para seguir com o aprendizado, como o processo de instalação do next js e todas as etapas necessárias para a criação de uma aplicação web que se comunica com um banco de dados, e ao final do curso, ainda aprendemos a fazer o deploy da aplicação para os servidores da vercel!
              </Text>

              <Text
                mt="10px"
                color="#fff"
                fontSize="12px"
                textAlign="justify"
              >
                Os pagamentos são processados pela Eduzz Tecnologia LTDA. E mediante qualquer situação, você tem 07 Dias para pedir o reembolso 100% grátis.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default Home