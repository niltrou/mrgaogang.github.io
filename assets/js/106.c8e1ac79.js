(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{393:function(t,s,e){"use strict";e.r(s);var a=e(18),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("以下所有文件均是原创，如需转载请注明作者和链接地址。")])]),t._v(" "),e("h4",{attrs:{id:"_1、如何读取resource下的配置文件信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、如何读取resource下的配置文件信息"}},[t._v("#")]),t._v(" 1、如何读取resource下的配置文件信息")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("假设resource目录下的文明为properties文件；\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//第一步：获取配置文件目录:\nFile resourcePath=Core.getConfiguration().getResourcesPath();\n\n//第二步：读取对应配置文件，此处可以根据环境的不同读取不同的配置文件\nFile configFile=new File(resourcePath,"config.properties");\n\nProperties prop = new Properties();\n//第三步：读取属性文件到Properties中\nInputStream in = new BufferedInputStream (new FileInputStream(configFile));\nprop.load(in);     ///加载属性列表\n Iterator<String> it=prop.stringPropertyNames().iterator();\n         while(it.hasNext()){\n            String key=it.next();\n            System.out.println(key+":"+prop.getProperty(key));\n         }\nin.close();\n')])])]),e("h4",{attrs:{id:"_2、如何获取cookie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、如何获取cookie"}},[t._v("#")]),t._v(" 2、如何获取Cookie")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" cookies"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cookie")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" cook"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("context")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRuntimeRequest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHttpServletRequest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCookies")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cookie")]),t._v(" c"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("cook"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cookies"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v("c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"="')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('";"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"_3、如何在java中打log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、如何在java中打log"}},[t._v("#")]),t._v(" 3、如何在java中打Log")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('private static ILogNode log=Core.getLogger("mylogname");\n')])])]),e("h4",{attrs:{id:"_4、如何在mendix启动之前做一下预处理？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、如何在mendix启动之前做一下预处理？"}},[t._v("#")]),t._v(" 4、如何在mendix启动之前做一下预处理？")]),t._v(" "),e("blockquote",[e("p",[t._v("只需要在Project》Settings》Runtime》After Startup中调用即可。")])]),t._v(" "),e("h4",{attrs:{id:"_5、自定义rest服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、自定义rest服务"}},[t._v("#")]),t._v(" 5、自定义Rest服务")]),t._v(" "),e("blockquote",[e("p",[t._v("常常使用mendix自带的Rest服务无法满足我们的需求，那么怎么自定义Rest服务呢？自定义Rest服务只需要继承RequestHandler即可。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//第一步：继承RequestHandler，并实现processRequest方法\npublic class ArticleService extends RequestHandler {\n    @Override\n    protected void processRequest(IMxRuntimeRequest iMxRuntimeRequest, IMxRuntimeResponse iMxRuntimeResponse, String path) throws Exception {\n        \n    }\n}\n\n//第二步：在启动整个mendix的时候，调用一个Javaaction，在此Action中进行Rest服务注册。\n\npublic java.lang.Boolean executeAction() throws Exception\n\t{\n\t\t// BEGIN USER CODE\n\t\t//throw new com.mendix.systemwideinterfaces.MendixRuntimeException("Java action was not implemented");\n\t\t// 注册自定义服务\n\t\tCore.addRequestHandler("my/rest",new ArticleService());\n\t\treturn true;\n\t\t// END USER CODE\n\t}\n\n')])])])])}),[],!1,null,null,null);s.default=n.exports}}]);