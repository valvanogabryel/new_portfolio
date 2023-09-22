export interface ITech {
  id: number;
  badge: JSX.Element;
  name: string;
  className: string;
  description: string;
  stack:
    | "Front-end"
    | "Back-end"
    | "UI/UX"
    | "Banco de dados"
    | "Versionamento"
    | "Testes";
}
