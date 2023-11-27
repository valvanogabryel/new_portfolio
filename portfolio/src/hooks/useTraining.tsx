import { ITraining } from '../interfaces/ITraining';

const useTraining = () => {
  const vitrineDevLink: string =
    'https://cursos.alura.com.br/vitrinedev/valvanogabryel';

  const training: ITraining[] = [
    // ! BOTAR ISSO (TODOS OS CURSOS, CERTIFICADO COMPLETO) EM OUTRO LUGAR, COMO DESTAQUE!!!!!!!!!!!!!!!!!!!!!!!!!!
    // {
    //   id: 1,
    //   course: 'Certificado completo (alura)',
    //   duration: 1.117,
    //   platform: 'Alura',
    //   link: vitrineDevLink,
    //   certificate:
    //     'https://cursos.alura.com.br/user/valvanogabryel/fullCertificate/a9cc927a70c745a72fd423c6f0e94378',
    // },
    {
      id: 2,
      course: 'Formação React com TypeScript',
      duration: 83,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate:
        'https://cursos.alura.com.br/degree/certificate/3bdfc078-79ed-4743-bbf4-4b43bb2e6ee3',
    },
    {
      id: 3,
      course: 'Formação TypeScript',
      duration: 31,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate:
        'https://cursos.alura.com.br/degree/certificate/50344db1-d874-4d6a-a66b-6170d8898310',
    },
    {
      id: 4,
      course: 'Formação React com JavaScript',
      duration: 65,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate:
        'https://cursos.alura.com.br/degree/certificate/a17c9bc7-431a-4bab-b603-4cf28f7e8761',
    },
    {
      id: 5,
      course: 'Formação JavaScript Back-end',
      duration: 74,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate:
        'https://cursos.alura.com.br/degree/certificate/5adfa124-d759-49c1-84cb-c08c14ab13d2',
    },
    {
      id: 6,
      course: 'Formação APIs com Node.js & Express',
      duration: 74,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate:
        'https://cursos.alura.com.br/degree/certificate/b1c3a06e-6124-479c-ba17-d60a47ed7dbb',
    },
    {
      id: 7,
      course: 'Formação Autenticação, testes e segurança em Node.js',
      duration: 51,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate:
        'https://cursos.alura.com.br/degree/certificate/a5812cc4-4c6d-4457-99db-2051583ba8bc',
    },
    {
      id: 8,
      course: 'Formação SQL com PostgreSQL',
      duration: 46,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate:
        'https://cursos.alura.com.br/degree/certificate/4e5e179e-e149-4e67-87a4-a872669a1677',
    },
    {
      id: 9,
      course: 'React: Testando seus componentes',
      duration: 10,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate:
        'https://cursos.alura.com.br/certificate/3352658b-b281-492a-849e-632ac03dc839',
    },
    {
      id: 10,
      course: 'Formação JavaScript para Front-end',
      duration: 60,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate:
        'https://cursos.alura.com.br/degree/certificate/7d9b096e-c2fa-4659-a939-a71ff592f4e3',
    },
    {
      id: 11,
      course: 'Formação Figma',
      duration: 29,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate:
        'https://cursos.alura.com.br/degree/certificate/79247427-69a5-4d43-b94f-f2509d64d2fc',
    },
    {
      id: 12,
      course: 'Formação Design System',
      duration: 29,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate:
        'https://cursos.alura.com.br/degree/certificate/79247427-69a5-4d43-b94f-f2509d64d2fc',
    },
    {
      id: 13,
      course: 'Formação HTML & CSS',
      duration: 65,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate:
        'https://cursos.alura.com.br/degree/certificate/828839e6-6c50-4198-bec7-a18bd52cf4f0',
    },

    {
      id: 14,
      course: 'Impulsione sua aplicação React e consuma APIs',
      duration: 42,
      platform: 'Alura',
      link: vitrineDevLink,
      certificate:
        'https://cursos.alura.com.br/degree/certificate/21945220-5d3a-4dc0-a215-9b8d5879fea7',
    },
    {
      id: 15,
      course: 'Programador Full-Stack JavaScript',
      duration: 70,
      platform: 'OneBitCode',
      link: 'https://pro.onebitcode.com/',
    },
  ];

  return training;
};

export default useTraining;
