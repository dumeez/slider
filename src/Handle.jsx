import React from 'react';

class ToolTipComponent extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    if (this.props.touched)
      {
        return (
          <output className="my-tooltip" style={{opacity:0.9}}>{this.props.value} {this.props.unit}</output>
        )
      }
    return (
        <output className="my-tooltip" style={{opacity:0}}>{this.props.value} {this.props.unit}</output>
    )
  }
}

export default class Handle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTooltipVisible: false,
    };
  }

  showTooltip() {
    this.setState({
      isTooltipVisible: true,
    });
  }

  hideTooltip() {
    this.setState({
      isTooltipVisible: false,
    });
  }

  render() {
    const {
      className,
      tipTransitionName,
      vertical,
      offset,
      value,
      unit,
      toolTipShow,
    } = this.props;

    const style = vertical ? { bottom: `${offset}%` } : { left: `${offset}%` };
    return (
      <div className={className} style={style}
        onMouseUp={this.showTooltip.bind(this)}
        onMouseEnter={this.showTooltip.bind(this)}
        onMouseLeave={this.hideTooltip.bind(this)}
      >
        <ToolTipComponent
          value={this.props.value}
          unit={this.props.unit}
          touched={this.props.toolTipShow}/>
      </div>
    );
  }
}

Handle.propTypes = {
  className: React.PropTypes.string,
  vertical: React.PropTypes.bool,
  offset: React.PropTypes.number,
  tipTransitionName: React.PropTypes.string,
  value: React.PropTypes.number,
  unit: React.PropTypes.string,
  toolTipShow: React.PropTypes.bool
};
