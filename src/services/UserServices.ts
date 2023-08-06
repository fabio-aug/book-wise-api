import { PrismaClient } from '@prisma/client';
import { IUserDto, ICreateUserInput, ILoginUserInput } from '../interfaces/UserInterfaces';

const PC = new PrismaClient();

async function create(params: ICreateUserInput): Promise<IUserDto> {
  const data = await PC.user.create({
    data: {
      email: params.email,
      name: params.name,
      password: params.password
    }
  });
  return data;
}

async function login(params: ILoginUserInput): Promise<IUserDto> {
  const data = await PC.user.findUnique({
    where: {
      email: params.email,
    },
    include: {
      reviews: true
    }
  });

  if (data === null) throw new Error('Email não encontrado!');

  if (data?.password !== params.password) throw new Error('Senha incorreta!');

  return data;
}

export default { create, login };
