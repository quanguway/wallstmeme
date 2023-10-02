import { Box, BoxProps } from '@mui/material';
import { Component, ReactNode } from 'react';

class ListSocial extends Component<{size?: number} & BoxProps> {
  render(): ReactNode {

    const social = [
      {
        icon: 'https://wallstmemes.com/assets/images/svg-icons/instagram.png'
      },
      {
        icon: 'https://wallstmemes.com/assets/images/svg-icons/twitter.svg'
      },
      {
        icon: 'https://wallstmemes.com/assets/images/svg-icons/telegram.svg'
      },
      {
        icon: 'https://wallstmemes.com/assets/images/svg-icons/discord.svg'
      },
      {
        icon: 'https://wallstmemes.com/assets/images/svg-icons/youtube.svg'
      },
      {
        icon: 'https://wallstmemes.com/assets/images/svg-icons/tiktok.svg'
      },
    ];

    return (
      <Box display={'flex'} gap={3} my={3} {...this.props}>
        {social.map((o, index) => (
          <img height={`${this.props.size ?? 42}px`} key={index} src={o.icon}/>
        ))}
      </Box>
    );
  }
}

export default ListSocial;

