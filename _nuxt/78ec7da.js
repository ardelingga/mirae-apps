(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{987:function(t,e,n){"use strict";n.r(e);var o=n(80),d=(n(211),n(8),n(119),n(124),{layout:"admin/main",head:function(){return{title:"Edit Category - Admin RA Nurul Hidayah",script:[{src:"/admin/vendors/typeahead.js/typeahead.bundle.min.js",body:!0},{src:"/admin/vendors/select2/select2.min.js",body:!0},{src:"/admin/js/file-upload.js",body:!0},{src:"/admin/js/typeahead.js",body:!0},{src:"/admin/js/select2.js",body:!0}],link:[{rel:"stylesheet",href:"/admin/vendors/select2/select2.min.css"},{rel:"stylesheet",href:"/admin/vendors/select2-bootstrap-theme/select2-bootstrap.min.css"}]}},components:{"ckeditor-nuxt":function(){return n.e(0).then(n.t.bind(null,941,7))}},data:function(){return{video:{title:"",embed:""},validation:[]}},mounted:function(){var t=this;this.$axios.get("/api/admin/videos/".concat(this.$route.params.id)).then((function(e){t.video.title=e.data.data.title,t.video.embed=e.data.data.embed}))},methods:{updateVideo:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("title",t.video.title),n.append("embed",t.video.embed),n.append("_method","PATCH"),e.next=6,t.$axios.post("/api/admin/videos/".concat(t.$route.params.id),n).then((function(){t.$swal.fire({title:"BERHASIL!",text:"Data Berhasil Diupdate!",icon:"success",showConfirmButton:!1,timer:2e3}),t.$router.push({name:"admin-video"})})).catch((function(e){t.validation=e.response.data}));case 6:case"end":return e.stop()}}),e)})))()}}}),r=n(77),component=Object(r.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v("Edit Video Kegiatan")]),t._v(" "),e("form",{staticClass:"forms-sample",on:{submit:function(e){return e.preventDefault(),t.updateVideo.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputName1"}},[t._v("Judul")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.video.title,expression:"video.title"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName1",placeholder:"Masukan Judul"},domProps:{value:t.video.title},on:{input:function(e){e.target.composing||t.$set(t.video,"title",e.target.value)}}}),t._v(" "),t.validation.title?e("div",{staticClass:"mt-3"},[e("vs-alert",{attrs:{variant:"error"}},[t._v(" "+t._s(t.validation.title[0])+" ")])],1):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputName1"}},[t._v("Embed Link URL")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.video.embed,expression:"video.embed"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName1",placeholder:"Masukan Nama Menu"},domProps:{value:t.video.embed},on:{input:function(e){e.target.composing||t.$set(t.video,"embed",e.target.value)}}}),t._v(" "),t.validation.embed?e("div",{staticClass:"mt-3"},[e("vs-alert",{attrs:{variant:"error"}},[t._v(" "+t._s(t.validation.embed[0])+" ")])],1):t._e()]),t._v(" "),e("button",{staticClass:"btn btn-success mr-2",attrs:{type:"submit"}},[t._v("Edit")]),t._v(" "),e("NuxtLink",{staticClass:"btn btn-light",attrs:{to:{name:"admin-video"}}},[t._v("\n          Cancel\n        ")])],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);