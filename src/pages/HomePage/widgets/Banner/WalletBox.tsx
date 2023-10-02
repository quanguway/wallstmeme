import { Box, Button, Divider, InputAdornment } from '@mui/material';
import { Component, ReactNode } from 'react';
import Text from '../../../../components/atom/Text';
import Countdown from 'react-countdown';
import { BoxCountdown, InputOutlinedStyled } from '.';
import moment from 'moment';
import ETHICon from '../../../../assets/image/eth-icon.png';
import ButtonPrimary from '../../../../components/atom/Button/ButtonPrimary';
import ButtonOutline from '../../../../components/atom/Button/ButtonOutline';
import { withTranslation } from 'react-i18next';
import { I18n } from '../../../../i18';

type Props = I18n & {

}

type State = {
  isConnect: boolean;
}

class WalletBox extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {isConnect: false};
  }

  render(): ReactNode {

    const {t} = this.props;

    return (
      <Box className='wallet-box'>
            <Box className='wallet-box-header' color={'white'}>
              <Text textAlign={'center'} fontSize={'18px'}>{t?.('banner.title')}</Text>
              <Countdown
                date={ new Date(moment().add(23, 'day').valueOf())}
                renderer={({days ,hours, minutes, seconds, completed }) => {
                  if (completed) {
                    // Render a completed state
                    return 'Finished';
                  } else {
                    // Render a countdown
                    return (
                      <Box display={'flex'} justifyContent={'center'} gap={1}>
                        <BoxCountdown>{days}d</BoxCountdown>
                        <BoxCountdown>{hours}h</BoxCountdown>
                        <BoxCountdown>{minutes}m</BoxCountdown>
                        <BoxCountdown>{seconds}s</BoxCountdown>
                      </Box>
                    );
                  }
                }}
              />
              
              <Text textAlign={'center'} fontSize={'20px'}>{t?.('banner.subtitle')}</Text>
              <Text fontSize={'18px'}>{t?.('banner.description')}</Text>
            </Box>
            <Box className='wallet-box-body'>
              { !this.state.isConnect ? 
                <ButtonPrimary fullWidth={true} onClick={() => this.setState({isConnect: true})} >{t?.('banner.button_connect')}</ButtonPrimary> : 
                <>
                  <Divider sx={{
                    width: '100%'
                  }}>1 WSM = 0000</Divider>
                  <Box className='eth-container'><img height={'23px'} src={ETHICon}/> ETH</Box>
                  <Box p={0} display={'flex'} gap={'12px'} width={'100%'} >
                    <Box>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Text fontSize={'12px'}>{t?.('banner.label_pay')}</Text>
                        <Text fontSize={'12px'} fontWeight={600}>{t?.('banner.label_max')}</Text>
                      </Box>
                      
                        <InputOutlinedStyled
                          endAdornment={<InputAdornment position="end"><img height={'24px'} src={ETHICon}/> </InputAdornment>} placeholder='0'/>
                    </Box>
                    <Box>
                      <Text fontSize={'12px'}>{t?.('banner.label_amount')} <span style={{fontWeight: 600}}>WSM</span> {t?.('banner.label_receive')}</Text>
                      <InputOutlinedStyled  
                        endAdornment={<InputAdornment position="end"><img height={'24px'} src={'https://wallstmemes.com/assets/images/svg-icons/wall-street.svg'}/> </InputAdornment>} placeholder='0'/>
                    </Box>
                  </Box>
                  <ButtonPrimary fullWidth={true}>{t?.('banner.button_deposit')}</ButtonPrimary>
                  <ButtonOutline fullWidth={true}>{t?.('banner.button_airdrop')}</ButtonOutline>
                  <Button fullWidth={true} sx={{
                    backgroundColor: '#f0f4f6',
                    borderRadius: '9999px',
                    padding: '8px 12px'
                  }}>{t?.('banner.button_refer')}</Button>
                </>

                }
              <Text mt={2}>{t?.('banner.power_by')} <span><img height={'15px'} src='https://wallstmemes.com/assets/images/svg-icons/W3P_Black.svg'/></span></Text> 
            </Box>
          </Box>
    );
  }
}

export default withTranslation('homepage')(WalletBox);