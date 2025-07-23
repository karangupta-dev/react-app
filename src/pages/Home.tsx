import React from "react";

interface State {
  count: number;
}

export class Home extends React.Component<{}, State> {
  state: State;

  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Runs after the component is mounted");
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <>
        
        <h2>Welcome to the Home Page</h2>
      </>
    );
  }
}
