export interface EditorialResponse {
  estatusCode: number
  message: string
  data: Editorial[]
}

export interface Editorial {
  id: number
  name: string
  correspondenceAddress: string
  phone: string
  email: string
  maxBooks: number
}
