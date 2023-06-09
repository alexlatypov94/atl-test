import React from 'react';
import { IconButton as IconButtonMui } from '@mui/material';

interface IconButtonProps {
  onClick: () => void;
  children: React.ReactElement;
}

export const IconButton: React.FC<IconButtonProps> = React.memo(
  ({ onClick, children }: IconButtonProps) => {
    return <IconButtonMui onClick={onClick}>{children}</IconButtonMui>;
  }
);
