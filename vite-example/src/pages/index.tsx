import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import SideBar from "~/components/SideBar";
import "./index.scss";

export default defineComponent({
  setup() {},
  render() {
    return <div class="page">
      <SideBar />
      <RouterView />
    </div>;
  },
});
