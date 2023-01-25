import Avatar from '@mui/material/Avatar';

export function AvatarImg(props) {
    return (
        <Avatar alt="Remy Sharp" src={props.urlImg} sx={{ width: props.sizeImg, height: props.sizeImg}} />
    );
  }