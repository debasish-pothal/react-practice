import Person from "./Person";

const List = ({ people }) => {
  return (
    <>
      <h3>{people.length} birthdays today</h3>

      {people.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </>
  );
};

export default List;
