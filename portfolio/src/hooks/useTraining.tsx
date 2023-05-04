import { ITraining } from "../interfaces/ITraining";

const useTraining = () => {
  const vitrineDevLink: string = 'https://cursos.alura.com.br/vitrinedev/valvanogabryel';

  const training: ITraining[] = [
    {
      id: 1,
      course: 'Formação React com JavaScript',
      duration: 65,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate: 'https://cursos.alura.com.br/degree/certificate/a17c9bc7-431a-4bab-b603-4cf28f7e8761',
    },
    {
      id: 2,
      course: 'Programador Full-Stack JavaScript',
      duration: 70,
      platform: 'OneBitCode',
    },
    {
      id: 3,
      course: 'Formação TypeScript',
      duration: 31,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate: 'https://cursos.alura.com.br/degree/certificate/50344db1-d874-4d6a-a66b-6170d8898310',
    },
    {
      id: 4,
      course: 'Formação React com TypeScript',
      duration: 83,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate: 'https://cursos.alura.com.br/degree/certificate/3bdfc078-79ed-4743-bbf4-4b43bb2e6ee3',
    },
    {
      id: 5,
      course: 'React: Testando seus componentes',
      duration: 10,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate: 'https://cursos.alura.com.br/certificate/3352658b-b281-492a-849e-632ac03dc839',
    },
    {
      id: 6,
      course: 'Formação JavaScript para Front-end',
      duration: 60,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate: 'https://cursos.alura.com.br/degree/certificate/7d9b096e-c2fa-4659-a939-a71ff592f4e3',
    },
    {
      id: 7,
      course: 'Formação HTML & CSS',
      duration: 65,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate: 'https://cursos.alura.com.br/degree/certificate/828839e6-6c50-4198-bec7-a18bd52cf4f0',
    },
    {
      id: 8,
      course: 'HTTP: Entendendo a web por baixo dos panos',
      duration: 14,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate: 'https://cursos.alura.com.br/certificate/b3d7e3f2-46b8-4a5a-8c7a-94d51daa9933',
    },
    {
      id: 9,
      course: 'Impulsione sua aplicação React e consuma APIs',
      duration: 42,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate: 'https://cursos.alura.com.br/degree/certificate/21945220-5d3a-4dc0-a215-9b8d5879fea7',
    },
  ];

  return training;

}

export default useTraining;