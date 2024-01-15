import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    // console.log(props);
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
    // Api call

    const data = await fetch("https://api.github.com/users/coderfauzan");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // console.log(json);
  }

  componentDidUpdate() {
    // console.log("Child Component Did Update");
  }

  componentWillUnmount() {
    // console.log("Child Component Will Unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log("child render");
    return (
      <div className="user-card ">
        <div className="flex justify-center items-center">
          <img
            className="h-56 w-56 m-4 p-4 bg-gray-50 rounded-lg"
            src={avatar_url}
          />
        </div>
        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @coderfauzan</h4>
      </div>
    );
  }
}

export default UserClass;
