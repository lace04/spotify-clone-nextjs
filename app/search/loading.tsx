'use client';

import Box from '@/components/Box';
import { BounceLoader } from 'react-spinners';

const loading = () => {
  return (
    <Box className='h-full flex items-center justify-center'>
      <BounceLoader color='#22C55E' size={40} />
      
    </Box>
  );
};

export default loading;
