(function(e,a){typeof exports=="object"&&typeof module<"u"?module.exports=a(require("vue")):typeof define=="function"&&define.amd?define(["vue"],a):(e=typeof globalThis<"u"?globalThis:e||self,e.GKForms=a(e.Vue))})(this,function(e){"use strict";const a=e.defineComponent({components:{},props:{modelValue:{type:Object},form:{type:Object,required:!0}},setup(o){const l=e.ref(!1),t=e.reactive(o.form.fields);let r=e.reactive({});for(const s of o.form.fields)r[s.name]=s.componentProps.modelValue;return{validForm:l,fields:t,formModel:r}},watch:{formModel:{handler(o){this.$emit("update:modelValue",o)},immediate:!0}},methods:{validate(){this.$refs.vuetifyForm&&(console.log("validate"),this.$refs.vuetifyForm.validate())},canUseDynamicComponents(o){return o!=="v-radio-group"},getVRadioItems(o){return o.componentProps.items}}}),c=(o,l)=>{const t=o.__vccOpts||o;for(const[r,s]of l)t[r]=s;return t};function d(o,l,t,r,s,V){const i=e.resolveComponent("v-radio"),f=e.resolveComponent("v-radio-group"),u=e.resolveComponent("v-form");return e.openBlock(),e.createBlock(u,{ref:"vuetifyForm",modelValue:o.validForm,"onUpdate:modelValue":l[0]||(l[0]=n=>o.validForm=n)},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.form.fields,n=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:n.name},[o.canUseDynamicComponents(n.componentName)?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(n.componentName),e.mergeProps({key:0},n.componentProps,{modelValue:o.formModel[n.name],"onUpdate:modelValue":m=>o.formModel[n.name]=m}),null,16,["modelValue","onUpdate:modelValue"])):(e.openBlock(),e.createBlock(f,{key:1,modelValue:o.formModel[n.name],"onUpdate:modelValue":m=>o.formModel[n.name]=m},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.getVRadioItems(n),m=>(e.openBlock(),e.createBlock(i,{key:m.value,label:m.label,value:m.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"]))],64))),128))]),_:1},8,["modelValue"])}const p=Object.freeze(Object.defineProperty({__proto__:null,GkForm:c(a,[["render",d]])},Symbol.toStringTag,{value:"Module"}));return{install(o,l){const t=p;for(const r in t)o.component(r,t[r])}}});
