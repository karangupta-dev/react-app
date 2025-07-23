import React from 'react';

class UsersList extends React.Component {
  state = {
    users: [],
    loading: false,
    error: null,
  };

  fetchUsers = () => {
    this.setState({ loading: true, error: null });

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Network response not ok');
        return res.json();
      })
      .then(data => this.setState({ users: data, loading: false }))
      .catch(err => this.setState({ error: err.message, loading: false }));
  };

  render() {
    const { users, loading, error } = this.state;

    return (
      <div>
        <button onClick={this.fetchUsers} disabled={loading}>
          {loading ? 'Loading...' : 'Load Users'}
        </button>

        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
