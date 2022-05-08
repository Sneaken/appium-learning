# adb 相关命令

## 1. 查看当前 Activity

adb shell
dumpsys window | grep mCurrentFocus

## 2. logcat

> 持续监听

adb shell logcat

## 3. wifi 连接 手机

1. 首先确保手机连接到电脑上(adb devices 里面有), 电脑和手机连的同一个网络（同一个ip）
2. 执行 adb tcpip [PORT(自定义)]
3. adb connect [IP]:[PORT]
4. 断开手机的数据线（此时 adb devices 里面 只会有 用 wifi 连接的那个设备）