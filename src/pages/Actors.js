import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ActorsCard from "./ActorsCard";

function Actors() {
  const [actors, setActors]=useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/actors")
    .then(r=>r.json())
    .then(data=>{
      setActors(data)
      //data.map((actors)=>setActors(actors))
    })
  },[])

  const actorsList= actors.map(actor=> <ActorsCard key={actor.id} name={actor.name} movies={actor.movies}/>)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
      <h1>Actors Page</h1>
        {actorsList}
      </main>
    </>
  );
};

export default Actors;
