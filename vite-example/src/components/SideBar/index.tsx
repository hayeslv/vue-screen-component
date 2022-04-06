import { defineComponent, ref } from "vue";
import router from "~/router";
import "./index.scss";

export default defineComponent({
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
        this.list.map(v => (
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
