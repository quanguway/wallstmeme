import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { Component, ReactNode } from 'react';
import ImageFluid from '../../../../components/atom/Image/ImageFluid';
import { COLOR_PRIMARY } from '../../../../assets/color';

import {Input} from '@mui/material';

import WalletBox from './WalletBox';
import ButtonSecondary from '../../../../components/atom/Button/ButtonSecondary';
import { I18n } from '../../../../i18';
import { withTranslation } from 'react-i18next';


type Props = I18n & {

}

type State = {
}

class Banner extends Component<Props, State> {

  social = [
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



  render(): ReactNode {

    const {t} = this.props;

    return (
      <BannerStyled>
        <Box className='content'>
          <ImageFluid src='https://wallstmemes.com/assets/images/center-title.svg'/>
          <Box display={'flex'} gap={3} my={3}>
            {this.social.map((o, index) => (
              <img height={'42px'} key={index} src={o.icon}/>
            ))}
          </Box>
          <WalletBox/>
        </Box>
        <ButtonSecondary sx={{
          bottom: '9%',
          left: 0,
          right: 0,
          margin: '0 auto',
          maxWidth: '185px',
          position: 'absolute'
        }}>{t?.('banner.button_whitepaper')}</ButtonSecondary>
      </BannerStyled>
    );
  }
}

export default withTranslation('homepage')(Banner);

export const BoxCountdown = styled(Box)`
  padding: 8px 16px;
  font-size: 20px;
  padding: auto;
  background-color: white;
  border-radius: 12px;
  font-weight: 700;
  color: black
`;

export const InputOutlinedStyled = styled(Input)`
  padding: 8px 16px;
  background-color: #f0f4f6;
  border-radius: 12px;
  border-bottom: none !important;

  &::after {
    border-bottom: none !important;
  }

  &:before {
    border-bottom: none !important;
  }
`;

const BannerStyled = styled(Box)`
    padding: 110px 14px 0px 8px;
    background: #ffffff url('https://wallstmemes.com/assets/images/banner-desktop.svg') no-repeat 50% 0;
    background-size: cover;
    height: 150vh;
    position: relative;

    .content {
      max-width: 450px;
      margin: 40px auto 0;
      display: flex;
      align-items: center;
      flex-direction: column;

      .wallet-box {
        background: #ffffff;
        border-radius: 1rem;
        border: 3px #000000 solid;
        min-height: 360px;
        width: 100%;
        margin: 20px auto;
        /* display: flex;
        align-items: center;
        justify-content: center; */
        flex-direction: column;
        z-index: 1;
        overflow: hidden;
        box-shadow: 0 6px 10px #0000001a, 0 10px 32px #2722241a;


        .wallet-box-header {
          padding: 12px;
          background-color: ${COLOR_PRIMARY};
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          justify-content: center;
          & p {
            color: white;
          }
        }

        .wallet-box-body {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 24px;
          gap: 12px;

          .eth-container {
            border: 1px solid black;
            border-radius: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 96%;
            padding: 8px;
            background-color: #f0f4f6;
          }

        }
      }
    }
`;