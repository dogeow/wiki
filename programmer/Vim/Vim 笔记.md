##  说明
只记录该书的内容，其他比较基础的并不会记录下来。

目前只看了一半，记录的也只是一半中的一小部分。

##  模式

* 普通模式。`C-[` 切换到普通模式，相当于 `ESC`。
* 插入模式
* 插入-普通模式，`C-o` 切换到该模式。该模式中可以执行命令，然后自动切换到插入模式。

##  叠
`dd`、`>>`、`gUgU`（缩写：`gUU`），第二个相同字符或单词，比较作用于当前行。

d 是删除的意思。

##  次数或范围
次数：`d3d`、`>3>`

范围：`dGd`、`>G`

##  重复
使用 `.`。它能够重复进入插入模式之后所做的的操作

##  移动

###  单词
上个单词开头 b

下个单词开头 w

单词结尾 e

上个单词开头 ge

###  行
0：移到行首

^：到本行第一个不是blank字符的位置（所谓blank字符就是空格，tab，换行，回车等）

$：移动光标到行尾。

光标之后，搜索字符：f，比如：`fTest`。查找前一个 `n`，后一个 `N`。或者 `;`，后一个 `,`

光标之前，搜索字符：F（别名 `?`），比如： `FTest`。查找前一个 n，后一个 N

###  句子
* )：移动光标到下一个句子。
* ( ：移动光标到上一个句子。
  空行也算。

###  屏幕
* H：移动光标到屏幕上面
* M：移动光标到屏幕中间
* L：移动光标到屏幕下面
* `<C-F>`：向下移动一屏。
* `<C-B>`：向上移动一屏。
###  全局
`/`，/Test
* numG：移动光标到指定的行（num）。（比如 10G 就是到第 10 行）
###  记忆
mm 在当前光标的位置标记一个书签，名字为 m。书签名只能是小写字母。

`m 到书签 m 处。

`.：到你上次编辑文件的地方。这个命令很有用，而且你不用自己去标记它。

###  文件
* gg：到文件首
* G：到文件尾
##  插入位置

###  列
`A` 在行末插入，相当于 `$a`

`I` 在行前插入，相当于 `^i`

###  行
`o` 向下插入一行

`O` 向上插入一行

##  修改
R

##  删除

###  字符
删除光标当前字符 x（dl）

C-h 删除前一个字符，相当于退格键，和 `C-[`，类似。

删除光标当前字符，并进入插入模式 s（cl）。c 是修改的意思。

###  单词
C-u 删除置行首

C-w 删除前一个单词

删除光标后的单词，并进入插入模式。

db 删除光标前的单词（最后还要按 x 删除光标单词），或者，bdw。最好：daw 删除 删除一个单词

###  行
dd （别名 D） 删除当前行

cc（别名 S）   删除当前行，并进入插入模式

##  复制黏贴
复制：yy

黏贴：p

##  修饰

###  大小写
g~ 反转

gu 小写

gU 大写

操作 + 对象：gUaw

###  缩进
>

< 减少缩进

= 自动缩进

###  数字加减
C-a

C-x

##  范围
aw 单词

ap 段落

比如 dap 删除段落

###  文本对象
iw 当前单词

aw 当前单词及一个空格

iW 当前字串

aW 当前字串及一个空格

is 当前句子

as 当前句子及一个空格

ip 当前段落

ap 当前段落及一个空格

##  sed 替换
:s/target/replacement/

:s/target/replacement/g

##  窗口
zz 光表所在行屏幕垂直中

ZZ 保存并关闭文件

##  寄存器
插入模式中

C-r = 1+1 CR

##  输入非常用字
插入模式中

C-v 065

二合字母

C-k ?I

##  Ex 命令
@: 重复上一次命令

##  执行 Shell
:!ls

:!php % 执行当前文件，% 代表当前文件

:shell 执行多行。可以使用 C-z 和 fg

正则，去掉每行行首的空格 :%s/^ *//

##  插件
vim-commentary 代码注释，gcc 注释

##  其他
[MacVim](https://github.com/macvim-dev/macvim/releases/tag/snapshot-172)


VimR
## 学习
* https://wklken.me/posts/2013/08/04/translation-vim-introduction-and-tutorial.html
* http://vimcdoc.sourceforge.net/doc/
