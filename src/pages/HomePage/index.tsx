import { Component, ReactNode } from 'react';
import MemeBusiness from './widgets/MemeBusiness';
import { Box, Divider } from '@mui/material';
import WSMToken from './widgets/WSMToken';
import WallStreetMeme from './widgets/WallStreetMeme';
import RoadMap from './widgets/RoadMap';
import Tokenomics from './widgets/Tokenomics';
import WSMInTheMedia from './widgets/WSMInTheMedia';
import WSMAirDrop from './widgets/WSMAirdrop';
import FAQ from './widgets/FAQ';
import Banner from './widgets/Banner';
import FooterBanner from './widgets/Footer';

class HomePage extends Component {
  render(): ReactNode {
    return (
      <>
        <Box mt={'-100px'}>
          <Banner/>
        </Box>
        <MemeBusiness />
        <Divider sx={{
          width: '50%',
          margin: '72px auto',
          backgroundColor: '#717D85'
        }}/>
        <WSMToken />
        <WallStreetMeme />
        <RoadMap />
        <Box mt={14}>
          <Tokenomics />
        </Box>
        <Box mb={14}>
          <WSMInTheMedia/>
        </Box>
        <WSMAirDrop/>
        <FAQ/>
        <Box mt={14}>
          <FooterBanner />
        </Box>
      </>
    );
  }
}

export default HomePage;