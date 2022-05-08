export const baseConfig = {
  path: '/wd/hub',
  port: 4723,
  logLevel: 'info',
  capabilities: {
    platformName: 'Android',
    platformVersion: '10',
    deviceName: '192.168.0.101:5555',
    automationName: 'UiAutomator2',
    // 由于手机上已经安装过相关驱动， 所以配置跳过
    skipDeviceInitialization: true,
    skipServerInstallation: true,
    // 一定要设置 不然应用就会被重置
    noReset: true,
    fullReset: false,
  },
};
