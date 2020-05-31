import React from 'react'
import {ColumnChart} from '@gooddata/react-components'

import withGetMeasures from '../components/withGetMeasures'
import settings from '../lib/settings'


class GrossProfitChartAllMonths extends React.PureComponent {
  getViewBy() {
    return {
      visualizationAttribute: {
        displayForm: {
          uri: settings.dateAttributeInMonths,
        },
        localIdentifier: 'a1',
      },
    }
  }

  render() {
    const viewBy = this.getViewBy()
    const measures = this.props.getMeasures()
    return (
      <React.Fragment>
        <h1>$ Gross Profit - All months</h1>
        <div>
          <ColumnChart
            measures={measures}
            viewBy={viewBy}
            projectId={this.props.projectId}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default withGetMeasures()(GrossProfitChartAllMonths)
