import React from "react";

// Material UI imports
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import classes from "*.module.css";

// The main code for this component starts from here
class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  onChange = event => {
    // console.log(event.target.value);
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div style={{ width: "100%", paddingTop: "30px"}}>
        <form onSubmit={this.onFormSubmit} noValidate autoComplete="off">
          <TextField
            style={{ width: "100%", float: "left" }}
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={this.state.term}
            onChange={e => this.onChange(e)}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
