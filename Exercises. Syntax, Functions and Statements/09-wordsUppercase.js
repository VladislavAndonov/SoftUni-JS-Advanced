function wordsUppercase(input) {
  let pattern = /\w+/g;
  let match = input.match(pattern);

  let uppercase = match
    .map((el) => el.toUpperCase())
    .filter((el) => el.length > 0);

  console.log(uppercase.join(", "));
}
wordsUppercase("Hi, how are you?");
wordsUppercase("hello");
