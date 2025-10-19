import { ResponsiveBar } from '@nivo/bar'
import { Height } from '@mui/icons-material'
function Bar({dashboard = false}) {

    
const data= [
    {
        "year": "2019",
        "Spain": 1100,
        "France": 1600,
        "Germany": 1900,
        "Palestine": 300,
    },
    {
        "year": "2020",
        "Spain": 1200,
        "France": 1400,
        "Germany": 2000,
        "Palestine": 250,
    },
    {
        "year": "2021",
        "Spain": 1300,
        "France": 1800,
        "Germany": 2200,
        "Palestine": 200,
    },
    {
        "year": "2022",
        "Spain": 1500,
        "France": 2000,
        "Germany": 2500,
        "Palestine": 150,
    },
    {
        "year": "2023",
        "Spain": 1700,
        "France": 2100,
        "Germany": 2600,
        "Palestine": 100,
    },
    {
        "year": "2024",
        "Spain": 2000,
        "France": 2900,
        "Germany": 3000,
        "Palestine": 50,
    },
]

    return (
        <ResponsiveBar /* or Bar for fixed dimensions */
                data={data}
                keys={[
                    'Spain',
                    'France',
                    'Germany',
                    'Palestine',
                ]}
                indexBy="year"
                padding={.2}
                labelSkipWidth={12}
                labelSkipHeight={12}
                // colors={{ scheme: 'paired' }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        translateX: 120,
                        itemsSpacing: 3,
                        itemWidth: 100,
                        itemHeight: 16
                    }
                ]}

                axisBottom={ dashboard?{} : { legend: 'country', legendOffset: 40 }}
                axisLeft={ dashboard? {} :{ legend: 'Salary / Month', legendOffset: -70 }}
                margin={ dashboard ? { top: 50, right: 110, bottom: 100, left: 60 } : { top: 50, right: 130, bottom: 50, left: 80 }}
            />
    )
}

export default Bar
