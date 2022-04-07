import { defineComponent } from "vue";
import { RouterView, useRouter } from "vue-router";
import SideBar from "~/components/SideBar";
import "./index.scss";

export default defineComponent({
  setup() {
    const router: any = useRouter();
    const childrens = router.options.routes[0].children;

    return { childrens };
  },
  render() {
    return <div class="page">
      <SideBar paths={this.childrens} />
      <RouterView />
    </div>;
  },
});
