import React from "react";
import { Table } from "react-bootstrap";
class App extends React.Component {
  constructor(props) {
    super(props);

    console.log();
    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      "https://wemuslims.net:9429/api/personalityOrOrganization/getByManagementStatus/ACCEPTED"
      //   "https://jsonplaceholder.typicode.com/photos"
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> loading.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Users Information </h1>{" "}
        <Table>
          <thead>
            {/* <tr>
              <th>AlbumId</th>
              <th>ID</th>
              <th>Title</th>
              <th>Url</th>
              <th>ThumbnailUrl</th>
            </tr> */}
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>UserName</th>
              <th>Category</th>
              <th>Bio</th>
              <th>UserID</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              //   <tr>
              //     <td>{item.albumId}</td>
              //     <td>{item.id}</td>
              //     <td>{item.title}</td>
              //     <td>{item.url}</td>
              //     <td>{item.thumbnailUrl}</td>
              //   </tr>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.category}</td>
                <td>{item.bio}</td>
                <td>{item.userId}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
