import { connect } from 'react-redux';
import { availableOptionsSelector } from './options.selectors.js';
import Options from './Options.jsx';
import { toggleOption } from './options.actions.js';

const mapStateToProps = state => ({
  options: availableOptionsSelector(state),
});

const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapStateToProps, mapDispatch)(Options);
