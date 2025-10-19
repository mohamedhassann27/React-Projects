import { ResponsivePie } from '@nivo/pie'

function Pie({data, schema}) {
  return (
    <div style={{height:80, width:100}}>
       <ResponsivePie /* or Pie for fixed dimensions */
        data={data}
        margin={{ top: 60, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        colors={{ scheme: schema }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        isInteractive={false}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
    />
    </div>
  )
}

export default Pie
