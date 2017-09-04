import React from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'


class RadioChoice extends React.Component {
  render () {
    const radios = this.props.choices.map((choice) =>
     <RadioButton
          key={choice}
          value={choice}
          label={choice}/>);
    return <RadioButtonGroup name={this.props.name} defaultSelected="not_light">
            {radios}
    </RadioButtonGroup>

  }
}

export default RadioChoice;
