import { Container, ContainerPrincipal, Content, TopicHeader } from "./styles";

type IDoc = {
  title: string;
  content?: string;
  contentTopics?: string[];
};

export const DocumentacaoScreen = () => {
  const Layout = (params: IDoc) => (
    <Container>
      <TopicHeader>
        <h5 id="intro">{params.title}</h5>
      </TopicHeader>
      {(params.content || params.contentTopics) && (
        <Content>
          {params.contentTopics ? (
            <ul>
              {params.contentTopics.map((item) => (
                <>
                  <li>{item}</li>
                </>
              ))}
            </ul>
          ) : (
            <p>{params.content}</p>
          )}
        </Content>
      )}
    </Container>
  );
  return (
    <ContainerPrincipal>
      <Layout
        title="Introdução"
        content="Sistema de consulta de CEP Viseu - criado para auxiliar na busca de
          endereços via CEP do Brasil. O Sistema roda tanto para versões MOBILE quanto para versões DESKTOP, tendo sua responsividade respeitada."
      />
      <Layout title="Desenvolvedor(a)" content="Loiane Dias Silvério" />
      <Layout
        title="Stack de desenvolvimento"
        contentTopics={["React.js", "Typescript", "Styled-components", "Axios"]}
      />
      <Layout
        title="Passo a Passo"
        contentTopics={[
          "Rodar `yarn` para atualizar as dependencias",
          "Rodar `yarn start` para rodar a aplicação",
        ]}
      />
      <Layout
        title="Melhores Práticas"
        contentTopics={[
          "Interfaces são preferíveis à tipos.",
          "As interfaces e tipos devem iniciar com a letra I. Ex.: IOperation.",
          "Não utilizar css inline.",
          "Utilizar as cores do StyleGuide.ts.",
          "Não utilizar any. Utilizar unknown apenas quando necessário.",
          "Utilizar os hooks do React ao invés de class components.",
          "Subir somente um .lock preferivel yarn.",
          "Prezar pelo clean code.",
        ]}
      />
      <Layout
        title="Documentações Api`s utilizadas"
        contentTopics={[
          "https://viacep.com.br/",
          "https://docs.awesomeapi.com.br/api-cep",
          "https://apicep.com/api-de-consulta/",
        ]}
      />
      <Layout
        title="Observações"
        content="Utilizar somente recursos nativos da IDE (recursos de
terceiros devem ser utilizados apenas via Boss. Não use componentes de terceiros que precise
ser instalado na IDE)."
      />
    </ContainerPrincipal>
  );
};
