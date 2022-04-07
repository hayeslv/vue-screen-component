import { defineComponent, ref, Transition } from "vue";
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
    return <Transition name="fade">
      <div class="hay-loading-mask">
        <div class="hay-loading-spinner">
          <i class="hay-icon-loading"></i>
          {this.title && <p class="hay-loading-text">{this.title}</p>}
        </div>
      </div>
    </Transition>;
  },
});
