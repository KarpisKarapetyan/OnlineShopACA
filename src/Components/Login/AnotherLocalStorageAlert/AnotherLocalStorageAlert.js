import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

 function StorageAlert({setErrorMessage}) {
  const [open, setOpen] = React.useState(true);
  if(open === false){
    setErrorMessage(false)
  }


  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>

      <Alert 
      action={
        <IconButton
          aria-label="close"
          color="error"
          size="small"
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseIcon  fontSize= '6px'  />
        </IconButton>
      }
      sx={{ mb: 2 }}
      severity="error"> ANOTHER LOCALSTORAGE: we have not found your basket info in this localSotrage, please register again
      </Alert>
      </Collapse>
    </Box>
  );
}
export default StorageAlert
