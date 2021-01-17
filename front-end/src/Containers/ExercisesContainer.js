import React from "react";
import Exercises from "Screens/Exercises/Exercises";
import { connect } from "react-redux";
import { toggleModal } from "State/Redux/Actions";

const mapStateToProps = (state) => {
  return { modalIsOpen: state.ui.modalIsOpen };
};

const mapDispatchToProps = {
  toggleModal,
};

function ExercisesContainer(props) {
  return <Exercises {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesContainer);
