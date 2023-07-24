import { fitChartSize } from "@/utils/dataUtils";
// 看板左侧底部
// 1.柱状图-每月报名信众统计、斋堂点餐统计
export const barOption = {
	grid: {
		top: fitChartSize(40),
		left: fitChartSize(100),
		right: fitChartSize(70),
		bottom: fitChartSize(50)
	},
	xAxis: {
		axisTick: {
			show: false
		},
		axisLine: {
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
	color: ["#6F1F0B", "#F7C62D", "#F1A324"],
	series: [
		{
			name: "",
			type: "bar",
			barMaxWidth: fitChartSize(40),
			data: [] // [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6]
		}
	]
};
