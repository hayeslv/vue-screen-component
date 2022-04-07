import type { PropType } from "vue";
import { defineComponent, ref } from "vue";
import router from "~/router";
import "./index.scss";

interface pathsType {
  path: string
  name?: string
}

export default defineComponent({
  props: {
    paths: {
      type: Array as PropType<pathsType[]>,
      required: true,
    },
  },
  setup() {
    const activeMenuItem = ref("");
    const list = ref([
      { path: "/loading", name: "Loading" },
      { path: "/message", name: "Message" },
    ]);

    const handleClick = (activePath: string) => {
      activeMenuItem.value = activePath;
      router.push(activePath);
    };

    return { list, activeMenuItem, handleClick };
  },
  render() {
    return <div class="hay-menu">
      {
        this.paths.map(v => (
          <div
            key={v.path}
            class={["hay-menu-item", v.path === this.activeMenuItem && "is-active"]}
            onClick={() => this.handleClick(v.path)}
          >
            { v.name }
          </div>
        ))
      }
    </div>;
  },
});
