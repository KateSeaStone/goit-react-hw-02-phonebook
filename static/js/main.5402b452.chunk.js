(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),s=n.n(r),i=(n(15),n(9)),o=n(2),l=n(3),u=n(5),m=n(4),b=(n(16),n(17),n(0)),d=function(e){var t=e.id,n=e.name,a=e.number,c=e.onDelete;return Object(b.jsxs)("li",{className:"item",children:[Object(b.jsxs)("p",{className:"contactInfo",children:[n,": ",a]}),Object(b.jsx)("button",{className:"deleteBtn",type:"button",onClick:function(){return c(t)},children:"Delete"})]},t)},h=(n(19),function(e){var t=e.contacts;e.onChange;return Object(b.jsx)("ul",{className:"contactList",children:t.map((function(e){return Object(b.jsx)(d,{name:e.name,number:e.number,onChange:e.onDelete},e.id)}))})}),j=n(8),f=(n(20),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(j.a)({},a,c))},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:"contactForm",onSubmit:this.handleSubmit,children:[Object(b.jsxs)("label",{className:"label__name",children:["Name",Object(b.jsx)("input",{className:"input__form",type:"text",name:"name",value:this.state.name,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(b.jsxs)("label",{className:"label__name",children:["Number",Object(b.jsx)("input",{className:"input__form",type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(b.jsx)("button",{type:"submit",className:"addContactBtn",children:"Add contact"})]})}}]),n}(a.Component)),p=(n(21),function(e){var t=e.value,n=e.onChange;return Object(b.jsxs)("label",{className:"label__name",children:["Find contact by name",Object(b.jsx)("input",{className:"input__form",type:"text",name:"filter",value:t,onChange:n})]})}),O=n(24),v=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.contactFormSubmit=function(t){var n=t.name,a=t.number,c={id:Object(O.a)(),name:n,number:a};console.log(c),e.state.contacts.map((function(e){return e.name.toLowerCase()})).includes(c.name.toLowerCase())?alert("".concat(c.name," is already in contacts")):e.setState((function(e){var t=e.contacts;return{contacts:[c].concat(Object(i.a)(t))}}))},e.onDelete=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getFiltredContacts=function(){var t=e.state,n=t.filter,a=t.contacts,c=n.toLowerCase();return a.filter((function(e){return e.name.includes(c)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.filter,n=(e.contacts,this.getFiltredContacts());return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"main__title",children:"Phonebook"}),Object(b.jsx)(f,{onSubmit:this.contactFormSubmit}),Object(b.jsx)("h2",{className:"contacts__title",children:"Contacts"}),Object(b.jsx)(p,{value:t,onChange:this.changeFilter}),Object(b.jsx)(h,{contacts:n,onChange:this.onDelete})]})}}]),n}(a.Component);n(22);s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.5402b452.chunk.js.map