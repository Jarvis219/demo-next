import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Link from 'next/link';
import { Button } from '@mui/material';

export default function Header({ menu }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'pink',
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        {menu.map((item, index) => (
          <Link key={index} href={`/products/${item.id}`}>
            <Button>{item.name} </Button>
          </Link>
        ))}
      </Tabs>
    </Box>
  );
}
