import React from "react";
import Person from "./Person";

function NameList() {
  let persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];

  let personlist=persons.map(person=><Person person={person}></Person>)
  return <div>{personlist}</div>
}

export default NameList;
