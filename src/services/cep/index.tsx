import { applyMask, cepMask, getNumbersFromString } from "../../utils/format";
import { ICepPayload } from "./types";
import axios, { AxiosResponse } from "axios";

export class CepService {
  static async viaCepRequest(cep: string): Promise<AxiosResponse<ICepPayload>> {
    if (cep.indexOf("-") !== -1) {
      cep = getNumbersFromString(cep);
    }

    return axios.get(`https://viacep.com.br/ws/${cep}/json`);
  }

  static async apiCepRequest(cep: string): Promise<AxiosResponse<ICepPayload>> {
    if (cep.indexOf("-") === -1) {
      cep = applyMask(cep, cepMask);
    }

    return axios.get(`https://cdn.apicep.com/file/apicep/${cep}.json`);
  }

  static async awesomeCepRequest(
    cep: string
  ): Promise<AxiosResponse<ICepPayload>> {
    if (cep.indexOf("-") !== -1) {
      cep = getNumbersFromString(cep);
    }

    return axios.get(`https://cep.awesomeapi.com.br/json/${cep}`);
  }
}
