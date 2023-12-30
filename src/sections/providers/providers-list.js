import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
// routes//
import ProvidersItem from './providers-item';

// ----------------------------------------------------------------------

export default function ProvidersList({ providers }) {
  return (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
    >
      {providers.map((provider) => (
        <ProvidersItem key={provider.id} provider={provider} />
      ))}
    </Box>
  );
}

ProvidersList.propTypes = {
  providers: PropTypes.array,
};
