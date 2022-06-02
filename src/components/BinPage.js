import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BinEmpty from "./BinEmpty";
import BinFull from "./BinFull";

const BinPage = ( ) => {
	const mainURL = "http://localhost:3000";
	const { path } = useParams();
	const url = `${mainURL}/${path}`;
	const [ requests, setRequests ] = useState([]);


	useEffect(() => {
		const fetchRequests = async () => {
			await fetch(`http://localhost:3001/bin/${path}`)
				.then(response => response.json())
				.then(requests => {
					console.log(requests);
					setRequests(requests);
				});
		};
		fetchRequests();
	}, []);

	return (
		<div>
			{requests.length === 0 ? (
				<BinEmpty path={path} url={url}/>
			) : (<BinFull requests={requests}/>)}
		</div>
	);
};

export default BinPage;



