import { useState } from "react";
import { CepService } from "../../services/cep";
import {
  Button,
  Container,
  ContainerContent,
  ContainerFilter,
  ContainerTypography,
  Principal,
  TypograpyBold,
} from "./styles";
import { InputComponent } from "../../components/Input";
import { cepMask, getNumbersFromString } from "../../utils/format";
import { ICepPayload } from "../../services/cep/types";
import { ImFilesEmpty } from "react-icons/im";
import { TbMoodEmpty } from "react-icons/tb";

export const Home = () => {
  const NAO_INFORMADO = "Não informado";
  const [cep, setCep] = useState("");
  const [dataCep, setDataCep] = useState<ICepPayload>();
  const [empty, setEmpty] = useState(false);

  const buscarCep = async () => {
    setEmpty(false);
    if (!cep || getNumbersFromString(cep).length < 8) {
      return;
    }

    await CepService.viaCepRequest(cep)
      .then((resposta) => {
        setDataCep(resposta.data);
      })
      .catch(async function () {
        await CepService.apiCepRequest(cep)
          .then((resposta) => {
            setDataCep(resposta.data);
          })
          .catch(async function () {
            await CepService.awesomeCepRequest(cep)
              .then((resposta) => {
                setDataCep(resposta.data);
              })
              .catch(async function (err) {
                setEmpty(true);
              });
          });
      });
  };

  const onChangeInputCep = (value?: string) => {
    if (!value) {
      return;
    }
    setCep(value);
  };

  const copyToClipboard = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      alert("Texto copiado para a área de transferência");
    } catch (err) {
      alert("Falha ao copiar o texto");
    }
  };

  const ContentCep = () => {
    const TypograpyFormat = (title: string, value: string) => {
      return (
        <>
          <ContainerTypography>
            <TypograpyBold>{title}</TypograpyBold>
            {value}
            <ImFilesEmpty
              className="copyBtn"
              onClick={() => copyToClipboard(value)}
            />
          </ContainerTypography>
        </>
      );
    };

    return (
      <ContainerContent>
        {TypograpyFormat(
          "CEP:",
          dataCep?.cep ?? dataCep?.code ?? NAO_INFORMADO
        )}
        {TypograpyFormat(
          "LOGRADOURO:",
          dataCep?.logradouro ?? dataCep?.address ?? NAO_INFORMADO
        )}
        {TypograpyFormat("COMPLEMENTO:", dataCep?.complemento ?? NAO_INFORMADO)}
        {TypograpyFormat("UNIDADE:", dataCep?.unidade ?? NAO_INFORMADO)}
        {TypograpyFormat(
          "BAIRRO:",
          dataCep?.bairro ?? dataCep?.district ?? NAO_INFORMADO
        )}
        {TypograpyFormat(
          "LOCALIDADE:",
          dataCep?.localidade ?? dataCep?.city ?? NAO_INFORMADO
        )}
        {TypograpyFormat("UF:", dataCep?.uf ?? dataCep?.state ?? NAO_INFORMADO)}
        {TypograpyFormat("ESTADO:", dataCep?.estado ?? NAO_INFORMADO)}
        {TypograpyFormat("REGIÃO:", dataCep?.regiao ?? NAO_INFORMADO)}
        {TypograpyFormat(
          "IBGE:",
          dataCep?.ibge ?? dataCep?.city_ibge ?? NAO_INFORMADO
        )}
        {TypograpyFormat("GIA:", dataCep?.gia ?? NAO_INFORMADO)}
        {TypograpyFormat("DDD:", dataCep?.ddd ?? NAO_INFORMADO)}
        {TypograpyFormat("SIAFI:", dataCep?.siafi ?? NAO_INFORMADO)}
        {TypograpyFormat("LAT:", dataCep?.lat ?? NAO_INFORMADO)}
        {TypograpyFormat("LNG:", dataCep?.lng ?? NAO_INFORMADO)}
      </ContainerContent>
    );
  };

  return (
    <>
      <Container>
        <ContainerFilter>
          <h5>Consulta CEP</h5>
          <InputComponent
            name="cep"
            label={"Cep*"}
            placeholder="Digite o cep"
            mask={cepMask}
            onChange={onChangeInputCep}
            maxLength={9}
          />
          <Button onClick={buscarCep}>Pesquisar</Button>
        </ContainerFilter>
      </Container>
      {!empty && dataCep && <ContentCep />}
      {empty && (
        <Principal>
          <TbMoodEmpty className="emptyIcon" />
          <span>
            Não foram encontradas informações para o CEP informado! Tente
            novamente.
          </span>
        </Principal>
      )}
    </>
  );
};
