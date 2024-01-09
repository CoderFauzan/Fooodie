import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }


  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is about page</h2>
        <User name={"fauzan"} />
        <UserClass name={"class"} location={"Delhi class"} />
      </div>
    );
  }
}

export default About;
