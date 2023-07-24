import { fitChartSize } from "@/utils/dataUtils";
// 看板中间底部
// 1.饼状图-各产品金额统计
export const pieOption: any = {
	legend: {
		bottom: fitChartSize(0),
		orient: "vertical",
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
			radius: ["40%", "65%"],
			center: ["50%", "35%"],
			label: {
				position: "inside",
				color: "#6F1F0B",
				fontSize: fitChartSize(32),
				fontFamily: "SourceHanSerifCN-Bold",
				fontWeight: "700",
				formatter: "{d}%"
			},
			startAngle: 115,
			color: ["#F7C62D", "#F1A324", "#6F1F0B"],
			data: [] // { value: 580, name: 'Email', label: { color: '#F7C62D' } },
		}
	]
};
