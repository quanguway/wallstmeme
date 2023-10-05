import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Component, ReactNode } from 'react';
import LogoIcon from '../../../assets/icon/LogoIcon';
import ListNav from './ListNav';
import ToolNav from './ToolNav';
import { TScreen } from '../../../HOCs/useDetachScreen';

import MobileMenu from './MobileMenu';
import storage from '../../../utils/storage';
import { I18n } from '../../../i18';
import { withTranslation } from 'react-i18next';


type Props = I18n & TScreen & {

}

type State = {
  isMobile: boolean
}

class Header extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    console.log('????');

    const {i18n} = this.props;

    console.log(storage.lang.get());
    

    i18n?.changeLanguage(storage.lang.get() ?? 'en');
  }

  render(): ReactNode {    
    return (
      <HeaderStyled zIndex={1300}>
        <LogoIcon/>
        <ListNav/>
        <ToolNav/>
        <MobileMenu/>
      </HeaderStyled>
    );
  }
}

export default withTranslation('homepage')(Header);


const HeaderStyled = styled(Box)`
  display: flex;
  justify-content: space-between;
  position: sticky;
  align-items: center;
  top: 0;
  padding: 15px 25px;
  background: rgba(255,255,255,.85);
`;