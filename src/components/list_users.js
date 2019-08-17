import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUsersList, deleteUser } from "../actions";
import Pagination from "react-js-pagination";

class ListUsers extends Component {
  state = {
    loading: true,
    flag: false,
    activePage: 1
  };
  componentWillMount() {
    this.props.dispatch(getUsersList(this.state.activePage));
  }

  deleteThis = (e, id) => {
    this.props.dispatch(deleteUser(id));
    this.setState({ flag: true });
  };

  redirectUser = () => {
    setTimeout(() => {
      this.setState({ flag: false });
      this.props.history.push(`/listusers/${this.state.activePage}`);
    }, 1000);
  };

  renderUsers = users => (
    <tbody>
      {users
        ? users.data.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>
                <img src={user.avatar} alt="img" width={50} />
              </td>
              <td>
                {user.first_name} {user.last_name}
              </td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={e => this.deleteThis(e, user.id)}
                >
                  Del
                </button>{" "}
                <Link to={`/add/user/${user.id}`} className="btn btn-primary">
                  Edit
                </Link>{" "}
                <Link to={`/user/${user.id}`} className="btn btn-primary">
                  View
                </Link>
              </td>
            </tr>
          ))
        : null}
    </tbody>
  );

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false });
  }

  handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
    this.props.history.push(`/listusers/${pageNumber}`);
    this.props.dispatch(getUsersList(pageNumber));
  };

  render() {
    if (this.state.loading) {
      return <div className="loader">Loading...</div>;
    }
    let users = this.props.users.users;
    return users && users.data.length > 1 ? (
      <div className="container">
        {this.state.flag ? (
          <div className="alert alert-danger">
            Functionally ! User Deleted successfully! But not from Mock API
            server.
            {this.redirectUser()}
          </div>
        ) : null}
        <h3 className="text-center">Users List</h3>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Avatar</th>
              <th>Full Name</th>
              <th>Email Address</th>
              <th>Action</th>
            </tr>
          </thead>
          {this.renderUsers(users)}
        </table>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.props.users.users.per_page}
          totalItemsCount={this.props.users.users.total}
          pageRangeDisplayed={4}
          onChange={this.handlePageChange}
        />
      </div>
    ) : (
      "No users found"
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.mock_reducers
  };
};

export default connect(mapStateToProps)(ListUsers);
