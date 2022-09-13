import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
const [country, setCountry] = useState("");
const [cases, setCases] = useState("");
const [recovered, setRecovered] = useState("");
const [deaths, setDeaths] = useState("");
const [todayCases, setTodayCases] = useState("");
const [deathCases, setDeathCases] = useState("");
const [recoveredCases, setRecoveredCases] = useState("");
const [userInput, setUserInput] = useState("");

useEffect(() => {
	fetch("https://disease.sh/v3/covid-19/countries")
	.then((res) => res.json())
	.then((data) => {
		setData(data);
	});
}, []);

const setData = ({
	country,
	cases,
	deaths,
	recovered,
	todayCases,
	todayDeaths,
	todayRecovered,
}) => {
	setCountry(country);
	setCases(cases);
	setRecovered(recovered);
	setDeaths(deaths);
	setTodayCases(todayCases);
	setDeathCases(todayDeaths);
	setRecoveredCases(todayRecovered);
};

const handleSearch = (e) => {
	setUserInput(e.target.value);
};
const handleSubmit = (props) => {
	props.preventDefault();
	fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
	.then((res) => res.json())
	.then((data) => {
		setData(data);
	});
};

return (
	<div>
	<h1>COVID-19 CASES BY COUNTRY</h1>
	<div>
		 <form onSubmit={handleSubmit}> {/* form to input country name */}
		
    <div class="form-group">
      <label className="my-3">Country Name:</label>
      <input onChange={handleSearch} 
      type="text" 
      class="form-control" 
      id="exampleFormControlInput1" 
      placeholder="Enter the Country Name"/>
      <button class="btn btn-primary my-3" type="submit">Search</button>
    </div>
		
		</form>
	</div>
  <table class="table table-hover my-5">
  <tbody>
    <tr>
      
      <td>Country Name </td>

      <td>Cases </td>

      <td>Deaths : </td>

      <td>Recovered : </td>

      <td>Cases Today : </td>

      <td>Deaths Today : </td>

      <td>Recovered Today : </td>  
      
    </tr>
    <tr>
      
      <td> {country} </td>
      <td> {cases}</td>
      <td>{deaths}</td>
      <td>{recovered}</td>
      <td>{todayCases}</td>
      <td>{deathCases}</td>
      <td>{recoveredCases}</td>
      
      
    </tr>
  </tbody>
</table>
	
	</div>
);
}

export default App;
