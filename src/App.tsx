import "./style/common.scss";

export default defineComponent({
  setup() {
    const age = ref(18);
    return age;
  },
  render() {
    return <router-view />;
  },
});
