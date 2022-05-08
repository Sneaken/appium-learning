import { remote } from 'webdriverio';
import { baseConfig } from './config/index.js';
import { merge } from 'lodash-es';

const config = merge(baseConfig, {
  capabilities: {
    appPackage: 'com.yaya.zone',
    appActivity: 'com.yaya.zone.home.HomeActivity',
  },
});

const android = await remote(config);

await android.deleteSession();
