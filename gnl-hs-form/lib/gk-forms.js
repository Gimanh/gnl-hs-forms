"use strict";const e=require("vue"),d=e.defineComponent({components:{},props:{modelValue:{type:Object},form:{type:Object,required:!0}},setup(o,m){const t=e.ref(!1),r=e.reactive(o.form.fields);let a=e.reactive({});for(const c of o.form.fields)a[c.name]=c.componentProps.modelValue;return{validForm:t,fields:r,formModel:a}},watch:{formModel:{handler(o){this.$emit("update:modelValue",o)},immediate:!0}},methods:{canUseDynamicComponents(o){return o!=="v-radio-group"},getVRadioItems(o){return o.componentProps.items}}}),i=(o,m)=>{const t=o.__vccOpts||o;for(const[r,a]of m)t[r]=a;return t};function f(o,m,t,r,a,c){const s=e.resolveComponent("v-radio"),p=e.resolveComponent("v-radio-group"),u=e.resolveComponent("v-form");return e.openBlock(),e.createBlock(u,{modelValue:o.validForm,"onUpdate:modelValue":m[0]||(m[0]=n=>o.validForm=n)},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.form.fields,n=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:n.name},[o.canUseDynamicComponents(n.componentName)?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(n.componentName),e.mergeProps({key:0},n.componentProps,{modelValue:o.formModel[n.name],"onUpdate:modelValue":l=>o.formModel[n.name]=l}),null,16,["modelValue","onUpdate:modelValue"])):(e.openBlock(),e.createBlock(p,{key:1,modelValue:o.formModel[n.name],"onUpdate:modelValue":l=>o.formModel[n.name]=l},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.getVRadioItems(n),l=>(e.openBlock(),e.createBlock(s,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"]))],64))),128))]),_:1},8,["modelValue"])}const v=i(d,[["render",f]]),k=Object.freeze(Object.defineProperty({__proto__:null,GkForm:v},Symbol.toStringTag,{value:"Module"})),V={install(o,m){const t=k;for(const r in t)o.component(r,t[r])}};module.exports=V;
