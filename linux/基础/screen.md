几乎所有的 screen 命令都是以 Ctrl + a 开始，以另外一个按键或组合按键结束的。

比如 Ctrl + a, c 表示，同时按下 Ctrl 键和 a 键，都松开这两个健后按下 c 键，此时 screen 就为你创建了一个新的 window。

多数情况下，Ctrl + a, Key 和 Ctrl + a, Ctrl + Key 效果是相同的，即你也可以保持按下 Ctrl 键，接着一次敲击 a 键和 c 键来创建新 screen。但这对有些命令就不再适用，比如你想向当前 window 传递 Ctrl + a本身，就必须是Ctrl + a，按住 Ctrl 后按 a，而不能是Ctrl + a, Ctrl + a，因为后者用来在当前 window 和上一个 window 之间切换。

```
C-a ?	显示所有键绑定信息
C-a w	显示所有window列表
C-a C-a	切换到之前显示的window
C-a c	创建一个新的运行shell的window并切换到该window
C-a n	切换到下一个window
C-a p	切换到前一个window(与C-a n相对)
C-a 0..9	切换到window0..9
C-a a	发送 C-a到当前window
C-a A	改变当前window的名字
C-a d	暂时断开screen会话
C-a k	杀掉当前window
C-a [	进入拷贝/回滚模式
```

## 命令

- 新建 screen 会话：直接输入 screen 命令或者 screen -S [会话名称]
- 暂时离开会话：按下组合键 Ctrl + a 并松开，此时 screen 窗口等待命令，然后按下 d 并松开，退出 screen 窗口。
- 查看当前系统所有screen会话：screen -ls
- 进入某个screen会话：screen -r [会话的PID]
  - 当系统中只有一个 scree n会话时，输入：screen -r 即可进入这个会话
- 在进入某个screen会话后，杀死screen会话：按下组合键 Ctrl + a 并松开，此时 screen 窗口等待命令，然后按下大写的 K（即组合键：Shift+k）并松开，（系统提示是否要杀死）按下y确认杀死 screen 会话。
- 上一步是进去后结束的，还没进去时，使用<code>screen -S id或会话名 -X quit</code>
