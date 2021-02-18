import React from 'react';
import { NextPage } from 'next';
import {
  WrappedWeather,
  WithWeatherProps,
  Weather
} from '../components/Weather';

interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = props => {
  return (
    <div>
      <WrappedWeather theme="yellow" />
      <WithWeatherProps>
        {props => {
          return <Weather {...props} theme="yellow" />;
        }}
      </WithWeatherProps>
    </div>
  );
};

export default IndexPage;
