import type { PropType } from "vue";
import { computed, defineComponent } from "vue";
import type { PanelBacType } from "./type";
import FourCounersBac from "./config/four_couners";

export default defineComponent({
  name: "HayPanelBac",
  props: {
    width: { type: Number, default: 320 },
    height: { type: Number, default: null },
    type: { type: String as PropType<PanelBacType>, default: "four_corners" },
    title: { type: String, default: null },
    iconsize: { type: Number, default: 40 },
  },
  setup(props) {
    const bacStyle = computed(() => {
      return {
        width: props.width + "px",
        height: props.height ? props.height + "px" : "auto",
      };
    });

    return { bacStyle };
  },
  render() {
    switch (this.type) {
      case "title_line": {
        return <div>12312</div>;
      }
      default: {
        return <FourCounersBac style={this.bacStyle} title={this.title} iconsize={this.iconsize} slots={this.$slots} />;
      }
    }
  },
});
