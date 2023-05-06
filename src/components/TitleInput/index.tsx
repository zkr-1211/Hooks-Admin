import { Input } from "antd";
import { SetStateAction, useState } from "react";
import "./index.less";
const TitleInput = (props: any) => {
	const [isFocus, setFocus] = useState(false);
	const [currentInputText, setCurrentInputText] = useState("");
	const { placeholder, isPrepend = false, onInputText } = props;
	const onChange = (e: { target: { value: SetStateAction<string> } }) => {
		setCurrentInputText(e.target.value);
		onInputText(e.target.value);
	};
	return (
		<div className="input-wrapper">
			<Input
				placeholder=" "
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				onChange={onChange}
				prefix={isPrepend && props.children}
			/>
			{!isPrepend ? (
				<span
					className={["input-label", isFocus ? "active" : "", currentInputText && !isFocus ? "active_stop_top" : ""].join(" ")}
				>
					{placeholder}
				</span>
			) : (
				<span
					className={["input-label1", isFocus ? "active1" : "", currentInputText && !isFocus ? "active_stop_top1" : ""].join(" ")}
				>
					{placeholder}
				</span>
			)}
		</div>
	);
};
export default TitleInput;
