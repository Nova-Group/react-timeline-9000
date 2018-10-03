import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid as RvGrid} from 'react-virtualized';

export default class Grid extends Component {
  static propTypes = {
    cellRenderer: PropTypes.func.isRequired,
    cellRangeRenderer: PropTypes.func.isRequired,
    columnWidth: PropTypes.func.isRequired,
    gridWidth: PropTypes.number.isRequired,
    gridHeight: PropTypes.number.isRequired,
    rowHeight: PropTypes.func.isRequired,
    rowCount: PropTypes.number.isRequired,
    disableUpdate: PropTypes.bool
  };

  static defaultProps = {
    disableUpdate: false
  };

  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !nextProps.disableUpdate;
  }

  render() {
    const {gridWidth, gridHeight, columnWidth, rowHeight, rowCount, cellRenderer, cellRangeRenderer} = this.props;

    return (
      <RvGrid
        ref={this.gridRef}
        autoContainerWidth
        cellRenderer={cellRenderer}
        cellRangeRenderer={cellRangeRenderer}
        columnCount={2}
        columnWidth={columnWidth}
        height={gridHeight}
        rowCount={rowCount}
        rowHeight={rowHeight}
        width={gridWidth}
      />
    );
  }
}
