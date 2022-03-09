export interface AuthorResponse {
  estatusCode: number;
  message: string;
  data: Author[];
}

export interface Author {
  id: number;
  fullName: string;
  birthdate: Date;
  originCity: string;
  email: string;
}
