# adb 相关命令

## 1. 查看当前 Activity

adb shell
dumpsys window | grep mCurrentFocus

## 2. logcat

> 持续监听

adb shell logcat