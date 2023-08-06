import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const genres: Prisma.GenderCreateInput[] = [
  { label: 'Ação' }, // 1
  { label: 'Drama' }, // 2
  { label: 'Crime' }, // 3
  { label: 'Ficção' }, // 4
  { label: 'Poesia' }, // 5
  { label: 'Contos' }, // 6
  { label: 'Romance' }, // 7
  { label: 'Comédia' }, // 8
  { label: 'Fantasia' }, // 9
  { label: 'Infantil' }, // 10
  { label: 'Didático' }, // 11
  { label: 'Aventura' }, // 12
  { label: 'Autoajuda' }, // 13
  { label: 'Religioso' }, // 14
  { label: 'Quadrinhos' }, // 15
  { label: 'Biografia e Autobiografia' }, // 16
  { label: 'Filosofia' }, // 17
];

const books: Prisma.BookCreateInput[] = [{
  title: 'Engenharia de Software Moderna',
  image: 'https://engsoftmoderna.info/figs/capa/capa-3d-principal.jpg',
  sharing: 0,
  author: 'Marco Tulio Valente',
  synopsis: 'Portal e livro para ensino moderno de Engenharia de Software',
  averageReview: 0,
  genders: { connect: [{ id: 11 }] }
}, {
  title: 'One Piece Vol. 1',
  image: 'https://m.media-amazon.com/images/P/B07S1P3XDZ.01._SCLZZZZZZZ_SX500_.jpg',
  sharing: 0,
  author: 'Eiichiro Oda',
  synopsis: 'Gol D. Roger, um homem conhecido como o "Rei dos Piratas", deve ser executado pelo Governo Mundial. Mas pouco antes de sua morte, ele confirma a existência de um grande tesouro, One Piece, localizado em algum lugar dentro do vasto oceano conhecido como Grand Line. Anunciando que One Piece pode ser reivindicado por qualquer um digno o suficiente para alcançá-lo, o Rei dos Piratas é executado e a Grande Era dos Piratas começa. Vinte e dois anos depois, um jovem chamado Monkey D. Luffy está pronto para embarcar em sua própria aventura, em busca de One Piece e se esforçando para se tornar o novo Rei dos Piratas. Armado apenas com um chapéu de palha, um pequeno barco e um corpo elástico, ele embarca em uma jornada fantástica para reunir sua própria tripulação e um navio digno que os levará através da Grand Line para reivindicar o maior status em alto mar.',
  averageReview: 0,
  genders: { connect: [{ id: 1 }, { id: 9 }, { id: 12 }, { id: 15 }] }
}, {
  title: 'O nome do vento',
  image: 'https://m.media-amazon.com/images/P/B00A3CSX7M.01._SCLZZZZZZZ_SX500_.jpg',
  sharing: 0,
  author: 'Patrick Rothfuss',
  synopsis: 'Ninguém sabe ao certo quem é o herói ou o vilão desse fascinante universo criado por Patrick Rothfuss. Na realidade, essas duas figuras se concentram em Kote, um homem enigmático que se esconde sob a identidade de proprietário da hospedaria Marco do Percurso. Da infância numa trupe de artistas itinerantes, passando pelos anos vividos numa cidade hostil e pelo esforço para ingressar na escola de magia, O nome do vento acompanha a trajetória de Kote e as duas forças que movem sua vida: o desejo de aprender o mistério por trás da arte de nomear as coisas e a necessidade de reunir informações sobre o Chandriano – os lendários demônios que assassinaram sua família no passado. Quando esses seres do mal reaparecem na cidade, um cronista suspeita de que o misterioso Kote seja o personagem principal de diversas histórias que rondam a região e decide aproximar-se dele para descobrir a verdade. Pouco a pouco, a história de Kote vai sendo revelada, assim como sua multifacetada personalidade – notório mago, esmerado ladrão, amante viril, herói salvador, músico magistral, assassino infame. Nesta provocante narrativa, o leitor é transportado para um mundo fantástico, repleto de mitos e seres fabulosos, heróis e vilões, ladrões e trovadores, amor e ódio, paixão e vingança.',
  averageReview: 0,
  genders: { connect: [{ id: 1 }, { id: 9 }, { id: 12 }, { id: 4 }] }
}, {
  title: 'O magnífico livro dos dinossauros',
  image: 'https://m.media-amazon.com/images/I/5137d9izniL._SX370_BO1,204,203,200_.jpg',
  sharing: 0,
  author: 'Susaeta Ediciones',
  synopsis: 'Por mais incrível que possa parecer, os dinossauros viveram na Terra durante mais de 160 milhões de anos, enquanto o ser humano (Homo sapiens) está aqui há cerca de 300.000 anos. Como é que poderíamos nos esquecer deles? Descubra os primeiros dinossauros, que viveram durante o período Triássico, como o Herrerassauro e o Eorraptor, além dos imensos herbívoros de pescoço comprido do Jurássico, como o Diplodoco, e os grandes predadores do Cretáceo, como o Tiranossauro rex. Observe de perto esses animais pré-históricos!',
  averageReview: 0,
  genders: { connect: [{ id: 10 }, { id: 11 }, { id: 15 }] }
}, {
  title: 'Beyond The Story Uma história dos 10 anos de BTS',
  image: 'https://m.media-amazon.com/images/P/B0C8QT73WZ.01._SCLZZZZZZZ_SX500_.jpg',
  sharing: 0,
  author: 'Myeongseok Kang, BTS',
  synopsis: 'Publicado em comemoração ao aniversário de 10 anos do BTS. Histórias que vão além do que você já sabe sobre o BTS, incluindo fotos inéditas, QR codes dos vídeos e todas as informações sobre os álbuns!',
  averageReview: 0,
  genders: { connect: [{ id: 14 }, { id: 16 }] }
}, {
  title: 'A destruidora de casamentos',
  image: 'https://m.media-amazon.com/images/P/B0C7Z4MQB9.01._SCLZZZZZZZ_SX500_.jpg',
  sharing: 0,
  author: 'Mia Sosa',
  synopsis: 'Faltando apenas meses para deixar Washington D.C., Solange Pereira é recrutada para ajudar a prima na organização de um casamento. Parece um trabalho fácil… até que ela se depara com uma situação que a convence que o casal não está destinado um para o outro. O que uma romântica convicta como ela deve fazer? Interromper o casamento, é claro, e garantir que o noivo desprevenido não cometa o maior erro da sua vida.',
  averageReview: 0,
  genders: { connect: [{ id: 4 }, { id: 7 }, { id: 8 }] }
}, {
  title: 'Aquabook Bluey',
  image: 'https://m.media-amazon.com/images/I/51RdqL2bKeL._SX293_BO1,204,203,200_.jpg',
  sharing: 0,
  author: 'On Line Editora',
  synopsis: 'Livro de colorir inspirado na adorável série de animação "Bluey" que cativa o coração das crianças. Com ilustrações encantadoras dos personagens amados, este livro proporciona momentos de diversão e criatividade enquanto os pequenos fãs dão vida às aventuras da família Bluey.Dentro das páginas deste livro, as crianças encontrarão uma variedade de cenas emocionantes protagonizadas pela Bluey, sua família e seus amigos, esperando para serem preenchidas com cores vibrantes e alegres.',
  averageReview: 0,
  genders: { connect: [{ id: 10 }, { id: 13 }, { id: 15 }] }
}, {
  title: 'cura pelas palavras',
  image: 'https://m.media-amazon.com/images/P/B0BTTKZ5BN.01._SCLZZZZZZZ_SX500_.jpg',
  sharing: 0,
  author: 'rupi kaur',
  synopsis: 'Neste livro, Rupi Kaur - autora #1 do The New York Times - traz exercícios guiados de escrita criados por ela a fim de inspirar a criatividade e a cura. Esses exercícios podem ajudar você a explorar seus traumas, lutos, corações partidos, amor, cura e a celebração da vida.',
  averageReview: 0,
  genders: { connect: [{ id: 4 }, { id: 13 }] }
}, {
  title: 'A gente mira no amor e acerta na solidão',
  image: 'https://m.media-amazon.com/images/P/B09X211JBT.01._SCLZZZZZZZ_SX500_.jpg',
  sharing: 0,
  author: 'Ana Suy',
  synopsis: 'Escrito a partir de diálogos, A gente mira no amor e acerta na solidão, surgiu de experiências vividas pela autora em salas de aula, em sessões de análise (enquanto analisante ou analista), com amigos, em leituras de pesquisas teóricas. Neste livro, a psicanalista e professora Ana Suy quer, acima de tudo, continuar essa conversa contigo, leitor, sem a pretensão, no entanto, de ser um manual ou um tratado acadêmico sobre o tema.',
  averageReview: 0,
  genders: { connect: [{ id: 17 }, { id: 13 }, { id: 7 }] }
}, {
  title: 'A metamorfose',
  image: 'https://m.media-amazon.com/images/P/B009WW8J0K.01._SCLZZZZZZZ_SX500_.jpg',
  sharing: 0,
  author: 'Franz Kafka',
  synopsis: 'A metamorfose é a mais célebre novela de Franz Kafka e uma das mais importantes de toda a história da literatura. Sem a menor cerimônia, o texto coloca o leitor diante de um caixeiro-viajante - o famoso Gregor Samsa - transformado em inseto monstruoso. A partir daí, a história é narrada com um realismo inesperado que associa o inverossímil e o senso de humor ao que é trágico, grotesco e cruel na condição humana - tudo no estilo transparente e perfeito desse mestre inconfundível da ficção universal.',
  averageReview: 0,
  genders: { connect: [{ id: 2 }, { id: 4 }] }
}];

const users: Prisma.UserCreateInput[] = [
  { name: 'Admin - Fábio', email: 'fabio@admin.com', password: 'admin' },
  { name: 'Admin - Luana', email: 'luana@admin.com', password: 'admin' },
  { name: 'Admin - Bruno', email: 'bruno@admin.com', password: 'admin' },
  { name: 'Admin - Guilhermer', email: 'guilherme@admin.com', password: 'admin' }
];

async function main() {
  for (const gender of genres) {
    await prisma.gender.create({ data: gender });
  }

  for (const book of books) {
    await prisma.book.create({ data: book });
  }

  for (const user of users) {
    await prisma.user.create({ data: user });
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
