"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[651],{2651:function(e,n,r){r.r(n),r.d(n,{default:function(){return _}});var o=r(2791),t=r(9434),a=r(9439),l=r(5984),s=r(3402),i=r(3634),c=r(6916),d=function(e){return e.phoneBook.contacts},u=function(e){return e.phoneBook.isLoading},x=function(e){return e.phoneBook.error},h=(0,c.P1)([d,function(e){return e.phoneBook.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),m=r(8206),b=r(2701),p=r(4087),f=r(4585),j=r(7886),g=r(896),w=r(2435),y=r(184),v=function(){var e=(0,t.v9)(d),n=(0,t.I0)(),r=(0,o.useState)(""),c=(0,a.Z)(r,2),u=c[0],x=c[1],h=(0,o.useState)(""),v=(0,a.Z)(h,2),k=v[0],S=v[1],z=(0,l.x0)(),C=(0,l.x0)(),F=function(e){var n=e.currentTarget,r=n.name,o=n.value;switch(r){case"name":x(o);break;case"number":S(o)}},A=e.find((function(e){return e.name===u}));return(0,y.jsx)(m.W,{maxW:"2xl",centerContent:!0,children:(0,y.jsxs)(b.NI,{as:"form",color:"blue.500",bg:"#FAF5FF",border:30,onSubmit:function(e){e.preventDefault(),A?alert("".concat(u," is alreadi in contacts")):n((0,i.uK)({id:(0,l.x0)(),name:u,number:k})),s.Am.success("new contact added"),x(""),S("")},autoComplete:"off",children:[(0,y.jsxs)(p.xu,{display:"flex",gap:8,children:[(0,y.jsxs)(f.l,{children:["Name contact",(0,y.jsx)(j.I,{id:z,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:u,onChange:F,boxShadow:"xl",p:"6",rounded:"md"}),(0,y.jsx)(b.Q6,{fontSize:14,color:"yellow.500",mt:1,children:"Name must be longer than 2 characters"})]}),(0,y.jsxs)(f.l,{children:["Phone number",(0,y.jsx)(j.I,{id:C,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:k,onChange:F,boxShadow:"xl",p:"6",rounded:"md"}),(0,y.jsx)(b.Q6,{fontSize:14,color:"yellow.500",mt:1,children:"Number must be only numbers"})]})]}),(0,y.jsx)(p.xu,{position:"relative",h:"100px",children:(0,y.jsx)(g.u,{children:(0,y.jsx)(w.z,{type:"submit",w:300,bg:"yellow.100",_hover:{bg:"teal.200"},boxShadow:"dark-lg",size:"lg",rounded:"md",children:"Add contact"})})})]})})},k=r(8593),S=r(1538),z=r(176),C=r(9229),F=r(4889),A=function(){var e=(0,l.x0)(),n=(0,t.I0)(),r=(0,o.useState)(""),s=(0,a.Z)(r,2),i=s[0],c=s[1];return(0,y.jsxs)(z.k,{display:"flex",bg:"blue.600",p:"4",borderTopRadius:20,children:[(0,y.jsx)(C.x,{fontSize:"24px",color:"whitesmoke",children:"Find contacts by name"}),(0,y.jsx)(F.U,{spacing:"32px",children:(0,y.jsx)(b.NI,{as:"form",ml:8,children:(0,y.jsx)(f.l,{htmlFor:e,children:(0,y.jsx)(j.I,{id:e,type:"text",name:"filter",value:i,onChange:function(e){c(e.currentTarget.value),n((0,S.xO)(e.currentTarget.value.toLowerCase()))},boxShadow:"xl",p:"6",w:250,bg:"whitesmoke"})})})})]})},I=r(4363),B=r(4464),N=r(9327),Z=r(9126),T=r(5880),L=function(e){var n=e.contact,r=(0,t.I0)(),o=n.id,a=n.name,l=n.number;return(0,y.jsxs)(z.k,{display:"flex",gap:8,alignItems:"center",p:4,bg:"blue.300",color:"darkblue",borderRadius:18,boxShadow:"xl",_hover:{boxShadow:"dark-lg"},children:[(0,y.jsxs)(C.x,{children:[(0,y.jsx)(I.J,{as:T.myd,w:8,h:8,color:"yellow.200",mr:3}),a,":"]}),(0,y.jsxs)(C.x,{children:[(0,y.jsx)(I.J,{as:Z.sU9,w:8,h:8,color:"yellow.200",mr:3}),l]}),(0,y.jsx)(B.L,{}),(0,y.jsxs)(w.z,{fontSize:18,type:"submit",bg:"yellow.200",_hover:{bg:"blue.500",color:"yellow.200"},boxShadow:"dark-lg",rounded:"md",onClick:function(){return r((0,i.GK)(o))},children:[(0,y.jsx)(N.p,{color:"blue.500",w:6,h:6,mr:3,_hover:{color:"yellow.200"}}),"Delete"]})]})},M=r(3541),P=function(){var e=(0,t.v9)(h);return(0,y.jsx)(M.aV,{p:4,borderBottomRadius:20,bgGradient:"linear(to-b, blue.600 , yellow.300 )",children:e.map((function(e){return(0,y.jsx)(M.HC,{mt:4,children:(0,y.jsx)(L,{contact:e})},e.id)}))})};function _(){var e=(0,t.v9)(u),n=(0,t.v9)(x),r=(0,t.v9)(d),a=(0,t.I0)();return(0,o.useEffect)((function(){a((0,i.yF)())}),[a]),(0,y.jsxs)(m.W,{bg:"#FAF5FF",children:[(0,y.jsx)(g.M,{fontSize:"32px",as:"i",color:"pink.600",textAlign:"center",children:"Phonebook"}),(0,y.jsx)(v,{}),e&&(0,y.jsx)(k.a9,{}),n&&(0,y.jsx)(g.M,{fontSize:"16px",color:"tomato",mt:12,children:"Sorry, something went wrong. Try again"}),r.length>0&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g.M,{fontSize:"32px",as:"i",color:"pink.600",children:"Contacts"}),(0,y.jsx)(A,{}),(0,y.jsx)(P,{})]})]})}}}]);
//# sourceMappingURL=651.93de8eb6.chunk.js.map