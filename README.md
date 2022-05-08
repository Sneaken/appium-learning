# appium-learning

## 环境准备

1. Node 环境
2. java 环境
3. android sdk 以及环境变量的配置(可通过 Android Studio 安装)
4. 全局安装
   ```shell
   yarn global add appium
   ```

## 项目介绍

1. 一些自动化相关的内容

## 使用说明

1. 执行任何脚本之前都要确保执行

   ```shell
   appium
   ```

2. 确保 adb 已经连接到手机
3. 初次运行时需要将 src/config/index.js 中的以下配置调整为 false
   ```json
   {
     "skipDeviceInitialization": false,
     "skipServerInstallation": false
   }
   ```
