import { duration, styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutline, HomeOutlined, MapOutlined, PeopleOutline, PersonOutline, PieChartOutline, ReceiptOutlined, TimelineOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router";
import { bgBG } from "@mui/material/locale";
import { grey } from "@mui/material/colors";
import { Avatar, Typography } from "@mui/material";


const drawerWidth = 240;

    const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
    })(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    variants: [
        {
        props: ({ open }) => open,
        style: {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
        },
        },
        {
        props: ({ open }) => !open,
        style: {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
        },
        },
    ],
    }));

    const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    });

    const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
    });

    const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    }));

    function AppSide({ setOpen, open }) {
        const theme= useTheme()

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const array1=[
        {"text": "Dashboard", "icon": <HomeOutlined/>, "path":"/"},
        {"text": "Manage Team", "icon": <PeopleOutline/>, "path":"/team"},
        {"text": "Contacts Information", "icon": <ContactsOutlined/>, "path":"/contacts"},
        {"text": "Invoices Balances", "icon": <ReceiptOutlined/>, "path":"/invoices"},
    ]
    const array2=[
        {"text": "Profile Form", "icon": <PersonOutline/>, "path":"/form"},
        {"text": "Calendar", "icon": <CalendarTodayOutlined/>, "path":"/calendar"},
        {"text": "FAQ Page", "icon": <HelpOutline/>, "path":"/faq"},
    ]
    const array3=[
        {"text": "Bar Chart", "icon": <BarChartOutlined/>, "path":"/bar"},
        {"text": "Pie Chart", "icon": <PieChartOutline/>, "path":"/pie"},
        {"text": "Line Chart", "icon": <TimelineOutlined/>, "path":"/line"},
        {"text": "Geography Chart", "icon": <MapOutlined/>, "path":"/geography"},
    ]

    const navigate= useNavigate()
    const location= useLocation()

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <Avatar alt="Travis Howard" src="/src/assets/momo.png" sx={{ mx:"auto", marginTop:1.5 ,width:"3.5rem", height:"3.5rem"}}/>
                <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                    <ChevronRightIcon />
                ) : (
                    <ChevronLeftIcon />
                )}
                </IconButton>
            </DrawerHeader>

            {open&& <Typography variant="h6" textAlign={'center'} marginBottom={1} marginTop={.5} color="primary">Mohamed Hassan</Typography>}

        <Divider />

        <List>
            {array1.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                onClick={()=>{
                    navigate(item.path);
                }}
                sx={[
                    {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor: location.pathname==item.path? grey[400]:null 
                    },
                    open
                    ? {
                        justifyContent: "initial",
                        }
                    : {
                        justifyContent: "center",
                        },
                ]}
                >
                <ListItemIcon
                    sx={[
                    {
                        minWidth: 0,
                        justifyContent: "center",
                    },
                    open
                        ? {
                            mr: 3,
                        }
                        : {
                            mr: "auto",
                        },
                    ]}
                >
                    {item.icon}
                </ListItemIcon>
                <ListItemText
                    primary={item.text}
                    sx={[
                    open
                        ? {
                            opacity: 1,
                        }
                        : {
                            opacity: 0,
                        },
                    ]}
                />
                </ListItemButton>
            </ListItem>
            ))}
        </List>

        <Divider />

        <List>
            {array2.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                onClick={()=>{
                    navigate(item.path);
                }}
                sx={[
                    {
                    minHeight: 48,
                    px: 2.5,
                    },
                    open
                    ? {
                        justifyContent: "initial",
                        }
                    : {
                        justifyContent: "center",
                        },
                ]}
                >
                <ListItemIcon
                    sx={[
                    {
                        minWidth: 0,
                        justifyContent: "center",
                    },
                    open
                        ? {
                            mr: 3,
                        }
                        : {
                            mr: "auto",
                        },
                    ]}
                >
                    {item.icon}
                </ListItemIcon>
                <ListItemText
                    primary={item.text}
                    sx={[
                    open
                        ? {
                            opacity: 1,
                        }
                        : {
                            opacity: 0,
                        },
                    ]}
                />
                </ListItemButton>
            </ListItem>
            ))}
        </List>

        <Divider />

        <List>
            {array3.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                onClick={()=> navigate(item.path)}
                sx={[
                    {
                    minHeight: 48,
                    px: 2.5,
                    },
                    open
                    ? {
                        justifyContent: "initial",
                        }
                    : {
                        justifyContent: "center",
                        },
                ]}
                >
                <ListItemIcon
                    sx={[
                    {
                        minWidth: 0,
                        justifyContent: "center",
                    },
                    open
                        ? {
                            mr: 3,
                        }
                        : {
                            mr: "auto",
                        },
                    ]}
                >
                    {item.icon}
                </ListItemIcon>
                <ListItemText
                    primary={item.text}
                    sx={[
                    open
                        ? {
                            opacity: 1,
                        }
                        : {
                            opacity: 0,
                        },
                    ]}
                />
                </ListItemButton>
            </ListItem>
            ))}
        </List>

    </Drawer>

        

        
    );
}

export default AppSide;
