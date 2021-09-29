import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.message,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  diactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.setStatus(this.state.status);
  };
  handleFocus = (event) => event.target.select();
  changeStatus = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  };
  render() {
    return (
      <>
        {!this.state.editMode && (
          <span onDoubleClick={this.activateEditMode}>
            {this.props.message || "no status"}
          </span>
        )}

        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onFocus={this.handleFocus}
              onBlur={this.diactivateEditMode}
              value={this.state.status}
              onChange={this.changeStatus}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
