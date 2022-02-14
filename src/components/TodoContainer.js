import React from "react";

class TdodoContainer extends React.Component {
  state = { todo: [
    {
      id:1,
      title: "setup dev environement",
      completed: true
    },
    {
      id:2,
      title: "lov is nothing for a programmer",
      completed: true
    },  {
      id:3,
      title: "Let think positif",
      completed: true
    }
  ]  };
  render() { 
    return (
      <div>
        <h1>Hello sharing world</h1>
        <p>let us create our first app</p>
      </div>
    );
  }
}
 
export default TdodoContainer;