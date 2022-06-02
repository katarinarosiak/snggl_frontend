import axios from "axios";
const root = "http://localhost:3000/api";

const createBin = () => {
  let request = axios.post(`${root}/bins`);
  return request.then(response => response.data);
};



const dbOps = {
  createBin,
};

export default dbOps;



/*
JSON server:
npx json-server --port 3001 --watch db.json

http://localhost:3001/requests
http://localhost:3001/bin


*/