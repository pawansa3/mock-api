import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions";

class SingleUser extends Component {
  state = {
    loading: true
  };
  componentWillMount() {
    this.props.dispatch(getUser(this.props.match.params.id));
  }

  renderUser = user =>
    user ? (
      <div>
        <img src={user.data.avatar} alt="img" />
        <p>
          {user.data.first_name} {user.data.last_name}
        </p>
        <p>{user.data.email}</p>
      </div>
    ) : (
      "User not found!"
    );

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div className="loader">Loading...</div>;
    }
    let user = this.props.user.user;
    return <div>{this.renderUser(user)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.mock_reducers
  };
};

export default connect(mapStateToProps)(SingleUser);
