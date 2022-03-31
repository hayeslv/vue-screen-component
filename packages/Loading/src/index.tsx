import { defineComponent, ref } from "vue";
import "./index.scss";

export default defineComponent({
  name: "HayLoading",
  setup() {
    const title = ref("");
    const setTitle = (str: string) => {
      title.value = str;
    };

    return { title, setTitle };
  },
  render() {
    return <div class="hay-loading-wrap">
      <div class="hay-loading"></div>
      <p class="desc">{this.title}</p>
    </div>;
  },
});
