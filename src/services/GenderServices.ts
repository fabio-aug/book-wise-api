import { PrismaClient } from '@prisma/client';
import { IGenderDto } from '../interfaces/GenderInterface';

const PC = new PrismaClient();

async function getAll(): Promise<IGenderDto[]> {
  const data = await PC.gender.findMany();
  return data;
}

export default { getAll };
