import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';

export default function CutomedCheckBox({label, idx, checkedItem}) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(!checked);
    checkedItem(idx, !checked);
  };
  return (
    <div style={{paddingBottom: 24}}>
      <FormControlLabel
              label={<Typography 
                style={{
                  fontFamily: 'var(--font-family-pp_telegraf-regular) !important',
                  fontSize: 'var(--font-size-17) !important',
                  fontWeight: 400,
                }}>
                  {label}</Typography>}
              control={<Checkbox 
                          checked={checked} 
                          sx={{
                                color: "black",
                                '&.Mui-checked': {
                                  color: "black",
                                },
                            }}
                          onChange={handleChange}
                      />}
          />
    </div>
    
  );
}
