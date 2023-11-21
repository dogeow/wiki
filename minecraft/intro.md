## 环境

- 客户端：macOS
- 服务端：Ubuntu
  - CPU：禁止外挂的话，2 人 2 核心，如果没有禁止外挂的话，需要 4 核心。
  - 内存：建议 4G 以上。
  - 带宽：一人玩 8 小时，差不多 1G 到 2G 流量，同时在线人数 10 人左右，需要 4M 带宽。
  - 硬盘：2B2T 类型，两天增加 1GB。

## 服务端

```
apt-get install openjdk-17-jdk
# 从这个网址下载最新版本的 MineCraft 服务端：https://www.minecraft.net/zh-hans/download/server/
java -Xmx1024M -Xms1024M -jar server.jar nogui
# 修改 eula.txt，改为 true
# 修改 server.properties，改为 online-mode=false
# 重新运行
java -Xmx1024M -Xms1024M -jar server.jar nogui
```

### 其他引擎

- [Bukkit](https://dev.bukkit.org/)
- [Paper](https://papermc.io/)

### 服务端设置

[粘性活塞复制物品](https://zhuanlan.zhihu.com/p/179261851)

https://www.mcmod.cn/class/10718.html

### 解释

online-mode=false：正版验证。如果你没有买正版，就要关闭这个选项，然后其他玩家都可以进了。

如果你想要是正版才能进，改为 true。正版好像就只有别人能够看到自己的皮肤，其他好处没发现。

## 客户端

1. TLauncher
2. PCL
3. HMCL
4. 官方启动器（垃圾）
5. Moon
6. Lunar
6. [Fold](https://github.com/FCL-Team/FoldCraftLauncher/releases)（安卓手机）

## 外挂

- Future
- Wurst
- Meteor
- https://www.vape.gg/
- Rusherhack

## Mod

服务器安装 forge，从官网下载：https://files.minecraftforge.net/net/minecraftforge/forge/。服务端和客户端都要安装。

客户端安装 fabric，放 fabric api 到 mods，以及 Sodium+ lris mods

mod 推荐

1. Litematica
2. https://www.mcmod.cn/class/3693.html
3. journey map
4. fastasyncworldedit
5. Xaeros_Minimap_
6. Authme
   - https://pluginscdtribe.github.io/wiki/authme/Name-Restrictions.html
7. LittleTiles
8. WTHIT

[Minecraft插件百科](https://mineplugin.org/%E9%A6%96%E9%A1%B5)

## 光影

前置条件，可选：optifine

光影包推荐：

* 低配置：BSL
* 高配置：Astralex

放置到：/.minecraft/shaders

- https://wiki.shaderlabs.org/wiki/Shaderpacks
- [SEUS](https://www.sonicether.com/seus/#downloads)

## 材质包

## 创造模式

命令行

- clone
- structure

## 免费服务器

https://aternos.org/:zh-CN/

> CPU 比较差点，加载区块慢，其他挺好的，可以上传备份、下载备份等

## 学习网站

https://www.tudoubaba.net/

## 皮肤

https://namemc.com/minecraft-skins/trending

## 2B2T

https://2b2t.miraheze.org/wiki/Front_Page


## 辅助工具

- https://www.mcnav.net/
- https://minecraft.tools/en/motd.php
- https://minecraft-heads.com/player-heads
- https://magma.ink/bluemap/
- https://www.plotz.co.uk/
- https://www.chunkbase.com/apps/

### motd

- https://tools.fadehost.com/motd-generator
