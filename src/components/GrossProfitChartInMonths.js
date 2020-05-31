import React from 'react'
import {ColumnChart} from '@gooddata/react-components'
import moment from 'moment'
import PropTypes from 'prop-types'

import withGetMeasures from '../components/withGetMeasures'
import settings from '../lib/settings'


class GrossProfitChartInMonths extends React.PureComponent {
  state = {
    dayMonthFilterFrom: '01-01',
    dayMonthFilterTo: '01-31',
  }

  static defaultProps = {
    startingYear: '2016',
  }

  static propTypes = {
    warningTimeout: PropTypes.string,
  }

  getMonthFilter() {
    return {
      absoluteDateFilter: {
        dataSet: {
          uri: settings.dateAttribute,
        },
        from: `${this.props.startingYear}-${this.state.dayMonthFilterFrom}`,
        to: `${this.props.startingYear}-${this.state.dayMonthFilterTo}`,
      },
    }
  }

  changeMonth = e => {
    const month = moment(
      `${this.props.startingYear}-${e.target.value}`,
      'YYYY-MM'
    )

    const lastDay = moment(month)
      .endOf('month')
      .format('DD')
    console.log('lastDay', lastDay)
    this.setState({
      dayMonthFilterFrom: `${e.target.value}-01`,
      dayMonthFilterTo: `${e.target.value}-${lastDay}`,
    })
  }

  renderDropdown() {
    return (
      <select defaultValue="01" onChange={this.changeMonth}>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    )
  }

  render() {
    const filters = [this.getMonthFilter()]
    const measures = this.props.getMeasures()
    return (
      <React.Fragment>
        <h1>
          $ Gross Profit in month {this.renderDropdown()}{' '}
          {this.props.startingYear}
        </h1>
        <div>
          <ColumnChart
            measures={measures}
            filters={filters}
            projectId={this.props.projectId}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default withGetMeasures()(GrossProfitChartInMonths)
