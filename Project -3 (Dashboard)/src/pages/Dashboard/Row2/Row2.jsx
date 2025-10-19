import { Paper, Stack, Typography } from '@mui/material'
import Line from '../../LineChart/Line'

function Row2() {
    const transactions= [
        {
            textId: 233,
            user: "Mohamed",
            data: '2025-11-27',
            cost: 1114
        },
        {
            textId: 137,
            user: "Ahmed",
            data: '2023-4-3',
            cost: 936
        },
        {
            textId: 98,
            user: "Mahmoud",
            data: '2020-2-13',
            cost: 900
        },
        {
            textId: 145,
            user: "Ali",
            data: '2023-10-6',
            cost: 1053
        },
    ]
    return (
        <Stack direction="row" flexWrap={"wrap"} gap={3} alignItems={'center'} justifyContent={'center'}>  

            <Paper style={{height:400, minWidth:"380px" ,maxWidth:"900px", flexGrow:1}}>
                <div style={{padding:"1rem 0 0 2rem "}}>
                    <Typography variant='h5' fontWeight='500' color='primary'>Revenue Generated</Typography>
                    <Typography>$59,342.32</Typography>
                </div>
                <Line dashboard={true}/>
            </Paper>

            <Stack gap={1} sx={{minWidth:'180px', maxWidth:'550px', flexGrow:1}}>
                <Paper>
                    <Typography variant='h5' fontWeight='500' color='primary' p={1}>Recent Transactiopns</Typography>
                </Paper>

                {transactions.map((item)=>(
                    <Paper sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', py:1, px:2}}>
                        <Typography>{item.textId}</Typography>
                        <Typography>{item.user}</Typography>
                        <Typography>{item.data}</Typography>
                        <Typography bgcolor='orangered' color='white' p={1}borderRadius={2} width={60}>${item.cost}</Typography>
                    </Paper>
                ))}
            </Stack>

        </Stack>
    )
}

export default Row2
