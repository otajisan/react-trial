import {init as initApm} from '@elastic/apm-rum'

const apm = initApm({
  serviceName: 'react-trial',
  serviceVersion: '0.0.1',

  serverUrl: process.env.REACT_APP_ELASTIC_APM_SERVER_URL,
  environment: process.env.REACT_APP_ENV
});

export default apm;