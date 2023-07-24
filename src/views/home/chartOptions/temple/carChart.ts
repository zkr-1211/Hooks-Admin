import { fitChartSize } from "@/utils/dataUtils";
import * as echarts from "echarts";
// 看板中间底部
// 1.折线图-车辆统计
export const lineOption = {
	grid: {
		top: fitChartSize(40),
		left: fitChartSize(100),
		right: fitChartSize(40),
		bottom: fitChartSize(50)
	},
	xAxis: {
		axisTick: {
			show: false
		},
		axisLine: {
			interval: 0,
			lineStyle: {
				color: "#DFCFC4"
			}
		},
		axisLabel: {
			color: "#333",
			fontSize: fitChartSize(24),
			fontFamily: "SourceHanSerifCN-SemiBold",
			fontWeight: "600"
		},
		data: []
	},
	yAxis: {
		type: "value",
		splitLine: {
			show: false
		},
		axisLine: {
			show: true,
			lineStyle: {
				color: "#DFCFC4"
			}
		},
		min: 0,
		axisLabel: {
			// showMaxLabel: false,
			color: "#333",
			fontSize: fitChartSize(24),
			fontFamily: "SourceHanSerifCN-SemiBold",
			fontWeight: "600"
		}
	},
	series: [
		{
			name: "",
			type: "line",
			smooth: true,
			symbol: "none",
			lineStyle: {
				color: "#894C3E",
				width: fitChartSize(3)
			},
			areaStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
					{
						offset: 0,
						color: "rgba(137, 76, 62, 1)"
					},
					{
						offset: 1,
						color: "rgba(137, 76, 62, 0)"
					}
				])
			},
			data: []
		}
	]
};
