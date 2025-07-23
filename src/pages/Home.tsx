import React from "react";
import { UserListFunc } from "../components/UserListFunc";

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
        <h1>Welcome to the Home Page</h1>
        <h4>UserListFunc Example</h4>
        <UserListFunc/>
      </>
    );
  }
}
