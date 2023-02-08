import { defineComponent as y, ref as k, reactive as c, resolveComponent as d, openBlock as m, createElementBlock as s, renderSlot as b, createTextVNode as f, toDisplayString as C, createVNode as M, withCtx as i, Fragment as u, renderList as v, createBlock as p, resolveDynamicComponent as U, mergeProps as F, createElementVNode as N } from "vue";
const h = y({
  components: {},
  props: {
    form: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const r = k(!1), n = c(e.form.fields);
    let t = c({});
    for (const a of e.form.fields)
      t[a.name] = a.componentProps.modelValue;
    return {
      validForm: r,
      fields: n,
      formModel: t
    };
  },
  methods: {
    canUseDynamicComponents(e) {
      return e !== "v-radio-group";
    },
    getVRadioItems(e) {
      return e.componentProps.items;
    }
  }
}), P = (e, r) => {
  const n = e.__vccOpts || e;
  for (const [t, a] of r)
    n[t] = a;
  return n;
}, S = /* @__PURE__ */ N("button", null, "Show", -1);
function $(e, r, n, t, a, j) {
  const V = d("v-radio"), _ = d("v-radio-group"), g = d("v-form");
  return m(), s("div", null, [
    S,
    b(e.$slots, "header", {}, () => [
      f(" Form header ")
    ]),
    f(" " + C(e.formModel) + " ", 1),
    M(g, {
      modelValue: e.validForm,
      "onUpdate:modelValue": r[0] || (r[0] = (o) => e.validForm = o)
    }, {
      default: i(() => [
        (m(!0), s(u, null, v(e.form.fields, (o) => (m(), s(u, {
          key: o.name
        }, [
          e.canUseDynamicComponents(o.componentName) ? (m(), p(U(o.componentName), F({ key: 0 }, o.componentProps, {
            modelValue: e.formModel[o.name],
            "onUpdate:modelValue": (l) => e.formModel[o.name] = l
          }), null, 16, ["modelValue", "onUpdate:modelValue"])) : (m(), p(_, {
            key: 1,
            modelValue: e.formModel[o.name],
            "onUpdate:modelValue": (l) => e.formModel[o.name] = l
          }, {
            default: i(() => [
              (m(!0), s(u, null, v(e.getVRadioItems(o), (l) => (m(), p(V, {
                key: l.value,
                label: l.label,
                value: l.value
              }, null, 8, ["label", "value"]))), 128))
            ]),
            _: 2
          }, 1032, ["modelValue", "onUpdate:modelValue"]))
        ], 64))), 128))
      ]),
      _: 1
    }, 8, ["modelValue"])
  ]);
}
const D = /* @__PURE__ */ P(h, [["render", $]]), O = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GkForm: D
}, Symbol.toStringTag, { value: "Module" })), B = {
  install(e, r) {
    const n = O;
    for (const t in n)
      e.component(t, n[t]);
  }
};
export {
  B as default
};
