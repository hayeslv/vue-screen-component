import { defineComponent } from "vue";
import TitleImg from "./images/panel-title.png";
import "./index.scss";

export default defineComponent({
  props: {
    title: { type: String, default: null },
    loading: { type: Boolean, default: false },
    slots: { type: Object, default: () => ({}) },
  },
  setup() {},
  render() {
    return <div class="hay-panelbac-title-line">
      <div class="inner">
        <div class="top">
          <img src={TitleImg} alt="" />
          <div class="top-content">
            <div class="title">{ this.title }</div>
            <slot name="selector"></slot>
          </div>
        </div>
        <div class="content">
          { this.slots.default && this.slots.default() }
        </div>
        <div class="footer">
          <div class="footer-inner"></div>
        </div>

      </div>
    </div>;
  },
});
