(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{960:function(t,e,n){"use strict";n.r(e);n(64);var r=n(80),o=(n(211),{layout:"admin/main",head:function(){return{title:"Tambah Category - Admin RA Nurul Hidayah",script:[{src:"/admin/vendors/typeahead.js/typeahead.bundle.min.js",body:!0},{src:"/admin/vendors/select2/select2.min.js",body:!0},{src:"/admin/js/file-upload.js",body:!0},{src:"/admin/js/typeahead.js",body:!0},{src:"/admin/js/select2.js",body:!0}],link:[{rel:"stylesheet",href:"/admin/vendors/select2/select2.min.css"},{rel:"stylesheet",href:"/admin/vendors/select2-bootstrap-theme/select2-bootstrap.min.css"}]}},components:{},data:function(){return{category:{name:""},validation:[]}},mounted:function(){},methods:{storeCategory:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("name",t.category.name),e.next=4,t.$axios.post("/api/admin/categories",n).then((function(){t.$swal.fire({title:"BERHASIL!",text:"Data Berhasil Disimpan!",icon:"success",showConfirmButton:!1,timer:2e3}),t.$router.push({name:"admin-category"})})).catch((function(e){t.validation=e.response.data}));case 4:case"end":return e.stop()}}),e)})))()}}}),c=n(77),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v("Tambah Data Category")]),t._v(" "),e("form",{staticClass:"forms-sample",on:{submit:function(e){return e.preventDefault(),t.storeCategory.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputName1"}},[t._v("Nama")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.category.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName1",placeholder:"Masukan Nama Menu"},domProps:{value:t.category.name},on:{input:function(e){e.target.composing||t.$set(t.category,"name",e.target.value)}}}),t._v(" "),t.validation.name?e("div",{staticClass:"mt-3"},[e("vs-alert",{attrs:{variant:"error"}},[t._v(" "+t._s(t.validation.name[0])+" ")])],1):t._e()]),t._v(" "),e("button",{staticClass:"btn btn-success mr-2",attrs:{type:"submit"}},[t._v("Tambah")]),t._v(" "),e("NuxtLink",{staticClass:"btn btn-light",attrs:{to:{name:"admin-menu"}}},[t._v("\n          Cancel\n        ")])],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);