import { useEffect, useState } from "react";
import "./index.less";

function CarData(props: any) {
	const [time, setTime] = useState("");
	useEffect(() => {
		setTime(props.data.time);
	}, [props.data]);

	return (
		<div className="header">
			<div className="logo"></div>
			<div className="title"></div>
			<div className="time">{time}</div>
		</div>
	);
}

export default CarData;
