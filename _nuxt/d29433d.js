(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{885:function(e,o,t){var content=t(906);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(166).default)("5cef3de1",content,!0,{sourceMap:!1})},905:function(e,o,t){"use strict";t(885)},906:function(e,o,t){var l=t(165)((function(i){return i[1]}));l.push([e.i,".ck-editor__editable{min-height:400px}",""]),l.locals={},e.exports=l},950:function(e,o,t){"use strict";t.r(o);t(64);var l=t(80),r=(t(211),t(8),t(39),t(119),t(373),t(124),{layout:"admin/main",head:function(){return{title:"Edit Teacher - Admin RA Nurul Hidayah",script:[{src:"/admin/vendors/typeahead.js/typeahead.bundle.min.js",body:!0},{src:"/admin/vendors/select2/select2.min.js",body:!0},{src:"/admin/js/file-upload.js",body:!0},{src:"/admin/js/typeahead.js",body:!0},{src:"/admin/js/select2.js",body:!0}],link:[{rel:"stylesheet",href:"/admin/vendors/select2/select2.min.css"},{rel:"stylesheet",href:"/admin/vendors/select2-bootstrap-theme/select2-bootstrap.min.css"}]}},components:{"ckeditor-nuxt":function(){return t.e(0).then(t.t.bind(null,941,7))}},data:function(){return{schoolProfile:{logo:"",name:"",about:"",phone:"",email:"",address:"",logoUrl:""},validation:[]}},mounted:function(){var e=this;this.$axios.get("/api/admin/schoolProfile/1").then((function(o){e.schoolProfile.logoUrl=o.data.data.logo,e.schoolProfile.name=o.data.data.name,e.schoolProfile.about=o.data.data.about,e.schoolProfile.phone=o.data.data.phone,e.schoolProfile.email=o.data.data.email,e.schoolProfile.address=o.data.data.address}))},methods:{handleFileChange:function(e){(this.schoolProfile.logo=e.target.files[0]).type.match("image.*")||(e.target.value="",this.schoolProfile.logo=null,this.$swal.fire({title:"OOPS!",text:"Format File Tidak Didukung!",icon:"error",showConfirmButton:!1,timer:2e3}))},updateSchoolProfile:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function o(){var t;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(t=new FormData).append("logo",e.schoolProfile.logo),t.append("name",e.schoolProfile.name),t.append("about",e.schoolProfile.about),t.append("phone",e.schoolProfile.phone),t.append("email",e.schoolProfile.email),t.append("address",e.schoolProfile.address),t.append("_method","PATCH"),o.next=10,e.$axios.post("/api/admin/schoolProfile/1",t).then((function(o){e.schoolProfile.logoUrl=o.data.data.logo,e.schoolProfile.name=o.data.data.name,e.schoolProfile.about=o.data.data.about,e.schoolProfile.phone=o.data.data.phone,e.schoolProfile.email=o.data.data.email,e.schoolProfile.address=o.data.data.address,e.$swal.fire({title:"BERHASIL!",text:"Data Berhasil Diupdate!",icon:"success",showConfirmButton:!1,timer:2e3}),e.$nuxt.refresh()})).catch((function(o){e.validation=o.response.data}));case 10:case"end":return o.stop()}}),o)})))()}}}),n=(t(905),t(77)),component=Object(n.a)(r,(function(){var e=this,o=e._self._c;return o("div",[o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},[o("h4",{staticClass:"card-title"},[e._v("Profil Sekolah")]),e._v(" "),o("form",{staticClass:"forms-sample mt-4",on:{submit:function(o){return o.preventDefault(),e.updateSchoolProfile.apply(null,arguments)}}},[o("div",{staticClass:"form-group"},[o("h6",[e._v("Image")]),e._v(" "),o("div",{staticClass:"text-left"},[o("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:e.schoolProfile.logoUrl,alt:"Logo Image"}})]),e._v(" "),o("div",{staticClass:"input-group col-xs-12 mt-3"},[o("input",{staticClass:"form-control file-upload-info",attrs:{type:"file",placeholder:"Upload Logo Image"},on:{change:e.handleFileChange}}),e._v(" "),e._m(0)]),e._v(" "),e.validation.image?o("div",{staticClass:"mt-3"},[o("vs-alert",{attrs:{variant:"error"}},[e._v(" "+e._s(e.validation.image[0])+" ")])],1):e._e()]),e._v(" "),o("div",{staticClass:"form-group"},[o("h6",[e._v("Nama")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.schoolProfile.name,expression:"schoolProfile.name"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName1",placeholder:"Masukan Nama Lembaga Sekolah"},domProps:{value:e.schoolProfile.name},on:{input:function(o){o.target.composing||e.$set(e.schoolProfile,"name",o.target.value)}}}),e._v(" "),e.validation.name?o("div",{staticClass:"mt-3"},[o("vs-alert",{attrs:{variant:"error"}},[e._v(" "+e._s(e.validation.name[0])+" ")])],1):e._e()]),e._v(" "),o("div",{staticClass:"form-group"},[o("h6",[e._v("Tentang Sekolah")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.schoolProfile.about,expression:"schoolProfile.about"}],staticClass:"form-control",attrs:{placeholder:"Masukan Deskripsi Mengenai Keunggulan Sekolah",rows:"4"},domProps:{value:e.schoolProfile.about},on:{input:function(o){o.target.composing||e.$set(e.schoolProfile,"about",o.target.value)}}}),e._v(" "),e.validation.about?o("div",{staticClass:"mt-3"},[o("vs-alert",{attrs:{variant:"error"}},[e._v(" "+e._s(e.validation.about[0])+" ")])],1):e._e()]),e._v(" "),o("div",{staticClass:"form-group"},[o("h6",[e._v("Nomor Handphone")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.schoolProfile.phone,expression:"schoolProfile.phone"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName1",placeholder:"Masukan Phone"},domProps:{value:e.schoolProfile.phone},on:{input:function(o){o.target.composing||e.$set(e.schoolProfile,"phone",o.target.value)}}}),e._v(" "),e.validation.phone?o("div",{staticClass:"mt-3"},[o("vs-alert",{attrs:{variant:"error"}},[e._v(" "+e._s(e.validation.phone[0])+" ")])],1):e._e()]),e._v(" "),o("div",{staticClass:"form-group"},[o("h6",[e._v("Alamat Email")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.schoolProfile.email,expression:"schoolProfile.email"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName1",placeholder:"Masukan Email"},domProps:{value:e.schoolProfile.email},on:{input:function(o){o.target.composing||e.$set(e.schoolProfile,"email",o.target.value)}}}),e._v(" "),e.validation.email?o("div",{staticClass:"mt-3"},[o("vs-alert",{attrs:{variant:"error"}},[e._v(" "+e._s(e.validation.email[0])+" ")])],1):e._e()]),e._v(" "),o("div",{staticClass:"form-group mb-5"},[o("label",{attrs:{for:"exampleInputName1"}},[e._v("Address")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.schoolProfile.address,expression:"schoolProfile.address"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName1",placeholder:"Masukan Address"},domProps:{value:e.schoolProfile.address},on:{input:function(o){o.target.composing||e.$set(e.schoolProfile,"address",o.target.value)}}}),e._v(" "),e.validation.address?o("div",{staticClass:"mt-3"},[o("vs-alert",{attrs:{variant:"error"}},[e._v(" "+e._s(e.validation.address[0])+" ")])],1):e._e()]),e._v(" "),o("button",{staticClass:"btn btn-block btn-primary mr-2 mt-5",attrs:{type:"submit"}},[e._v("Edit Profil Sekolah")])])])])])}),[function(){var e=this._self._c;return e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"file-upload-browse btn bg-success text-white"},[this._v("Image")])])}],!1,null,null,null);o.default=component.exports}}]);