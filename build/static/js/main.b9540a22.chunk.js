(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(32),i=n.n(c),l=(n(39),n(40),n(17)),o=n(2),r=n(12),h=n(13),j=n(14),u=n(8),p=n(16),d=n(15),m=n(9),b=n.n(m),g=(n(30),n(0)),x=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(r.a)({},t,n))},a.checkValueEmpty=function(e){""===e?(console.log("pls set value"),alert("pls set value")):(console.log(e),alert("Your favorite flavor is: "+e))},a.handleSubmit=function(e){console.log(a.state),e.preventDefault();var t={name:a.state.name,institution:a.state.institution,paln_master:a.state.paln_master,paln_sub:a.state.paln_sub,platform:a.state.platform,program:a.state.program,point:a.state.point,goal:a.state.goal,achievement_main:a.state.achievement_main,achievement_small:a.state.achievement_small};b.a.post("http://localhost:4000/api/post/coordinator_about_fundingagency",t).then((function(e){console.log(e.data.massage),alert(e.data.massage)})).catch((function(e){console.log(e)})),a.setState({name:"",institution:"",paln_master:"",paln_sub:"",platform:"",program:"",point:"",goal:"",achievement_main:"",achievement_small:""})},a.state={name:"",institution:"",paln_master:"",paln_sub:"",platform:"",program:"",point:"",goal:"",achievement_main:"",achievement_small:""},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(j.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"form-cn",children:Object(g.jsx)("div",{className:"form card",children:Object(g.jsxs)("form",{className:"container",onSubmit:this.handleSubmit,children:[Object(g.jsx)("h3",{children:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e17\u0e38\u0e19"}),Object(g.jsx)("hr",{}),Object(g.jsxs)("p",{children:["\u0e0a\u0e37\u0e48\u0e2d\u0e17\u0e38\u0e19 :",Object(g.jsx)("input",{className:"inline",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(g.jsxs)("p",{children:["\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e07\u0e32\u0e19 :",Object(g.jsx)("input",{className:"inline",name:"institution",type:"text",value:this.state.institution,onChange:this.handleChange})]}),Object(g.jsxs)("p",{children:["\u0e41\u0e1c\u0e19\u0e07\u0e32\u0e19\u0e2b\u0e25\u0e31\u0e01 :",Object(g.jsx)("input",{className:"inline",name:"paln_master",type:"text",value:this.state.paln_master,onChange:this.handleChange})]}),Object(g.jsxs)("p",{children:["\u0e41\u0e1c\u0e19\u0e07\u0e32\u0e19\u0e22\u0e48\u0e2d\u0e22 :",Object(g.jsx)("input",{className:"inline",name:"paln_sub",type:"text",value:this.state.paln_sub,onChange:this.handleChange})]}),Object(g.jsxs)("p",{children:["\u0e41\u0e1e\u0e25\u0e15\u0e1f\u0e2d\u0e23\u0e4c\u0e21 :",Object(g.jsx)("input",{className:"inline",name:"platform",type:"text",value:this.state.platform,onChange:this.handleChange})]}),Object(g.jsxs)("p",{children:["\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21 :",Object(g.jsx)("input",{className:"inline",name:"program",type:"text",value:this.state.program,onChange:this.handleChange})]}),Object(g.jsxs)("p",{children:["\u0e1b\u0e23\u0e30\u0e40\u0e14\u0e47\u0e19\u0e40\u0e23\u0e34\u0e48\u0e21\u0e2a\u0e33\u0e04\u0e31\u0e0d :",Object(g.jsx)("input",{className:"inline",name:"point",type:"text",value:this.state.point,onChange:this.handleChange})]}),Object(g.jsxs)("p",{children:["\u0e40\u0e1b\u0e49\u0e32\u0e2b\u0e21\u0e32\u0e22 :",Object(g.jsx)("input",{className:"inline",name:"goal",type:"text",value:this.state.goal,onChange:this.handleChange})]}),Object(g.jsxs)("p",{children:["\u0e1c\u0e25\u0e2a\u0e31\u0e21\u0e24\u0e17\u0e18\u0e34\u0e4c\u0e17\u0e35\u0e48\u0e2a\u0e33\u0e04\u0e31\u0e0d (\u0e2b\u0e25\u0e31\u0e01) :",Object(g.jsx)("input",{className:"inline",name:"achievement_main",type:"text",value:this.state.achievement_main,onChange:this.handleChange})]}),Object(g.jsxs)("p",{children:["\u0e1c\u0e25\u0e2a\u0e31\u0e21\u0e24\u0e17\u0e18\u0e34\u0e4c\u0e17\u0e35\u0e48\u0e2a\u0e33\u0e04\u0e31\u0e0d (\u0e23\u0e2d\u0e07) :",Object(g.jsx)("input",{className:"inline",name:"achievement_small",type:"text",value:this.state.achievement_small,onChange:this.handleChange})]}),Object(g.jsx)("input",{type:"submit",value:"Submit"})]})})})}}]),n}(s.a.Component),O=n(34),f=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).getProjectType=function(){b.a.get("http://localhost:4000/api/get/project-type").then((function(e){a.setState({project_type:e.data})})).catch((function(e){console.log(e)}))},a.getSourceFunds=function(){b.a.get("http://localhost:4000/api/get/source_funds").then((function(e){a.setState({source_funds:e.data})})).catch((function(e){console.log(e)}))},a.getUserIdCard=function(){b.a.post("http://localhost:4000/api/get/bb-user/")},a.componentDidMount=function(){a.getProjectType(),a.getSourceFunds()},a.handleFileUpload=function(e){a.setState({file:e.target.files[0]})},a.handleChangeDropdownYear=function(e){a.setState({project_star:e.target.value})},a.handleChangeDropdown=function(e){a.setState({selectProjectType:e.target.value})},a.handleChangeDropdownSourceFund=function(e){a.setState({selectSourceFunds:e.target.value})},a.handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(r.a)({},t,n))},a.handleSubmit=function(e){console.log(a.state),e.preventDefault();var t,n=new FormData(a.form.current),s=Object(O.a)(n.entries());try{for(s.s();!(t=s.n()).done;){var c=t.value;console.log(c)}}catch(i){s.e(i)}finally{s.f()}b.a.post("http://localhost:4000/api/post/coordinator_fundingagency_project",n).then((function(e){console.log(e.data.massage),alert(e.data.massage)})).catch((function(e){console.log(e)})),a.setState({selectProjectType:"\u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01",project_name:"",selectSourceFunds:"\u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01",project_budget:"",project_star:"\u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01",project_agency:"",project_latitude:"",project_Longitude:"",project_status:"",file:null})},a.state={source_funds:[],project_type:[],selectProjectType:"\u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01",project_name:"",selectSourceFunds:"\u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01",project_budget:"",project_star:"\u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01",project_agency:"",project_latitude:"",project_Longitude:"",project_status:"",file:null},a.form=s.a.createRef(null),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.project_type,n=e.source_funds;return Object(g.jsx)("div",{className:"form-cn",children:Object(g.jsx)("div",{className:"form card",children:Object(g.jsxs)("form",{ref:this.form,className:"container",onSubmit:this.handleSubmit,children:[Object(g.jsx)("h3",{children:"\u0e07\u0e32\u0e19\u0e27\u0e34\u0e08\u0e31\u0e22"}),Object(g.jsx)("hr",{}),Object(g.jsxs)("p",{children:["\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17 :",Object(g.jsxs)("select",{className:"inline",name:"project_type",value:this.state.selectProjectType,onChange:this.handleChangeDropdown,children:[Object(g.jsx)("option",{select:"true",value:!0,children:"\u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01"}),t.map((function(e,t){var n=e.project_type_name;return Object(g.jsx)("option",{value:n,children:n},t)}))]})]}),Object(g.jsxs)("p",{children:["\u0e0a\u0e37\u0e48\u0e2d\u0e42\u0e04\u0e23\u0e07\u0e07\u0e32\u0e19 :",Object(g.jsx)("input",{className:"inline",name:"project_name",type:"text",value:this.state.project_name,onChange:this.handleChange})]}),Object(g.jsxs)("p",{children:["\u0e41\u0e2b\u0e25\u0e48\u0e07\u0e17\u0e38\u0e19 :",Object(g.jsxs)("select",{className:"inline",name:"project_funding",value:this.state.selectSourceFunds,onChange:this.handleChangeDropdownSourceFund,children:[Object(g.jsx)("option",{select:"true",value:!0,children:"\u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01"}),n.map((function(e,t){var n=e.source_funds_name;return Object(g.jsx)("option",{value:n,children:n},t)}))]})]}),Object(g.jsxs)("p",{children:["\u0e07\u0e1a\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a :",Object(g.jsx)("input",{className:"inline",name:"project_budget",type:"text",value:this.state.project_budget,onChange:this.handleChange}),"\u0e1b\u0e35 :",Object(g.jsxs)("select",{className:"inline",name:"project_star",value:this.state.project_star,onChange:this.handleChangeDropdownYear,children:[Object(g.jsx)("option",{select:"true",value:!0,children:"\u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01"}),Object(g.jsx)("option",{value:"2564",children:"2564"})]})]}),Object(g.jsxs)("p",{children:["\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e07\u0e32\u0e19\u0e40\u0e02\u0e49\u0e32\u0e02\u0e2d\u0e07\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23 :",Object(g.jsx)("input",{className:"inline",name:"project_agency",type:"text",value:this.state.project_agency,onChange:this.handleChange})]}),Object(g.jsxs)("p",{children:["\u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48\u0e28\u0e36\u0e01\u0e29\u0e32 :",Object(g.jsx)("input",{className:"inline",name:"project_latitude",placeholder:"latitude",type:"text",value:this.state.project_latitude,onChange:this.handleChange}),Object(g.jsx)("input",{className:"inline",name:"project_Longitude",placeholder:"Longitude",type:"text",value:this.state.project_Longitude,onChange:this.handleChange})]}),Object(g.jsxs)("div",{children:["\u0e2a\u0e16\u0e32\u0e19\u0e30\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23 :",Object(g.jsx)("input",{className:"inline",type:"radio",value:"0",name:"project_status"}),"\u0e2d\u0e22\u0e39\u0e48\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23",Object(g.jsx)("input",{className:"inline",type:"radio",value:"1",name:"project_status"}),"\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23\u0e27\u0e34\u0e08\u0e31\u0e22\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e2a\u0e34\u0e49\u0e19"]}),Object(g.jsxs)("p",{children:["\u0e2d\u0e31\u0e1e\u0e42\u0e2b\u0e25\u0e14\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23 :",Object(g.jsx)("input",{id:"file",className:"inline",type:"file",name:"project_upload",onChange:this.handleFileUpload})]}),Object(g.jsx)("input",{type:"submit",value:"Submit"})]})})})}}]),n}(s.a.Component);function v(){return Object(g.jsx)(l.a,{children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsx)(l.b,{to:"/form-1",children:"Form 1"})}),Object(g.jsx)("li",{children:Object(g.jsx)(l.b,{to:"/form-2",children:"Form 2"})})]}),Object(g.jsx)("hr",{}),Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{exact:!0,path:"/form-1",children:Object(g.jsx)(x,{})}),Object(g.jsx)(o.a,{path:"/form-2",children:Object(g.jsx)(f,{})})]})]})})}var _=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(g.jsx)(v,{}),document.getElementById("root")),_()}},[[65,1,2]]]);
//# sourceMappingURL=main.b9540a22.chunk.js.map