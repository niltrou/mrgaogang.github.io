(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{243:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("以下所有文件均是原创，如需转载请注明作者和链接地址。")])]),t._v(" "),s("h4",{attrs:{id:"_1、如何读取resource下的配置文件信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、如何读取resource下的配置文件信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、如何读取resource下的配置文件信息")]),t._v(" "),s("pre",[s("code",[t._v("假设resource目录下的文明为properties文件；\n")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('//第一步：获取配置文件目录:\nFile resourcePath=Core.getConfiguration().getResourcesPath();\n\n//第二步：读取对应配置文件，此处可以根据环境的不同读取不同的配置文件\nFile configFile=new File(resourcePath,"config.properties");\n\nProperties prop = new Properties();\n//第三步：读取属性文件到Properties中\nInputStream in = new BufferedInputStream (new FileInputStream(configFile));\nprop.load(in);     ///加载属性列表\n Iterator<String> it=prop.stringPropertyNames().iterator();\n         while(it.hasNext()){\n            String key=it.next();\n            System.out.println(key+":"+prop.getProperty(key));\n         }\nin.close();\n')])])]),s("h4",{attrs:{id:"_2、如何获取cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、如何获取cookie","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、如何获取Cookie")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" cookies"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cookie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" cook"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRuntimeRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHttpServletRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCookies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cookie")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("cook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cookies"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"="')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('";"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_3、如何在java中打log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、如何在java中打log","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、如何在java中打Log")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('private static ILogNode log=Core.getLogger("mylogname");\n')])])]),s("h4",{attrs:{id:"_4、如何在mendix启动之前做一下预处理？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、如何在mendix启动之前做一下预处理？","aria-hidden":"true"}},[t._v("#")]),t._v(" 4、如何在mendix启动之前做一下预处理？")]),t._v(" "),s("blockquote",[s("p",[t._v("只需要在Project》Settings》Runtime》After Startup中调用即可。")])]),t._v(" "),s("h4",{attrs:{id:"_5、自定义rest服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、自定义rest服务","aria-hidden":"true"}},[t._v("#")]),t._v(" 5、自定义Rest服务")]),t._v(" "),s("blockquote",[s("p",[t._v("常常使用mendix自带的Rest服务无法满足我们的需求，那么怎么自定义Rest服务呢？自定义Rest服务只需要继承RequestHandler即可。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('//第一步：继承RequestHandler，并实现processRequest方法\npublic class ArticleService extends RequestHandler {\n    @Override\n    protected void processRequest(IMxRuntimeRequest iMxRuntimeRequest, IMxRuntimeResponse iMxRuntimeResponse, String path) throws Exception {\n        \n    }\n}\n\n//第二步：在启动整个mendix的时候，调用一个Javaaction，在此Action中进行Rest服务注册。\n\npublic java.lang.Boolean executeAction() throws Exception\n\t{\n\t\t// BEGIN USER CODE\n\t\t//throw new com.mendix.systemwideinterfaces.MendixRuntimeException("Java action was not implemented");\n\t\t// 注册自定义服务\n\t\tCore.addRequestHandler("my/rest",new ArticleService());\n\t\treturn true;\n\t\t// END USER CODE\n\t}\n\n')])])])])}),[],!1,null,null,null);e.default=n.exports}}]);