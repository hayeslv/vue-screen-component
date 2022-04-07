import type { PropType } from "vue";
import { computed, defineComponent } from "vue";
import type { PanelBacType } from "./type";
import FourCounersBac from "./config/four_couners";
import TitleLineBac from "./config/title_line";

export default defineComponent({
  name: "HayPanelBac",
  props: {
    width: { type: Number, default: 320 },
    height: { type: Number, default: null },
    type: { type: String as PropType<PanelBacType>, default: "four_corners" },
    title: { type: String, default: null },
    iconsize: { type: Number, default: 40 },
    loading: { type: Boolean, default: false },
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
      case "four_corners": return <FourCounersBac style={this.bacStyle} title={this.title} iconsize={this.iconsize} slots={this.$slots} />;
      case "title_line": return <TitleLineBac style={this.bacStyle} title={this.title} loading={this.loading} slots={this.$slots} />;
      default: return <div></div>;
    }
  },
});
