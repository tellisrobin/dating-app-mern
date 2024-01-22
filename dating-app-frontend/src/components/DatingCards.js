import React, { useState } from "react";

import DatingCard from "react-tinder-card";

const DatingCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Robin",
      imageurl:
        "https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
    },
    {
      name: "Ancita",
      imageurl:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Broni",
      imageurl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Tanci",
      imageurl:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  ]);
  const swiped = (direction, nameToDelete) => {
    console.log("receiving " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen!!");
  };
  return (
    // <div className="flex justify-center">
    <>
      <div className="flex justify-center mt-[10vh]">
        {people.map((person) => (
          <DatingCard
            className="absolute"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={(dir) => {
              outOfFrame(person.name);
              console.log(dir);
            }}
          >
            <div
              style={{ backgroundImage: `url(${person.imageurl})` }}
              className="relative bg-[white] w-[400px] max-w-[85vw] h-[70vh] shadow-[0px_18px_53px_0px_rgba(0,0,0,0.3)] bg-cover bg-center p-5 rounded-[20px] text-[white] m-1.5 bottom-10"
            >
              <h3 className="absolute m-2.5 bottom-0 text-white text-3xl font-medium ">
                {person.name}
              </h3>
            </div>
          </DatingCard>
        ))}
      </div>
    </>
    //</div>
  );
};

export default DatingCards;
