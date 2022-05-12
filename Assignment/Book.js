/*
export class Book {
  constructor() {
    
  }
  
}

export const books = [];
*/

export class Book {
  constructor(title, author, description, pages, currentPage, read) {
      this.title = title;
      this.author = author;
      this.description = description;
      this.pages = pages;
      this.currentPage = 1;
      this.read = false;
  }
  readBook(page) {
    let currentPage = this.currentPage;
    if (page < 1 || page > this.pages) {
      return 0
    } else if (page >= 1 && page < this.pages) {
      currentPage = page;
    } else if (page == this.pages) {
      currentPage = page;
      this.read = true;
    }
  }
}

const book1 = new Book('Book 1', 'Ayo', 'Very good book', 10);
const book2 = new Book('Book 2', 'Jully', 'What the heck', 20);
const book3 = new Book('Book 3', 'Jetro', 'Excellent material', 50);

export const books = [book1, book2, book3];