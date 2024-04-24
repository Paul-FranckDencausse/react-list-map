const people = [
  "TOTO: toto@gmail.com",
  "TATA: tata@gmail.com",
  "TITI: titi@gmail.com",
];

export default function List() {
  const listItems = people.map((person) => <li>{person}</li>);
  return <ul>{listItems}</ul>;
}
