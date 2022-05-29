import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export default function IconButtons() {
  return (
    <Tabs aria-label="icon tabs example">  
        <Tab icon={<Stack direction="row" spacing={1}>
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <AddShoppingCartIcon />
                        </IconButton>
                    </Stack>}  />
    </Tabs>
    
  );
}

