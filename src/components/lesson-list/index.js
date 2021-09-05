import { Col, Row } from "antd";
import { React, useState,useEffect } from "react";
import BlockGenerator from "../block-generator";
import ReactPlayer from "react-player";
import Editor from "../editor";
import LessonTitle from "../blocks/lesson-title";

import './lesson-list.sass'

const LessonList = () => {
	const [blocks, setBlocks] = useState([]);


	const createBlocks = (type) => {
		switch (type) {
			case "header":
				
				break;
			case "text":
				
				break;
			default:
				throw Error("Element unknown");
		}
	};
	
	// const lessonBlocks = blocks.map(block=>{
	// 	if(block.type==='header'){
	// 		return <Title/>
	// 	}
	// })
	const testingBlock = Editor(LessonTitle)
	return (
		<Row className='lessonlist-layout'>
			<Col span={18} offset={3}>
				<Row justify="center">
					<BlockGenerator createBlocks={createBlocks} />
					{/* {lessonBlocks}	 */}
					{/* {testingBlock} */}
				</Row>
			</Col>
		</Row>
	);
};

export default LessonList;
