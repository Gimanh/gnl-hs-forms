import { defineComponent as _, ref as g, reactive as c, resolveComponent as u, openBlock as m, createBlock as s, withCtx as i, createElementBlock as d, Fragment as p, renderList as f, resolveDynamicComponent as k, mergeProps as b } from "vue";
const F = _({
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
  setup(e) {
    const r = g(!1), n = c(e.form.fields);
    let t = c({});
    for (const a of e.form.fields)
      t[a.name] = a.componentProps.modelValue;
    return {
      validForm: r,
      fields: n,
      formModel: t
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
    validate() {
      this.$refs.vuetifyForm && (console.log("validate"), this.$refs.vuetifyForm.validate());
    },
    canUseDynamicComponents(e) {
      return e !== "v-radio-group";
    },
    getVRadioItems(e) {
      return e.componentProps.items;
    }
  }
}), C = (e, r) => {
  const n = e.__vccOpts || e;
  for (const [t, a] of r)
    n[t] = a;
  return n;
};
function M(e, r, n, t, a, h) {
  const v = u("v-radio"), V = u("v-radio-group"), y = u("v-form");
  return m(), s(y, {
    ref: "vuetifyForm",
    modelValue: e.validForm,
    "onUpdate:modelValue": r[0] || (r[0] = (o) => e.validForm = o)
  }, {
    default: i(() => [
      (m(!0), d(p, null, f(e.form.fields, (o) => (m(), d(p, {
        key: o.name
      }, [
        e.canUseDynamicComponents(o.componentName) ? (m(), s(k(o.componentName), b({ key: 0 }, o.componentProps, {
          modelValue: e.formModel[o.name],
          "onUpdate:modelValue": (l) => e.formModel[o.name] = l
        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : (m(), s(V, {
          key: 1,
          modelValue: e.formModel[o.name],
          "onUpdate:modelValue": (l) => e.formModel[o.name] = l
        }, {
          default: i(() => [
            (m(!0), d(p, null, f(e.getVRadioItems(o), (l) => (m(), s(v, {
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
  }, 8, ["modelValue"]);
}
const U = /* @__PURE__ */ C(F, [["render", M]]), $ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GkForm: U
}, Symbol.toStringTag, { value: "Module" })), P = {
  install(e, r) {
    const n = $;
    for (const t in n)
      e.component(t, n[t]);
  }
};
export {
  P as default
};
