import React from "react";

export const AddBountyForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          onChange={props.handleChange}
          value={props.firstName}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          onChange={props.handleChange}
          value={props.lastName}
        />
      </label>
      <br />
      <label>
        Bounty:
        <input
          type="number"
          name="bounty"
          onChange={props.handleChange}
          value={props.bounty}
        />
      </label>
      <br />
      <label>
        Alive?(true or false)
        <input
          type="checkbox"
          checked={props.isAlive}
          name="isAlive"
          onChange={props.handleChange}
          value={props.isAlive}
        />
      </label>
      <br />
      <label>
        Power Type:
        <select name="type" onChange={props.handleChange} value={props.type}>
          <option>Select One</option>
          <option value="jedi">Jedi</option>
          <option value="sith">Sith</option>
        </select>
        <br />
      </label>
      <button>{props.isEdit ? "Update" : "Submit"}</button>
      <br />
      <br />
    </form>
  );
};

export default AddBountyForm;
