(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{198:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"뷰-템플릿"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#뷰-템플릿","aria-hidden":"true"}},[s._v("#")]),s._v(" 뷰 템플릿")]),s._v(" "),n("h2",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),n("pre",[n("code",[s._v("new Vue();\n")])]),s._v(" "),n("ul",[n("li",[s._v("생성자 함수")]),s._v(" "),n("li",[s._v("인스턴스를 사용하는 이유")]),s._v(" "),n("li",[s._v("뷰를 사용할때 가장 기본적으로 써야하는 코드")]),s._v(" "),n("li",[s._v("인스턴스를 생성하고 나면 아래와 같이 인스턴스 안에 어떤 속성과 API가 있는지 확인할수 있다.")])]),s._v(" "),n("hr"),s._v(" "),n("pre",[n("code",[s._v("var vm = new Vue();\nconsole.log(vm);\n")])]),s._v(" "),n("ul",[n("li",[s._v("뷰 컴포넌트")]),s._v(" "),n("li",[s._v("컴포넌트를 사용하는 이유")])]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("기능을 쪼개서 사용하기 위해")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("컴포넌트 기본 문법")])]),s._v(" "),n("li",[n("p",[s._v("전역 컴포넌트")])])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("    Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'global-component'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<p><strong>This is a global component</strong></p>'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("지역 컴포넌트")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" cmp "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<p><strong>This is a local component</strong></p>'")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" app "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       message "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'This is a parent component'")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 지역 컴포넌트 등록")]),s._v("\n     components"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'local-component'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'another-local-component'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" acmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("뷰 컴포넌트 통신 방법")])]),s._v(" "),n("li",[n("p",[s._v("컴포넌트 통신 규칙이 있는 이유?\n--\n통신 규약이 없을경우 데이터에서 문제가 발생했을경우 추적하기 어렵다.")])]),s._v(" "),n("li",[n("p",[s._v("props 속성")])]),s._v(" "),n("li",[n("p",[s._v("event emit")])]),s._v(" "),n("li",[n("p",[s._v("Axios")])]),s._v(" "),n("li",[n("p",[s._v("HTTP 통신 라이브러리")])]),s._v(" "),n("li",[n("p",[s._v("웹 서비스 구조도")])]),s._v(" "),n("li",[n("p",[s._v("Axios 장단점")])])])])},[],!1,null,null,null);t.default=e.exports}}]);