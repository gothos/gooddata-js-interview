import React from 'react'

import settings from '../lib/settings'

const withGetMeasures = () => Component =>
  class GetMeasures extends React.Component {
    getMeasures() {
      return [
        {
          measure: {
            localIdentifier: 'm1',
            definition: {
              measureDefinition: {
                item: {
                  uri: settings.grossProfitMeasure,
                },
              },
            },
            alias: '$ Gross Profit',
          },
        },
      ]
    }

    render() {
      return (
        <Component
          getMeasures={this.getMeasures}
          projectId={settings.projectId}
          {...this.props}
          {...this.state}
        />
      )
    }
  }

export default withGetMeasures
