import React from 'react';
import { styled, Drawer, ListItem, ListItemText, ListItemIcon, ListSubheader } from '@material-ui/core';
import { Dashboard, ShoppingCart, People, BarChart, Layers, Assignment } from '@material-ui/icons';

const drawerWidth = 240;

const MuiDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <People />
            </ListItemIcon>
            <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BarChart />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Layers />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
        </ListItem>
    </div>
);

const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <Assignment />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Assignment />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Assignment />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>
    </div>
);

export default MuiDrawer
export { mainListItems, secondaryListItems }
