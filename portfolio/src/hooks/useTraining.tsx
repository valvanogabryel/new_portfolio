import { ITraining } from "../interfaces/ITraining";

const useTraining = () => {
  const training: ITraining[] = [
    {
      id: 1,
      course: 'Formação React com JavaScript',
      platform: 'Alura',
      text: 'Conjunto de cursos que me apresentaram a biblioteca mais popular do mercado!',
      link: 'https://cursos.alura.com.br/vitrinedev/valvanogabryel'
    },
    {
      id: 2,
      course: '',
      platform: 'OneBitCode',
      text: ''
    },
    {
      id: 3,
      course: '',
      platform: 'RocketSeat',
      text: ''
    }
  ];

  return training;

}

export default useTraining;