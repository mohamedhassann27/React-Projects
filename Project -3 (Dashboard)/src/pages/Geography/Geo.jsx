import { ResponsiveChoropleth } from '@nivo/geo'
import {data} from './data'
import {geo} from './world_countries'

function Geo({dashboard}) {
    return (
        <ResponsiveChoropleth  /* or Choropleth for fixed dimensions */
            data={data}
            features= {geo.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="nivo"
            domain={[0, 1000000]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={dashboard? 80 : 150}
            enableGraticule={false}
            graticuleLineColor="#dddddd"
            borderWidth={0.5}
            borderColor="#152538"
            legends={ dashboard? [] :[
                {
                    anchor: 'bottom-left',
                    direction: 'column',
                    justify: true,
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: '#444444',
                    itemOpacity: 0.85,
                    symbolSize: 18
                }
            ]}
            />
    )
}

export default Geo
