import { useRef, useEffect, useState } from "react";
import moment from "moment";

export const useTimes = (): string => {
	const timer = useRef<number | null>(null);
	const [time, setTime] = useState<string>(moment().format("YYYY年MM月DD日 HH:mm:ss"));

	useEffect(() => {
		timer.current = window.setInterval(() => {
			setTime(moment().format("YYYY年MM月DD日 HH:mm:ss"));
		}, 1000);
		return () => {
			timer.current && window.clearInterval(timer.current);
		};
	}, []);

	return time;
};
