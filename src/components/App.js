import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList"
import HogFilter from "./HogFilter";
import hogs from "../porkers_data";

function App() {
const [sortBy, setSortBy] = useState("")

function toggleSortBy(e){
const selectedValue= e.target.value
setSortBy(selectedValue)
}
	return (
		<div className="App">
			<Nav />
			<div>
			<HogFilter toggleSortBy={toggleSortBy} sortBy={sortBy}/>	
			</div>
			<HogList hogs={hogs} sortBy={sortBy}/>
		</div>
	);
}

export default App;
