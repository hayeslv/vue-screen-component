import hayChart from "./src/hayChart";

hayChart.install = function(Vue: any) {
  Vue.component(hayChart.name, hayChart);
};

export default hayChart;
