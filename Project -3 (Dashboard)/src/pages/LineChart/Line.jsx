import { ResponsiveLine } from '@nivo/line'
import {data} from "./data"

function Line({dashboard}) {
    return (
        <ResponsiveLine /* or Line for fixed dimensions */
                data={data}
                margin={ dashboard? { top: 40, right: 110, bottom: 120, left: 60 } : { top: 25, right: 110, bottom: 70, left: 60 }}
                yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
                }}
                axisBottom={ dashboard? {} : { legend: "transportation", legendOffset: 45 }}
                axisLeft={ dashboard? {} : { legend: "count", legendOffset: -50 }}
                enableGridX={false}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "seriesColor" }}
                pointLabelYOffset={-12}
                enableTouchCrosshair={true}
                useMesh={true}
                curve="catmullRom"
                legends={[
                {
                    anchor: "bottom-right",
                    direction: "column",
                    translateX: 100,
                    itemWidth: 80,
                    itemHeight: 22,
                    symbolShape: "circle",
                },
                ]}
        />
    )
}

export default Line
