import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function MyBasket() {
  return (
    <div style={{alignSelf: 'center'}}>
    <IconButton aria-label="favourite">
        <FavoriteBorderIcon sx={{color: 'white'}} fontSize='large' />
    </IconButton>
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon sx={{color: 'white'}} fontSize='large' />
      </StyledBadge>
    </IconButton>
    </div>
  );
}