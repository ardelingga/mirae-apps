(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{888:function(t,e,r){var content=r(912);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(166).default)("4bf99d66",content,!0,{sourceMap:!1})},911:function(t,e,r){"use strict";r(888)},912:function(t,e,r){var n=r(165)((function(i){return i[1]}));n.push([t.i,".ck-editor__editable{min-height:400px}",""]),n.locals={},t.exports=n},966:function(t,e,r){"use strict";r.r(e);r(13),r(167);var n=r(80),o=(r(211),r(8),r(39),r(119),r(373),r(124),{layout:"admin/main",head:function(){return{title:"Tambah Keunggulan Sekolah - Admin RA Nurul Hidayah",script:[{src:"/admin/vendors/typeahead.js/typeahead.bundle.min.js",body:!0},{src:"/admin/vendors/select2/select2.min.js",body:!0},{src:"/admin/js/file-upload.js",body:!0},{src:"/admin/js/typeahead.js",body:!0},{src:"/admin/js/select2.js",body:!0}],link:[{rel:"stylesheet",href:"/admin/vendors/select2/select2.min.css"},{rel:"stylesheet",href:"/admin/vendors/select2-bootstrap-theme/select2-bootstrap.min.css"}]}},components:{"ckeditor-nuxt":function(){return r.e(0).then(r.t.bind(null,941,7))}},data:function(){return{superiority:{icon:"",title:"",description:""},validation:[]}},mounted:function(){},methods:{handleFileChange:function(t){(this.superiority.icon=t.target.files[0]).type.match("image.*")||(t.target.value="",this.superiority.icon=null,this.$swal.fire({title:"OOPS!",text:"Format File Tidak Didukung!",icon:"error",showConfirmButton:!1,timer:2e3}))},storeSuperiority:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("icon",t.superiority.icon),r.append("title",t.superiority.title),r.append("description",t.superiority.description),e.next=6,t.$axios.post("/api/admin/superiorities",r).then((function(){t.$swal.fire({title:"BERHASIL!",text:"Data Berhasil Disimpan!",icon:"success",showConfirmButton:!1,timer:2e3}),t.$router.push({name:"admin-superiority"})})).catch((function(e){t.validation=e.response.data}));case 6:case"end":return e.stop()}}),e)})))()}}}),l=(r(911),r(77)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v("Tambah Data Keunggulan Sekolah")]),t._v(" "),e("form",{staticClass:"forms-sample",on:{submit:function(e){return e.preventDefault(),t.storeSuperiority.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",[t._v("Icon")]),t._v(" "),e("div",{staticClass:"input-group col-xs-12"},[e("input",{staticClass:"form-control file-upload-info",attrs:{type:"file",placeholder:"Upload Icon"},on:{change:t.handleFileChange}}),t._v(" "),t._m(0)]),t._v(" "),t.validation.icon?e("div",{staticClass:"mt-3"},[e("vs-alert",{attrs:{variant:"error"}},[t._v(" "+t._s(t.validation.icon[0])+" ")])],1):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputName1"}},[t._v("Judul")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.superiority.title,expression:"superiority.title"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName1",placeholder:"Masukan Judul Keunggulan Sekolah"},domProps:{value:t.superiority.title},on:{input:function(e){e.target.composing||t.$set(t.superiority,"title",e.target.value)}}}),t._v(" "),t.validation.title?e("div",{staticClass:"mt-3"},[e("vs-alert",{attrs:{variant:"error"}},[t._v(" "+t._s(t.validation.title[0])+" ")])],1):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleTextarea1"}},[t._v("Deskripsi")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.superiority.description,expression:"superiority.description"}],staticClass:"form-control",attrs:{placeholder:"Masukan Deskripsi Mengenai Keunggulan Sekolah",rows:"4"},domProps:{value:t.superiority.description},on:{input:function(e){e.target.composing||t.$set(t.superiority,"description",e.target.value)}}}),t._v(" "),t.validation.description?e("div",{staticClass:"mt-3"},[e("vs-alert",{attrs:{variant:"error"}},[t._v(" "+t._s(t.validation.description[0])+" ")])],1):t._e()]),t._v(" "),e("button",{staticClass:"btn btn-success mr-2",attrs:{type:"submit"}},[t._v("Tambah")]),t._v(" "),e("NuxtLink",{staticClass:"btn btn-light",attrs:{to:{name:"admin-superiority"}}},[t._v("\n          Cancel\n        ")])],1)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"input-group-append"},[t("span",{staticClass:"file-upload-browse btn bg-success text-white"},[this._v("Image")])])}],!1,null,null,null);e.default=component.exports}}]);