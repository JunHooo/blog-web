webpackJsonp([4],{"2H4I":function(t,a){},epW7:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Ss9Q"),n={data:function(){return{blogs:[],totalPage:0,page:1,total:0}},created:function(){var t=this;this.page=parseInt(this.$route.query.page)||1,s.a.getIndexBlogs({page:this.page}).then(function(a){console.log(a),t.blogs=a.data,t.totalPage=a.totalPage,t.page=a.page,t.total=a.total})},methods:{pageChange:function(t){var a=this;s.a.getBlogs({page:t}).then(function(e){console.log(e),a.blogs=e.data,a.totalPage=e.totalPage,a.page=e.page,a.total=e.total,a.$router.push({path:"/",query:{page:t}})})}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"index"}},[e("section",{staticClass:"blog-posts"},t._l(t.blogs,function(a){return e("router-link",{key:a.id,staticClass:"item",attrs:{to:"/detail/"+a.id}},[e("figure",{staticClass:"avatar"},[e("img",{attrs:{src:a.user.avatar,alt:a.user.username}}),t._v(" "),e("figcaption",[t._v(t._s(a.user.username))])]),t._v(" "),e("h3",[t._v(t._s(a.title)+" "),e("span",[t._v(t._s(t.friendlyDate(a.createdAt)))])]),t._v(" "),e("p",[t._v(t._s(a.description))])])}),1),t._v(" "),e("section",{staticClass:"pagination"},[e("el-pagination",{attrs:{layout:" prev, pager, next","page-size":20,"current-page":t.page,total:t.total},on:{"current-change":t.pageChange}})],1)])},staticRenderFns:[]};var r=e("VU/8")(n,o,!1,function(t){e("2H4I")},"data-v-4c9386bc",null);a.default=r.exports}});
//# sourceMappingURL=4.81b466906008d08b1601.js.map