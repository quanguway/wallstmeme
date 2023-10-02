import styled from '@emotion/styled';
import { Box, Theme } from '@mui/material';
import { Component, ReactNode } from 'react';
import Text from '../../../../components/atom/Text';
import FAQItem from './FAQItem';
import { theme } from '../../../../HOCs/useDetachScreen';
import { I18n } from '../../../../i18';
import { withTranslation } from 'react-i18next';

export type TFAQ = {
  question: string;
  answer: string;
}

class FAQ extends Component<I18n> {

  
  render(): ReactNode {

    const {t} = this.props;

    const data: TFAQ[] = [
      {
        question: t?.('wsm_airdrop.ques') ?? '',
        answer: t?.('wsm_airdrop.ans') ?? ''
      },
      {
        question: t?.('wsm_airdrop.ques') ?? '',
        answer: t?.('wsm_airdrop.ans') ?? ''
      },
      {
        question: t?.('wsm_airdrop.ques') ?? '',
        answer: t?.('wsm_airdrop.ans') ?? ''
      },
      {
        question: t?.('wsm_airdrop.ques') ?? '',
        answer: t?.('wsm_airdrop.ans') ?? ''
      },
    ];
    return (
      <FAQStyled textAlign={'center'} theme={theme} width={'75%'} margin={'auto'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={4}>
        <Text variant='h2'>FAQ</Text>
        <Text variant='h3'>{t?.('wsm_airdrop.common_ans')}</Text>
        {data.map((o, index) => (
          <FAQItem key={index} {...o} />
        ))}
      </FAQStyled>
    );
  }
}

export default withTranslation('homepage')(FAQ);

const FAQStyled = styled(Box)<{theme: Theme}>`
  ${props => props.theme.breakpoints.down('lg')} {
    width: 95%;
  }
`;