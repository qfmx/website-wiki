(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{408:function(s,a,t){"use strict";t.r(a);var e=t(4),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-什么是dockerfile"}},[s._v("1.什么是Dockerfile")])]),a("li",[a("a",{attrs:{href:"#_2-如何用dockerfile制作镜像"}},[s._v("2.如何用Dockerfile制作镜像")])]),a("li",[a("a",{attrs:{href:"#_3-构建镜像"}},[s._v("3.构建镜像")])]),a("li",[a("a",{attrs:{href:"#_4-其他指令"}},[s._v("4.其他指令")]),a("ul",[a("li",[a("a",{attrs:{href:"#copy"}},[s._v("COPY")])]),a("li",[a("a",{attrs:{href:"#cmd"}},[s._v("CMD")])]),a("li",[a("a",{attrs:{href:"#entrypoint"}},[s._v("ENTRYPOINT")])]),a("li",[a("a",{attrs:{href:"#env"}},[s._v("ENV")])]),a("li",[a("a",{attrs:{href:"#volume"}},[s._v("VOLUME")])]),a("li",[a("a",{attrs:{href:"#workdir"}},[s._v("WORKDIR")])]),a("li",[a("a",{attrs:{href:"#label"}},[s._v("LABEL")])])])])])]),a("p"),s._v(" "),a("p",[a("img",{attrs:{src:"https://fire-repository.oss-cn-beijing.aliyuncs.com/docker/article/3.jpg",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"_1-什么是dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是dockerfile"}},[s._v("#")]),s._v(" 1.什么是Dockerfile")]),s._v(" "),a("p",[s._v("Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。")]),s._v(" "),a("h2",{attrs:{id:"_2-如何用dockerfile制作镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何用dockerfile制作镜像"}},[s._v("#")]),s._v(" 2.如何用Dockerfile制作镜像")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("FROM nginx\nRUN "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'这是一个本地构建的nginx镜像'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /usr/share/nginx/html/index.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("FROM：定制的镜像都是基于 FROM 的镜像，这里的 nginx 就是定制需要的基础镜像。")])]),s._v(" "),a("li",[a("p",[s._v("RUN：用于执行后面跟着的命令行命令。有以下俩种格式：")]),s._v(" "),a("ul",[a("li",[s._v("RUN <命令>")]),s._v(" "),a("li",[s._v('RUN ["可执行文件", "参数1", "参数2"]')])])])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("Dockerfile 的指令每执行一次都会在 docker 上新建一层。\n所以过多无意义的层，会造成镜像膨胀过大")])]),s._v(" "),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("FROM centos\nRUN yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v("\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-O")]),s._v(" redis.tar.gz "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://download.redis.io/releases/redis-5.0.3.tar.gz"')]),s._v("\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xvf")]),s._v(" redis.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("简化后：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("FROM centos\nRUN yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-O")]),s._v(" redis.tar.gz "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://download.redis.io/releases/redis-5.0.3.tar.gz"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xvf")]),s._v(" redis.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_3-构建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-构建镜像"}},[s._v("#")]),s._v(" 3.构建镜像")]),s._v(" "),a("p",[s._v("在 Dockerfile 文件的存放目录下，执行构建动作。")]),s._v(" "),a("p",[s._v("eg:通过目录下的 Dockerfile 构建一个 nginx:v3（镜像名称:镜像标签）")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" nginx:v1 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[s._v(".")]),s._v("代表上下文路径，默认都会打包，也就是dockerfile所在路径")])]),s._v(" "),a("h2",{attrs:{id:"_4-其他指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-其他指令"}},[s._v("#")]),s._v(" 4.其他指令")]),s._v(" "),a("h3",{attrs:{id:"copy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy"}},[s._v("#")]),s._v(" COPY")]),s._v(" "),a("p",[s._v("复制指令，从上下文目录中复制文件或者目录到容器里指定路径。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("COPY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--chown"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("源路径"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("目标路径"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nCOPY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--chown"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<源路径1>"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<目标路径>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("<目标路径>：容器内的指定路径，该路径不用事先建好，路径不存在的话，会自动创建。")]),s._v(" "),a("h3",{attrs:{id:"cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[s._v("#")]),s._v(" CMD")]),s._v(" "),a("p",[s._v("类似于 RUN 指令，用于运行程序，但二者运行的时间点不同:")]),s._v(" "),a("ul",[a("li",[s._v("CMD 在docker run 时运行。")]),s._v(" "),a("li",[s._v("RUN 是在 docker build。")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("CMD "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("shell 命令"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \nCMD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<可执行文件或命令>"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<param1>"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<param2>"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \nCMD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<param1>"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<param2>"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该写法是为 ENTRYPOINT 指令指定的程序提供默认参数")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"entrypoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint"}},[s._v("#")]),s._v(" ENTRYPOINT")]),s._v(" "),a("p",[s._v("类似于 CMD 指令，但其不会被 docker run 的命令行参数指定的指令所覆盖\n"),a("strong",[s._v("优点：")]),s._v(" 在执行 docker run 的时候可以指定 ENTRYPOINT 运行所需的参数。\n"),a("strong",[s._v("注意：")]),s._v(" 如果 Dockerfile 中如果存在多个 ENTRYPOINT 指令，仅最后一个生效。")]),s._v(" "),a("p",[s._v("可以搭配 CMD 命令使用：一般是变参才会使用 CMD ，这里的 CMD 等于是在给 ENTRYPOINT 传参，以下示例会提到。")]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("p",[s._v("假设已通过 Dockerfile 构建了 nginx:test 镜像：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('FROM nginx\n\nENTRYPOINT ["nginx", "-c"] # 定参\nCMD ["/etc/nginx/nginx.conf"] # 变参\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("1、不传参运行")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run  nginx:test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("容器内会默认运行以下命令，启动主进程。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" /etc/nginx/nginx.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2、传参运行")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run  nginx:test "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" /etc/nginx/new.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("容器内会默认运行以下命令，启动主进程(/etc/nginx/new.conf:假设容器内已有此文件)")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" /etc/nginx/new.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[s._v("#")]),s._v(" ENV")]),s._v(" "),a("p",[s._v("设置环境变量，定义了环境变量，在后续的指令中使用这个环境变量。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ENV "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nENV "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("通过$变量名的方式引用定义好的变量，比如定义版本")]),s._v(" "),a("h3",{attrs:{id:"volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volume"}},[s._v("#")]),s._v(" VOLUME")]),s._v(" "),a("p",[s._v("定义匿名数据卷。在启动容器时忘记挂载数据卷，会自动挂载到匿名卷。")]),s._v(" "),a("p",[s._v("作用：")]),s._v(" "),a("ul",[a("li",[s._v("避免重要的数据，因容器重启而丢失，这是非常致命的。")]),s._v(" "),a("li",[s._v("避免容器不断变大。")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("VOLUME "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<路径1>"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<路径2>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nVOLUME "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("路径"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("启动容器 docker run 的时候，我们可以通过 -v 参数修改挂载点")]),s._v(" "),a("h3",{attrs:{id:"workdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workdir"}},[s._v("#")]),s._v(" WORKDIR")]),s._v(" "),a("p",[s._v("指定工作目录。用 WORKDIR 指定的工作目录，会在构建镜像的每一层中都存在。（WORKDIR 指定的工作目录，必须是提前创建好的）。")]),s._v(" "),a("p",[s._v("docker build 构建镜像过程中的，每一个 RUN 命令都是新建的一层。")]),s._v(" "),a("p",[s._v("只有通过 WORKDIR 创建的目录才会一直存在。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("WORKDIR "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("工作目录路径"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"label"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#label"}},[s._v("#")]),s._v(" LABEL")]),s._v(" "),a("p",[s._v("定义一些元数据，键值对形式")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("LABEL "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("eg：添加镜像作者")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("LABEL "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("org.opencontainers.image.authors")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mr.Fire"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);