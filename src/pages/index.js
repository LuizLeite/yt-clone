import React from 'react';
import { Button } from '@material-ui/core';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div>YOUTUBE</div>
      <Button color="primary" variant="contained">
        Hello Word
      </Button>
    </Layout>
  );
}
