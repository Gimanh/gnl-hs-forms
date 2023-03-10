"use strict";const e=require("vue"),u=e.defineComponent({components:{},props:{modelValue:{type:Object},form:{type:Object,required:!0}},setup(o){const l=e.ref(!1),t=e.reactive(o.form.fields);let r=e.reactive({});for(const m of o.form.fields)r[m.name]=m.componentProps.modelValue;return{validForm:l,fields:t,formModel:r}},watch:{formModel:{handler(o){this.$emit("update:modelValue",o)},immediate:!0}},methods:{validate(){this.$refs.vuetifyForm&&(console.log("validate"),this.$refs.vuetifyForm.validate())},canUseDynamicComponents(o){return o!=="v-radio-group"},getVRadioItems(o){return o.componentProps.items}}}),d=(o,l)=>{const t=o.__vccOpts||o;for(const[r,m]of l)t[r]=m;return t};function i(o,l,t,r,m,V){const s=e.resolveComponent("v-radio"),c=e.resolveComponent("v-radio-group"),p=e.resolveComponent("v-form");return e.openBlock(),e.createBlock(p,{ref:"vuetifyForm",modelValue:o.validForm,"onUpdate:modelValue":l[0]||(l[0]=n=>o.validForm=n)},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.form.fields,n=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:n.name},[o.canUseDynamicComponents(n.componentName)?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(n.componentName),e.mergeProps({key:0},n.componentProps,{modelValue:o.formModel[n.name],"onUpdate:modelValue":a=>o.formModel[n.name]=a}),null,16,["modelValue","onUpdate:modelValue"])):(e.openBlock(),e.createBlock(c,{key:1,modelValue:o.formModel[n.name],"onUpdate:modelValue":a=>o.formModel[n.name]=a},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.getVRadioItems(n),a=>(e.openBlock(),e.createBlock(s,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"]))],64))),128))]),_:1},8,["modelValue"])}const f=d(u,[["render",i]]),v=Object.freeze(Object.defineProperty({__proto__:null,GkForm:f},Symbol.toStringTag,{value:"Module"})),k={install(o,l){const t=v;for(const r in t)o.component(r,t[r])}};module.exports=k;
