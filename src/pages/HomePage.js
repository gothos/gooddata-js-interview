import React from 'react'

import BasicLayout from '../components/BasicLayout'
import GrossProfitChartInMonths from '../components/GrossProfitChartInMonths'
import GrossProfitChartAllMonths from '../components/GrossProgitChartAllMonths'


class Homepage extends React.PureComponent {
  render() {
    return (
      <BasicLayout>
        <GrossProfitChartInMonths />
        <GrossProfitChartAllMonths />
      </BasicLayout>
    )
  }
}

export default Homepage
