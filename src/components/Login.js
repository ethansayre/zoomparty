import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingId: "",
      password: "",
      name: ""
    }
  }

  handleSubmit = () => {
    this.props.logInHandler(this.state.meetingId, this.state.password, this.state.name);
  }

  handleChanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <section className="hero is-fullheight" style={{backgroundColor: "#324e7b"}}>
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" className="box" style={{borderRadius: "10px"}}>
                  <div className="field">
                    <label for="" className="label">Zoom Meeting ID</label>
                    <div className="control has-icons-left">
                      <input type="number" placeholder="10 or 11 digit meeting ID" className="input" required onChange={this.handleChanges} name="meetingId" value={this.state.meetingId} />
                      <span className="icon is-small is-left">
                        <i className="fas fa-video"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label for="" className="label">Display Name</label>
                    <div className="control has-icons-left">
                      <input type="name" placeholder="Display Name on Zoom Call" className="input" required onChange={this.handleChanges} name="name" value={this.state.name} />
                      <span className="icon is-small is-left">
                        <i className="fas fa-video"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label for="" className="label">Password</label>
                    <div className="control has-icons-left">
                      <input type="password" placeholder="*******" className="input" required onChange={this.handleChanges} name="password" value={this.state.password} />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <a className="button is-success is-rounded" style={{backgroundColor: "#86a6df", color: "white"}} onClick={this.handleSubmit}>
                      Join the Party
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;