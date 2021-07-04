import PropTypes from "prop-types";

const deleteActionProps = {
  action: PropTypes.func.isRequired,
};

type DeleteActionProps = PropTypes.InferProps<typeof deleteActionProps>;

export default DeleteActionProps;
