import { defineComponent as g, ref as k, reactive as f, resolveComponent as d, openBlock as m, createBlock as s, withCtx as i, createElementBlock as p, Fragment as c, renderList as v, resolveDynamicComponent as b, mergeProps as C } from "vue";
const M = g({
  components: {},
  props: {
    modelValue: {
      type: Object
    },
    form: {
      type: Object,
      required: !0
    }
  },
  setup(e, l) {
    const n = k(!1), t = f(e.form.fields);
    let a = f({});
    for (const u of e.form.fields)
      a[u.name] = u.componentProps.modelValue;
    return {
      validForm: n,
      fields: t,
      formModel: a
    };
  },
  watch: {
    formModel: {
      handler(e) {
        this.$emit("update:modelValue", e);
      },
      immediate: !0
    }
  },
  methods: {
    canUseDynamicComponents(e) {
      return e !== "v-radio-group";
    },
    getVRadioItems(e) {
      return e.componentProps.items;
    }
  }
}), U = (e, l) => {
  const n = e.__vccOpts || e;
  for (const [t, a] of l)
    n[t] = a;
  return n;
};
function F(e, l, n, t, a, u) {
  const V = d("v-radio"), _ = d("v-radio-group"), y = d("v-form");
  return m(), s(y, {
    modelValue: e.validForm,
    "onUpdate:modelValue": l[0] || (l[0] = (o) => e.validForm = o)
  }, {
    default: i(() => [
      (m(!0), p(c, null, v(e.form.fields, (o) => (m(), p(c, {
        key: o.name
      }, [
        e.canUseDynamicComponents(o.componentName) ? (m(), s(b(o.componentName), C({ key: 0 }, o.componentProps, {
          modelValue: e.formModel[o.name],
          "onUpdate:modelValue": (r) => e.formModel[o.name] = r
        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : (m(), s(_, {
          key: 1,
          modelValue: e.formModel[o.name],
          "onUpdate:modelValue": (r) => e.formModel[o.name] = r
        }, {
          default: i(() => [
            (m(!0), p(c, null, v(e.getVRadioItems(o), (r) => (m(), s(V, {
              key: r.value,
              label: r.label,
              value: r.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 2
        }, 1032, ["modelValue", "onUpdate:modelValue"]))
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
const O = /* @__PURE__ */ U(M, [["render", F]]), P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GkForm: O
}, Symbol.toStringTag, { value: "Module" })), h = {
  install(e, l) {
    const n = P;
    for (const t in n)
      e.component(t, n[t]);
  }
};
export {
  h as default
};
