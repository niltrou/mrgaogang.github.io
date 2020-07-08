(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{232:function(t,a,s){t.exports=s.p+"assets/img/icon.34a9c15f.gif"},233:function(t,a,s){t.exports=s.p+"assets/img/1.3eb938cc.png"},234:function(t,a,s){t.exports=s.p+"assets/img/2.e5f20fe2.png"},299:function(t,a,s){"use strict";s.r(a);var e=s(18),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("strong",[t._v("强调强调")]),t._v("，设置了 ICON 动态变化的时候，在更新 "),e("code",[t._v("APP")]),t._v(" 版本的时候，必须一定要记住将 "),e("code",[t._v("icon")]),t._v(" 的版本设置回默认的，否则无法安装新的版本。")]),t._v(" "),e("p",[t._v("使用的方法是："),e("strong",[t._v("利用 "),e("code",[t._v("android")]),t._v(" 下的"),e("code",[t._v("activity-alias")]),t._v(" 达到动态更换 Icon 和标题的目的")]),t._v("。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(232),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"一、知道如何关闭一个组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、知道如何关闭一个组件"}},[t._v("#")]),t._v(" 一、知道如何关闭一个组件")]),t._v(" "),e("p",[t._v("关闭组件其实并不难，只要创建 "),e("code",[t._v("packageManager")]),t._v(" 对象和 "),e("code",[t._v("ComponentName")]),t._v(" 对象，并调用 "),e("code",[t._v("packageManager")]),t._v(" 对象的 "),e("code",[t._v("setComponentEnabledSetting")]),t._v(" 方法。")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" setComponentEnabledSetting "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ComponentName")]),t._v(" componentName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" newState"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" flags"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),e("ul",[e("li",[e("code",[t._v("componentName")]),t._v("：组件名称")]),t._v(" "),e("li",[e("code",[t._v("newState")]),t._v("：组件新的状态，可以设置三个值，分别是如下：\n"),e("ul",[e("li",[t._v("不可用状态：COMPONENT_ENABLED_STATE_DISABLED")]),t._v(" "),e("li",[t._v("可用状态：COMPONENT_ENABLED_STATE_ENABLED")]),t._v(" "),e("li",[t._v("默认状态：COMPONENT_ENABLED_STATE_DEFAULT")])])]),t._v(" "),e("li",[e("code",[t._v("flags")]),t._v(":行为标签，值可以是 "),e("code",[t._v("DONT_KILL_APP")]),t._v(" 或者 0。 0 说明杀死包含该组件的 app")])]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getComponentEnabledSetting")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ComponentName")]),t._v(" componentName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取组件的状态")]),t._v("\n")])])]),e("h2",{attrs:{id:"二、使用-activity-alias-更换-icon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、使用-activity-alias-更换-icon"}},[t._v("#")]),t._v(" 二、使用 activity-alias 更换 icon")]),t._v(" "),e("h3",{attrs:{id:"_1、在androidmanifast-xml-文件中设置-activity-alias"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、在androidmanifast-xml-文件中设置-activity-alias"}},[t._v("#")]),t._v(" 1、在"),e("code",[t._v("AndroidManifast.xml")]),t._v(" 文件中设置 "),e("code",[t._v("activity-alias")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(233),alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("需要注意的是：")]),t._v("\n假设要更换多个 "),e("code",[t._v("icon")]),t._v(" 那么需要提前将所有可能的 "),e("code",[t._v("icon")]),t._v(" 做好，并且设置为"),e("code",[t._v("activity-alias")]),t._v("\n因为上述的两个 "),e("code",[t._v("activity-alias")]),t._v(" 都独立的设置了"),e("code",[t._v("<intent-filter>")]),t._v("，且 "),e("code",[t._v("targetActivity")]),t._v(" 都是为 "),e("code",[t._v("MainActivity")]),t._v("，那么"),e("code",[t._v("MainActivity")]),t._v(" 就不需要再设置"),e("code",[t._v("<intent-filter>")]),t._v("了，如果设置了，就会导致程序被杀死。\n默认新的 "),e("code",[t._v("icon")]),t._v(" 的 "),e("code",[t._v("activity-alias")]),t._v(" 是 "),e("code",[t._v("enable")])]),t._v(" "),e("h3",{attrs:{id:"_2、在代码中通过关闭和开启组件更新-icon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、在代码中通过关闭和开启组件更新-icon"}},[t._v("#")]),t._v(" 2、在代码中通过关闭和开启组件更新 icon")]),t._v(" "),e("p",[e("img",{attrs:{src:s(234),alt:""}})]),t._v(" "),e("p",[e("em",[t._v("注意的是：")]),t._v("\n通过 "),e("code",[t._v("ComponentName")]),t._v(" 来获取组件\n通过 "),e("code",[t._v("setComponentEnableSetting()")]),t._v("方法来设置组件是否可用;关键是里面的三个参数：第二个就是 "),e("code",[t._v("PackageManager")]),t._v("."),e("code",[t._v("COMPONENT_ENABLED_STATE_ENABLED")]),t._v(",表示可用；"),e("code",[t._v("PackageManager.COMPONENT_ENABLED_STATE_DISABLED")]),t._v(",表示不可用。")]),t._v(" "),e("h2",{attrs:{id:"三、动态设置-icon-注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、动态设置-icon-注意事项"}},[t._v("#")]),t._v(" 三、动态设置 icon 注意事项")]),t._v(" "),e("p",[t._v("在更换了 "),e("code",[t._v("icon")]),t._v(" 之后，需要大约 5s 左右的时间系统的 "),e("code",[t._v("Launcher")]),t._v(" 才会刷新，才可见 icon 的改变")]),t._v(" "),e("ul",[e("li",[t._v("假设现在的 APP 版本是 1.0，不管是否更换了 icon，那么在继续按照 1.0 版本的 APP 时时不存在问题的；")]),t._v(" "),e("li",[t._v("假设现在要安装 1.2 版本，如果已经存在 APP 版本是 1.0，且 icon 还是使用的默认的（也就是 activity-alias 设置为 enable 的那个），那么更新版本是不存在问题的。")]),t._v(" "),e("li",[t._v("假设现在安装 1.2 版本，已经存在的 1.0 版本的 icon 换成了新的，且没有切换回默认的，则无法安装 APP。（会报错：")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("Error "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" executing: am start -n "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.mrgao.test/com.mrgao.test.default"')]),t._v(" -a android.intent.action.MAIN -c android.intent.category.LAUNCHER\n  Starting: Intent "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("act")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("android.intent.action.MAIN "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("cat")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("android.intent.category.LAUNCHER"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("cmp")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("com.mrgao.test/.default "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  Error "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  Error: Activity class "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("com.mrgao.test/com.mrgao.test.default"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" does not exist.\n\nError "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" Launching activity）\n")])])]),e("p",[e("strong",[t._v("综上所述，设置了 ICON 动态变化的时候，在更新 APP 版本的时候，必须一定要记住将 icon 的版本设置回默认的，否则无法安装新的版本")]),t._v("。")])])}),[],!1,null,null,null);a.default=n.exports}}]);