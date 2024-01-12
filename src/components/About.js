import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

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
        <div>
          Logged in user
          <UserContext.Consumer>
            {({loggedInUser})=>(
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}

          </UserContext.Consumer>
        </div>
        <h2>This is about page</h2>
        <User name={"fauzan"} />
        <UserClass name={"class"} location={"Delhi class"} />
      </div>
    );
  }
}

export default About;
