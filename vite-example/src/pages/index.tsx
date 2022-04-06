import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  setup() {},
  render() {
    return <div>
      <RouterLink to="/loading">loading</RouterLink>
    </div>;
  },
});
