import { Paper, Stack, Typography } from "@mui/material";
import Pie from "../../PieCahrt/Pie";
import Bar from "../../BarChart/Bar";
import Geo from "../../Geography/Geo";

function Row3() {
    return (
        <Stack
        direction={"row"}
        justifyContent={"space-between"}
        gap={3}
        flexWrap={"wrap"}
        >
        <Paper
            sx={{
            height: "400px",
            minWidth: "350px",
            flex: 1,
            position: "relative",
            }}
        >
            <Typography variant="h5" fontWeight='500' color="primary" m="1rem 0 0 1rem">
            Campaign
            </Typography>

            <Pie dashboard={true} />

            <div
            style={{
                position: "absolute",
                bottom: 10,
                left: 80,
                textAlign: "center",
            }}
            >
            <Typography variant="h6">$48,352 revenue generated</Typography>
            <Typography>includes extra misc ecpenditures and costs</Typography>
            </div>
        </Paper>

        <Paper sx={{ height: "400px", minWidth: "350px", flex: 1 }}>
            <Typography variant="h5" fontWeight='500' color="primary" m="1rem 0 0 1rem">
            Sales Quantity
            </Typography>
            <Bar dashboard={true} />
        </Paper>

        <Paper sx={{ height: "400px", minWidth: "350px", flex: 1 }}>
            <Geo dashboard={true} />
        </Paper>
        </Stack>
    );
}

export default Row3;
