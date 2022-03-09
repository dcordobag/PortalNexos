export const environment = {
  production: true,
  nexosService: {
    endpoint: '#{nexosService.endpoint}#',
    editorial: {
      create: 'Editorial/CreateNewEditorial',
      search: '/Editorial/GetEditorial',
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
