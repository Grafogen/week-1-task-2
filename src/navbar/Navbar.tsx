import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// interface TabPanelProps {
//     children?: React.ReactNode;
//     index: number;
//     value: number;
// }

// function CustomTabPanel(props: TabPanelProps) {
//     const { children, value, index, ...other } = props;
//
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//         </div>
//     );
// }

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
            <Box sx={{width: '100%'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider', backgroundColor: '#151b23'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab sx={{color: '#ffffff'}} label="Game" {...a11yProps(0)} />
                        <Tab sx={{color: '#ffffff'}} label=" Statistics" {...a11yProps(1)} />
                        <Tab sx={{color: '#ffffff'}} label=" Profile" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                {/*<CustomTabPanel value={value} index={0}>*/}
                {/*    Game*/}
                {/*</CustomTabPanel>*/}
                {/*<CustomTabPanel value={value} index={1}>*/}
                {/*    Statistics*/}
                {/*</CustomTabPanel>*/}
                {/*<CustomTabPanel value={value} index={2}>*/}
                {/*    Profile*/}
                {/*</CustomTabPanel>*/}
            </Box>
    );
}