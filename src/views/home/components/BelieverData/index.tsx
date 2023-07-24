import { useEffect, useState } from "react";
import { merge } from "lodash";
import { barOption } from "../../chartOptions/temple/countChart";
import { getMonth, getTick } from "../../chartOptions/temple/_utils";
import { useEcharts } from "@/hooks/useEcharts";

const BelieverData = () => {
	const data = [
		{ value: 30, spotName: "掘金" },
		{ value: 90, spotName: "CSDN" },
		{ value: 10, spotName: "Gitee" },
		{ value: 70, spotName: "GitHub" },
		{ value: 20, spotName: "知乎" },
		{ value: 60, spotName: "MyBlog" },
		{ value: 55, spotName: "简书" },
		{ value: 80, spotName: "StackOverFlow" },
		{ value: 50, spotName: "博客园" }
	];
	const [barOption1, setBarOption]: any = useState(barOption);
	const [echartsRef] = useEcharts(barOption1, data);
	// useDailyTimeout(
	// 	() => {
	// 		getBeliever();
	// 	},
	// 	"00:00:00",
	// 	{ immediate: true }
	// );

	function getBeliever() {
		const data = {} as any;
		const max = Math.max(...data);
		const d = new Date();
		const daylen = d.getMonth();
		const xAxisNameArr = Array.from(Array(daylen + 1), (v, k) => getMonth(k));

		setBarOption({
			...merge({}, barOption1, {
				xAxis: { data: xAxisNameArr },
				yAxis: { interval: getTick(max) },
				series: [{ data }]
			})
		});
	}

	useEffect(() => {
		getBeliever();
	}, []);

	return (
		<div className="believer-data">
			<div className="section section-title">
				<div className="divider"></div>
				<div className="content">
					<div className="title-border left"></div>
					<div className="title">每月法会报名信众统计</div>
					<div className="title-border right"></div>
				</div>
				<div className="divider"></div>
			</div>
			<div className="chart-content bar">
				<div ref={echartsRef} className="content-box"></div>;
			</div>
		</div>
	);
};

export default BelieverData;
