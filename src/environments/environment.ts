export const environment = {
  production: false,
  nexosService: {
    endpoint: 'https://localhost:44366/api/',
    editorial: {
      create: 'Editorial/CreateNewEditorial',
      search: 'Editorial/GetEditorial',
    },
    author: {
      create: 'author/CreateAuthor',
      search: 'author/GetAuthors',
    },
    book: {
      create: 'book/CreateBook',
      search: 'book/GetTotalBooks',
      searchByAuthor: 'book/GetBookByAuthor?authorName=',
      searchByTitle: 'book/GetBookByTitle?title=',
      searchByYear: 'book/GetBookByYear?year=',
    }
  }
};
