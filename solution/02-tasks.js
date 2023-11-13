function foo() {
  console.log("foo -> this", this);
}

foo(); // Какой this ???

/**
 * -------------------------
 */
const book = {
  title: "React for beginners",
  showThis() {
    console.log("showThis -> this", this);
  },
  showTitle() {
    console.log("showTitle -> this.title", this.title);
  },
};

book.showThis(); // Какой this ???

const outerShowThis = book.showThis;
outerShowThis(); // Какой this ???

const outerShowTitle = book.showTitle;
outerShowTitle(); // Какой this ???
