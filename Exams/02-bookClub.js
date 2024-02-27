class BookClub {
  constructor(library) {
    this.library = library;
    this.books = [];
    this.members = [];
  }

  addBook(title, author) {
    const foundTitle = this.books.find((p) => p.title === title);
    if (foundTitle) {
      return `The book "${title}" by ${author} is already in ${this.library} library.`;
    } else {
      this.books.push({ title, author });
      return `The book "${title}" by ${author} has been added to ${this.library} library.`;
    }
  }

  addMember(memberName) {
    if (this.members.includes(memberName)) {
      return `Member ${memberName} is already a part of the book club.`;
    } else {
      this.members.push(memberName);
      return `Member ${memberName} has been joined to the book club.`;
    }
  }

  assignBookToMember(memberName, bookTitle) {
    const foundMember = this.members.find((p) => p === memberName);
    let titleIdx = -1;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].title === bookTitle) {
        titleIdx = i;
        break;
      }
    }
    if (!foundMember) {
      throw new Error(`Member ${memberName} not found.`);
    }
    if (titleIdx === -1) {
      throw new Error(`Book "${bookTitle}" not found.`);
    } else {
      const assignedBook = this.books[titleIdx].title;
      const author = this.books[titleIdx].author;
      this.books.splice(titleIdx, 1);
      return `Member ${memberName} has been assigned the book "${assignedBook}" by ${author}.`;
    }
  }
  generateReadingReport() {
    if (this.members.length <= 0) {
      return "No members in the book club.";
    }
    if (this.books.length <= 0) {
      return "No available books in the library.";
    } else {
      let result = [];
      result.push(`Available Books in ${this.library} library:`);

      for (let { title, author } of this.books) {
        result.push(`"${title}" by ${author}`);
      }
      return result.join("\n");
    }
  }
}

// const myBookClub = new BookClub("The Bookaholics");
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Mary", "The Great Gatsby"));

// The book "The Great Gatsby" by F. Scott Fitzgerald has been added to The Bookaholics library.
// The book "To Kill a Mockingbird" by Harper Lee has been added to The Bookaholics library.
// The book "1984" by George Orwell has been added to The Bookaholics library.
// Member Alice has been joined to the book club.
// Member Peter has been joined to the book club.
// Uncaught Error Error: Member Mary not found.

const myBookClub = new BookClub("The Bookaholics");
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
console.log(myBookClub.generateReadingReport());

// The book "The Great Gatsby" by F. Scott Fitzgerald has been added to The Bookaholics library.
// The book "To Kill a Mockingbird" by Harper Lee has been added to The Bookaholics library.
// The book "1984" by George Orwell has been added to The Bookaholics library.
// Member Alice has been joined to the book club.
// Member Alice is already a part of the book club.
// Member Alice has been assigned the book "The Great Gatsby" by F. Scott Fitzgerald.
// Available Books in The Bookaholics library:
// "To Kill a Mockingbird" by Harper Lee
// "1984" by George Orwell

// assignBookToMember(memberName, bookTitle) {
//     const foundMember = this.members.find((p) => p === memberName);
//     const foundTitleIndex = this.books.findIndex((p) => p.title === bookTitle);
//     if (!foundMember) {
//       throw new Error(`Member ${memberName} not found.`);
//     }
//     if (foundTitleIndex === -1) {
//       throw new Error(`Book "${bookTitle}" not found.`);
//     } else {
//       this.books = this.books.filter((book, index) => index !== foundTitleIndex);
//     }
//   }
