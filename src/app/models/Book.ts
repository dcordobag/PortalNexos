export interface BookResponse {
  estatusCode: number
  message: string
  data: Book[]
}

export interface Book {
  id: number
  title: string
  year: string
  genre: string
  pagesNumber: number
  editorialID: number
  authorID: number
  editorial: Editorial
  author: Author
}

export interface Editorial {
  id: number
  name: string
  correspondenceAddress: string
  phone: string
  email: string
  maxBooks: number
}

export interface Author {
  id: number
  fullName: string
  birthdate: string
  originCity: string
  email: string
}
