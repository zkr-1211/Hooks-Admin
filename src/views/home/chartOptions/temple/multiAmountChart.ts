import { fitChartSize } from "@/utils/dataUtils";
// 看板左侧底部
// 1.柱状图-每月金额统计
export const barOption = {
	legend: {
		show: true,
		bottom: fitChartSize(20),
		textStyle: {
			color: "#333",
			fontSize: fitChartSize(24),
			fontFamily: "SourceHanSerifCN-SemiBold",
			fontWeight: "600"
		},
		itemWidth: fitChartSize(24),
		itemHeight: fitChartSize(24)
	},
	grid: {
		top: fitChartSize(40),
		left: fitChartSize(100),
		right: fitChartSize(70),
		bottom: fitChartSize(130)
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
			fontWeight: "500"
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
			barGap: 0,
			barMaxWidth: fitChartSize(40),
			data: [] // [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6]
		},
		{
			name: "",
			type: "bar",
			barMaxWidth: fitChartSize(40),
			data: []
		},
		{
			name: "",
			type: "bar",
			barMaxWidth: fitChartSize(40),
			data: []
		}
	]
};

// 2.饼状图-累计金额占比
export const pieOption = {
	legend: {
		bottom: fitChartSize(0),
		textStyle: {
			color: "#333",
			fontSize: fitChartSize(32),
			fontFamily: "SourceHanSerifCN-SemiBold",
			fontWeight: "600"
		},
		itemWidth: fitChartSize(24),
		itemHeight: fitChartSize(24)
	},
	series: [
		{
			name: "",
			type: "pie",
			radius: [0, "70%"],
			center: ["50%", "40%"],
			label: {
				color: "#3D3D3D",
				fontSize: fitChartSize(32),
				fontFamily: "SourceHanSerifCN-Bold",
				fontWeight: "700",
				formatter: "{d}%"
			},
			startAngle: 115,
			color: ["#6F1F0B", "#F7C62D", "#F1A324"],
			data: [] // { value: 1048, name: 'Search Engine' }
		}
	]
};
