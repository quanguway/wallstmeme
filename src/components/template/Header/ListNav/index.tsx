import { Component, ReactNode } from 'react';
import ItemNav from './ItemNav';
import styled from '@emotion/styled';
import { Box, Theme } from '@mui/material';
import { withTranslation } from 'react-i18next';
import { I18n } from '../../../../i18';
import { theme } from '../../../../HOCs/useDetachScreen';

type Props = {

}

type State = {

}

export type TNavItem = {
  label: React.ReactNode;
  link: string;
  children?: TNavItem[];
}

class ListNav extends Component<I18n, State> {

  
  constructor(props: Props) {
    super(props);
  }
  
  render(): ReactNode {

    const {t} = this.props;

    const items: TNavItem[] = [
      {
        label: t?.('header.stalking'),
        link: '/',
  
      },
      {
        label: t?.('header.community'),
        link: '/'
      },
      {
        label: t?.('header.about'),
        link: '/',
        children: [
          {
            label: t?.('header.about'),
            link: '/',
          },
          {
            label: t?.('header.about'),
            link: '/'
          }
        ]
      },
      {
        label: t?.('header.media'),
        link: '/'
      }
    ];
    return (
      <ListNavStyled theme={theme}>
        {items.map((o, index) => (
          <ItemNav key={index} {...o} />
        ))}
      </ListNavStyled>
    );
  }
}

export default withTranslation('homepage')(ListNav);

const ListNavStyled = styled(Box)<{theme: Theme}>`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 16px;
  padding-inline-start: 0px;

  ${props => props.theme.breakpoints.down('lg')} {
    display: none !important;
  }
`;
