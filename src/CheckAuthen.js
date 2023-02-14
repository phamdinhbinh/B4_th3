import React from 'react';
class CheckAuthen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isLoggedIn: false,
        }
    }
    componentDidMount() {
        const getUserInfo = localStorage.getItem('isLoggedIn');
        let updatedValue = this.state.isLoggedIn;
        if (getUserInfo) {
            updatedValue = true;
        } else {
            updatedValue = false;
        }
        this.setState({
            loading: false,
            isLoggedIn: updatedValue
        })
        
    }

   handleLogin = () => {
      localStorage.setItem('isLoggedIn','isLoggedIn'  )
    };
    render() {
        return (
            <div>
                {this.state.loading && <h3>Loading</h3>}
                {this.state.isLoggedIn ? (
                    <div>
                        <h3>Hello User</h3>
                        <button>Logout</button>
                    </div>
                ) : (
                    <div>
                        <h3>Please login</h3>
                        <button onClick={this.handleLogin}>Login</button>
                    </div>
                )}
            </div>
        )
    }
}
export default CheckAuthen;