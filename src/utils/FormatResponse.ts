interface IGenericResponse<T> {
  data: T,
  msg: string | null,
  status: boolean
}

// Formato genérico de resposta
class FormatResponse {
  public success<T>(data: T): IGenericResponse<T> {
    return {
      data: data,
      msg: null,
      status: true
    };
  }

  public error(message: string): IGenericResponse<null> {
    return {
      data: null,
      msg: message,
      status: false
    };
  }
}

export default new FormatResponse();
