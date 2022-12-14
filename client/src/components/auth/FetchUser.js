import { Component } from 'react';
import axios from 'axios';
import { AuthConsumer } from "../../providers/AuthProvider";

class FetchUser extends Component {
  state = { loaded: false };

  componentDidMount() {
    const { authenticated, setUser } = this.props;

    if (authenticated) {
      this.loaded();
    } else {
      if (this.checkLocalToken()) {
        axios.get('/api/auth/validate_token')
          .then( res => {
            setUser(res.data.data);
            this.loaded();
          })
          .catch( res => {
            this.loaded();
          })
      } else {
        this.loaded();
      }
    }
  }

  checkLocalToken = () => {
    const token = localStorage.getItem('access-token');
    return token;
  }

  loaded = () => this.setState({ loaded: true, });

  render() {
    return this.state.loaded ? this.props.children : null;
  }
}
const ConnectedFetchUser = (props) => (
  <AuthConsumer>
    { value => <FetchUser { ...props } { ...value } />}
  </AuthConsumer>
)

export default ConnectedFetchUser;