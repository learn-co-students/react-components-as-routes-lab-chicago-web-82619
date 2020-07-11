import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let actorList = actors.map(actor=> {
    return (
    <div>
      Name: {actor.name}
      <ul>
        {actor.movies.map(movie=> <li>{movie}</li>)}
      </ul>
    </div>)
  })

    return (
      <div>
          {/*{code here}*/}
          <h1>Actors Page</h1>
          {actorList}
      </div>
    );
};

export default Actors;
