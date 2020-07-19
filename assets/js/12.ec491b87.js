(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{226:function(a,t,e){a.exports=e.p+"assets/img/icon.34a9c15f.gif"},227:function(a,t,e){a.exports=e.p+"assets/img/1.3eb938cc.png"},228:function(a,t,e){a.exports=e.p+"assets/img/2.e5f20fe2.png"},301:function(a,t,e){"use strict";e.r(t);var s=e(1),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[s("strong",[a._v("强调强调")]),a._v("，设置了 ICON 动态变化的时候，在更新 "),s("code",[a._v("APP")]),a._v(" 版本的时候，必须一定要记住将 "),s("code",[a._v("icon")]),a._v(" 的版本设置回默认的，否则无法安装新的版本。")]),a._v(" "),s("p",[a._v("使用的方法是："),s("strong",[a._v("利用 "),s("code",[a._v("android")]),a._v(" 下的"),s("code",[a._v("activity-alias")]),a._v(" 达到动态更换 Icon 和标题的目的")]),a._v("。")]),a._v(" "),s("p",[s("img",{attrs:{src:e(226),alt:""}})]),a._v(" "),s("h2",{attrs:{id:"一、知道如何关闭一个组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、知道如何关闭一个组件","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、知道如何关闭一个组件")]),a._v(" "),s("p",[a._v("关闭组件其实并不难，只要创建 "),s("code",[a._v("packageManager")]),a._v(" 对象和 "),s("code",[a._v("ComponentName")]),a._v(" 对象，并调用 "),s("code",[a._v("packageManager")]),a._v(" 对象的 "),s("code",[a._v("setComponentEnabledSetting")]),a._v(" 方法。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" setComponentEnabledSetting "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ComponentName")]),a._v(" componentName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" newState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),s("ul",[s("li",[s("code",[a._v("componentName")]),a._v("：组件名称")]),a._v(" "),s("li",[s("code",[a._v("newState")]),a._v("：组件新的状态，可以设置三个值，分别是如下：\n"),s("ul",[s("li",[a._v("不可用状态：COMPONENT_ENABLED_STATE_DISABLED")]),a._v(" "),s("li",[a._v("可用状态：COMPONENT_ENABLED_STATE_ENABLED")]),a._v(" "),s("li",[a._v("默认状态：COMPONENT_ENABLED_STATE_DEFAULT")])])]),a._v(" "),s("li",[s("code",[a._v("flags")]),a._v(":行为标签，值可以是 "),s("code",[a._v("DONT_KILL_APP")]),a._v(" 或者 0。 0 说明杀死包含该组件的 app")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getComponentEnabledSetting")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ComponentName")]),a._v(" componentName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//获取组件的状态")]),a._v("\n")])])]),s("h2",{attrs:{id:"二、使用-activity-alias-更换-icon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、使用-activity-alias-更换-icon","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、使用 activity-alias 更换 icon")]),a._v(" "),s("h3",{attrs:{id:"_1、在androidmanifast-xml-文件中设置-activity-alias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、在androidmanifast-xml-文件中设置-activity-alias","aria-hidden":"true"}},[a._v("#")]),a._v(" 1、在"),s("code",[a._v("AndroidManifast.xml")]),a._v(" 文件中设置 "),s("code",[a._v("activity-alias")])]),a._v(" "),s("p",[s("img",{attrs:{src:e(227),alt:""}})]),a._v(" "),s("p",[s("strong",[a._v("需要注意的是：")]),a._v("\n假设要更换多个 "),s("code",[a._v("icon")]),a._v(" 那么需要提前将所有可能的 "),s("code",[a._v("icon")]),a._v(" 做好，并且设置为"),s("code",[a._v("activity-alias")]),a._v("\n因为上述的两个 "),s("code",[a._v("activity-alias")]),a._v(" 都独立的设置了"),s("code",[a._v("<intent-filter>")]),a._v("，且 "),s("code",[a._v("targetActivity")]),a._v(" 都是为 "),s("code",[a._v("MainActivity")]),a._v("，那么"),s("code",[a._v("MainActivity")]),a._v(" 就不需要再设置"),s("code",[a._v("<intent-filter>")]),a._v("了，如果设置了，就会导致程序被杀死。\n默认新的 "),s("code",[a._v("icon")]),a._v(" 的 "),s("code",[a._v("activity-alias")]),a._v(" 是 "),s("code",[a._v("enable")])]),a._v(" "),s("h3",{attrs:{id:"_2、在代码中通过关闭和开启组件更新-icon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、在代码中通过关闭和开启组件更新-icon","aria-hidden":"true"}},[a._v("#")]),a._v(" 2、在代码中通过关闭和开启组件更新 icon")]),a._v(" "),s("p",[s("img",{attrs:{src:e(228),alt:""}})]),a._v(" "),s("p",[s("em",[a._v("注意的是：")]),a._v("\n通过 "),s("code",[a._v("ComponentName")]),a._v(" 来获取组件\n通过 "),s("code",[a._v("setComponentEnableSetting()")]),a._v("方法来设置组件是否可用;关键是里面的三个参数：第二个就是 "),s("code",[a._v("PackageManager")]),a._v("."),s("code",[a._v("COMPONENT_ENABLED_STATE_ENABLED")]),a._v(",表示可用；"),s("code",[a._v("PackageManager.COMPONENT_ENABLED_STATE_DISABLED")]),a._v(",表示不可用。")]),a._v(" "),s("h2",{attrs:{id:"三、动态设置-icon-注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、动态设置-icon-注意事项","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、动态设置 icon 注意事项")]),a._v(" "),s("p",[a._v("在更换了 "),s("code",[a._v("icon")]),a._v(" 之后，需要大约 5s 左右的时间系统的 "),s("code",[a._v("Launcher")]),a._v(" 才会刷新，才可见 icon 的改变")]),a._v(" "),s("ul",[s("li",[a._v("假设现在的 APP 版本是 1.0，不管是否更换了 icon，那么在继续按照 1.0 版本的 APP 时时不存在问题的；")]),a._v(" "),s("li",[a._v("假设现在要安装 1.2 版本，如果已经存在 APP 版本是 1.0，且 icon 还是使用的默认的（也就是 activity-alias 设置为 enable 的那个），那么更新版本是不存在问题的。")]),a._v(" "),s("li",[a._v("假设现在安装 1.2 版本，已经存在的 1.0 版本的 icon 换成了新的，且没有切换回默认的，则无法安装 APP。（会报错：")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("Error "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" executing: am start -n "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"com.mrgao.test/com.mrgao.test.default"')]),a._v(" -a android.intent.action.MAIN -c android.intent.category.LAUNCHER\n  Starting: Intent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("act")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("android.intent.action.MAIN "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("cat")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("android.intent.category.LAUNCHER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("cmp")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("com.mrgao.test/.default "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  Error "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n  Error: Activity class "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("com.mrgao.test/com.mrgao.test.default"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" does not exist.\n\nError "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" Launching activity）\n")])])]),s("p",[s("strong",[a._v("综上所述，设置了 ICON 动态变化的时候，在更新 APP 版本的时候，必须一定要记住将 icon 的版本设置回默认的，否则无法安装新的版本")]),a._v("。")])])}),[],!1,null,null,null);t.default=n.exports}}]);