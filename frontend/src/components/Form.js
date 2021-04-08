import React from "react";
import { connect } from "react-redux";
import { submitQuestion } from "../actions/question_actions";

const Form = ({ submitQuestion }) => {
  return (
    <>
      <h1>Form</h1>
    </>
  );
};

//map dispatch to props (mdp)
const mdp = (dispatch) => ({
  submitQuestion: (question) => dispatch(submitQuestion(question)),
});
export default connect(null, mdp)(Form);
