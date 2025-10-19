import {data} from "./data"
import { ResponsivePie } from '@nivo/pie'

function Pie({dashboard}) {
    return (
         <ResponsivePie  /* or Pie for fixed dimensions */
            data={data}
            margin={ dashboard ?{ top: 20, right: 40, bottom: 140, left: 40 }: { top: 25, right: 60, bottom: 85, left: 60 }}
            innerRadius={0.5}
            padAngle={0.6}
            cornerRadius={2}
            activeOuterRadiusOffset={8}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
            enableArcLabels={dashboard? false: true}
            enableArcLinkLabels={dashboard? false: true}

            legends= { dashboard? []: [{
                    anchor: 'bottom',
                    direction: 'row',
                    translateY: 56,
                    itemWidth: 100,
                    itemHeight: 18,
                    symbolShape: 'circle'
                }
            ]}
        />
    )
}

export default Pie
