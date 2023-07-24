import welcome from "@/assets/images/welcome01.png";
import { SetStateAction, useEffect } from "react";
import "./index.less";
import TitleInput from "@/components/TitleInput";
import { useState } from "react";
const Home = () => {
	const [state, setState] = useState<string>("1");
	useEffect(() => {
		console.log(state);
		setState("2");
	});
	const [text, setText] = useState("");
	useEffect(() => {
		console.log("text=====", text);
	}, [text]);
	const UseComponent = (props: any) => {
		useEffect(() => {
			console.log(props);
		});
		const onClickTest = () => {
			console.log(props);
		};
		return (
			<div className="card content-box" onClick={onClickTest}>
				<span className="text">{props.name} 🍓🍇🍈🍉</span>
			</div>
		);
	};
	return (
		<div>
			<TitleInput placeholder="请输入测试文字" isPrepend={true} onInputText={(e: SetStateAction<string>) => setText(e)}>
				123
			</TitleInput>
			<UseComponent name="home" />
			<div className="home card">
				<img src={welcome} alt="welcome" />
			</div>
		</div>
	);
};

export default Home;
