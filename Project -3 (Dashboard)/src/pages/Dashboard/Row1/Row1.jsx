import { EmailOutlined } from "@mui/icons-material"
import { PointOfSaleOutlined } from "@mui/icons-material"
import { PersonAddAlt1Outlined } from "@mui/icons-material"
import { TrafficOutlined } from "@mui/icons-material"
import { Paper, Stack, Typography } from "@mui/material"
import Pie from "./Pie"

        const data1=[
        {
        "id": "erlang",
        "label": "erlang",
        "value": 284,
        "color": "hsl(86, 70%, 50%)"
    },
    {
        "id": "rust",
        "label": "rust",
        "value": 362,
        "color": "hsl(143, 70%, 50%)"
    }]

    const data2= [
        {
        "id": "rust",
        "label": "rust",
        "value": 362,
        "color": "hsl(143, 70%, 50%)"
    },
    {
        "id": "java",
        "label": "java",
        "value": 362,
        "color": "hsl(29, 70%, 50%)"
    },
    ]
    const data3= [
        {
        "id": "java",
        "label": "java",
        "value": 362,
        "color": "hsl(29, 70%, 50%)"
    },
    {
        "id": "python",
        "label": "python",
        "value": 498,
        "color": "hsl(89, 70%, 50%)"
    },
    ]

    const data4= [
        {
        "id": "python",
        "label": "python",
        "value": 498,
        "color": "hsl(89, 70%, 50%)"
    },
    {
        "id": "css",
        "label": "css",
        "value": 304,
        "color": "hsl(190, 70%, 50%)"
    }
    ]

function Row1() {
    const papers= [
        {
            icon: <EmailOutlined color="primary"/>,
            nums: '12,361',
            typography: 'Emails Sent',
            chart: <Pie data={data1} schema={'accent'}/>,
            increase: '+14'
        },
        {
            icon: <PointOfSaleOutlined color="primary"/>,
            nums: '431,225',
            typography: 'Sales Obtained',
            chart: <Pie data={data2} schema={'category10'}/>,
            increase: '+21'
        },
        {
            icon: <PersonAddAlt1Outlined color="primary"/>,
            nums: '32,441',
            typography: 'New Clients',
            chart: <Pie data={data3} schema={'spectral'}/>,
            increase: '+5'
        },
        {
            icon: <TrafficOutlined color="primary"/>,
            nums: '1,325,134',
            typography: 'Traffic Received',
            chart: <Pie data={data4} schema={'yellow_orange_red'}/>,
            increase: '+43'
        },
    ]

    return (
        <Stack direction="row" gap={2} flexWrap={"wrap"} justifyContent={{xs:'center', sm:'space-between'}}>

            {papers.map((paper)=>(
                <Paper sx={{px:2, py:1.5, minWidth:"270px", flex:1}}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Stack sx={{ gap:.6}}>
                            {paper.icon}
                            <Typography>{paper.nums}</Typography>
                            <Typography>{paper.typography}</Typography>
                        </Stack>
                        <Stack justifyContent={'center'} alignItems={'center'}>
                            {paper.chart}
                            <Typography>{paper.increase}</Typography>
                        </Stack>
                    </Stack>
                </Paper>
            ))}

        </Stack>
    )
}

export default Row1
