"use strict";(self.webpackChunkheroesApp=self.webpackChunkheroesApp||[]).push([[985],{5985:(C,c,a)=>{a.r(c),a.d(c,{AuthModule:()=>A});var i=a(6814),r=a(3403),t=a(5879);let s=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-layout-page"]],decls:3,vars:0,consts:[[1,"grid","p-3"],[1,"col-12","mr-t","md:col-6","md:col-offset-3","md:mt-8"]],template:function(o,u){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA()())},dependencies:[r.lC]}),e})();var m=a(4567),p=a(2296),l=a(9157),g=a(617),d=a(2032);const f=[{path:"",component:s,children:[{path:"login",component:(()=>{class e{constructor(o,u){this.authService=o,this.router=u}onLogin(){this.authService.login("ricardo@gmail.com","123456").subscribe(o=>{this.router.navigate(["/"])})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(m.e),t.Y36(r.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login-page"]],decls:18,vars:0,consts:[[1,"flex","flex-column"],[1,"text-lg","mb-4"],["type","text","matInput","","placeholder","Nombre de usuario"],["type","password","matInput","","placeholder","Contrase\xf1a"],["mat-button","","mat-flat-button","","color","primary",3,"click"],[1,"flex","justify-content-end","mt-5"],["routerLink","/auth/new-account"]],template:function(o,u){1&o&&(t.TgZ(0,"div",0)(1,"span",1),t._uU(2,"Login"),t.qZA(),t.TgZ(3,"mat-form-field")(4,"mat-label"),t._uU(5,"Usuario"),t.qZA(),t._UZ(6,"input",2),t.qZA(),t.TgZ(7,"mat-form-field")(8,"mat-label"),t._uU(9,"Contrase\xf1a"),t.qZA(),t._UZ(10,"input",3),t.qZA(),t.TgZ(11,"button",4),t.NdJ("click",function(){return u.onLogin()}),t.TgZ(12,"mat-icon"),t._uU(13,"save"),t.qZA(),t._uU(14," Ingresar "),t.qZA(),t.TgZ(15,"div",5)(16,"a",6),t._uU(17,"\xbfNo tienes cuenta?"),t.qZA()()())},dependencies:[r.rH,p.lW,l.KE,l.hX,g.Hw,d.Nt]}),e})()},{path:"new-account",component:(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register-page"]],decls:2,vars:0,template:function(o,u){1&o&&(t.TgZ(0,"p"),t._uU(1,"register-page works!"),t.qZA())}}),e})()},{path:"**",redirectTo:"login"}]}];let h=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.Bz.forChild(f),r.Bz]}),e})();var v=a(6889);let A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.ez,h,v.q]}),e})()}}]);