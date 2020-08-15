import React from "react";
import Chart from "../src/Servicios/sunburst"
import { withRouter } from 'react-router-dom';


//Pantalla con graficos
class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    if (localStorage.getItem("token") == null) {
      const { from } = this.props.location.state || { from: { pathname: "/" } };
      this.props.history.push(from);
    }
  }

  render() {
    return (
      <div className="container">
        <br />
        <h1>Personas en Ciudad de méxico por género </h1>
        <div className="col-md-6">
          <Chart />
        </div>
      </div>);
  }
}

export default withRouter(Dashboard) 
