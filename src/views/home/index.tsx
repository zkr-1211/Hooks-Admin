import { SetStateAction, useEffect } from "react";
import "./index.less";
import TopHeader from "./components/TopHeader";
import RealTimeStatis from "./components/RealTimeStatis";
import MultiAmountChart from "./components/MultiAmountChart";
import StatisticsCard from "./components/StatisticsCard";
import BelieverData from "./components/BelieverData";
import CarData from "./components/CarData";
import OrderData from "./components/OrderData";
import { useState } from "react";
const Home = () => {
	const [state, setState] = useState<string>("1");
	const [topHeaderData, setTopHeaderData] = useState("");
	return (
		<div>
			<div className="container">
				<div className="top-header">
					<TopHeader data={topHeaderData} />
				</div>
				<div className="main-container">
					{/* 左：捐款统计数据 */}
					<div className="block-left">
						<div>
							<RealTimeStatis />
						</div>
						<div>
							<MultiAmountChart />
						</div>
					</div>

					{/* 中: 累计/今日的功德/信众量 */}
					<div className="block-middle">
						<StatisticsCard />
					</div>

					{/* 右：商户数据、数字营销 */}
					<div className="block-right">
						<div>
							<BelieverData />
						</div>
						<div>
							<CarData />
						</div>
						<div>
							<OrderData />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
