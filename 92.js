class Book {
    constructor(authorSurname, title, publicationYear) {
      this.authorSurname = authorSurname;
      this.title = title;
      this.publicationYear = publicationYear;
    }
  }
  
  let books = [
    new Book("Шевченко", "Кобзар", 1840),
    new Book("Франко", "Захар Беркут", 1883),
    new Book("Коцюбинський", "Тіні забутих предків", 1911),
    new Book("Гончар", "Собор", 1968),
    new Book("Довженко", "Зачарована Десна", 1957),
    new Book("Мирний", "Хіба ревуть воли, як ясла повні?", 1880),
    new Book("Григорович", "Інформатика", 2020)
  ];
  
  function findBookByTitle(books, title) {
    let foundBook = books.find(book => book.title === title);
    if (foundBook) {
      console.log(`Книга "${title}" знайдена. Автор: ${foundBook.authorSurname}, Рік видання: ${foundBook.publicationYear}.`);
    } else {
      console.log(`Книга з назвою "${title}" не знайдена.`);
    }
  }
  
  findBookByTitle(books, "Інформатика");  