import { computed, defineComponent } from "vue";
import panelImg1 from "./images/panel-1.png";
import panelImg2 from "./images/panel-2.png";
import panelImg3 from "./images/panel-3.png";
import panelImg4 from "./images/panel-4.png";
import "./index.scss";

export default defineComponent({
  props: {
    title: { type: String, default: null },
    iconsize: { type: Number, default: 40 },
    slots: { type: Object, default: () => ({}) },
  },
  setup(props) {
    const iconStyle = computed(() => ({
      width: props.iconsize + "px",
      height: props.iconsize + "px",
    }));

    return { iconStyle };
  },
  render() {
    return <div class="hay-panelbac-four-counters">
      <img class="part1" style={this.iconStyle} src={panelImg1} alt="" />
      <img class="part2" style={this.iconStyle} src={panelImg2} alt="" />
      <img class="part3" style={this.iconStyle} src={panelImg3} alt="" />
      <img class="part4" style={this.iconStyle} src={panelImg4} alt="" />
      {
        this.title && <div class="title">{this.title}</div>
      }
      { this.slots.default && this.slots.default() }
    </div>;
  },
});
