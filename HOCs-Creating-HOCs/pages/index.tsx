import React from 'react';
import { NextPage } from 'next';
import { WrappedWeather } from '../components/Weather';

interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = props => {
  return (
    <div>
      <WrappedWeather theme="yellow" />
    </div>
  );
};

export default IndexPage;
