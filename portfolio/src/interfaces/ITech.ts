export interface ITech {
  id: number;
  badge: JSX.Element;
  name: string;
  className: string;
  description: string;
  stack:
    | 'Front-end'
    | 'Back-end'
    | 'Design'
    | 'Banco de dados'
    | 'Testes'
    | 'Outros';
}
