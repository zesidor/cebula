import logo from './cebulalogo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState, useEffect } from 'react';
import minh from './img/min-h.png';
import avrh from './img/avr-h.png';
import liderh from './img/lider-h.png';
import ColumnChart from './ColumnChart';

function App() {

  const [selectedCountry, setselectedCountry] = useState('Polska');
      
  const handleItemClick = (item) => {
      setselectedCountry(item);
  };

  const [isValidValue, setIsValidValue] = useState('');
  const [isValidValueIcon, setIsValidValueIcon] = useState('');
  const [alert, setAlert] = useState('none');
  const [secondalert, setSecondAlert] = useState('none');
  const [inputValue, setInputValue] = useState('');
  const [isDiabled, setIsDisalbled] = useState('disabled');
  const [selectPolska, setSelectPolska] = useState('');
  const [selectPolskaTwo, setSelectPolskaTwo] = useState(false);
  const [thirdAlert, setThirdAlert] = useState('none')

  

  useEffect(()=>{
      const isPoland = selectedCountry === "Polska";
      setIsValidValue(isPoland ? 'border-success' : 'border-danger');
      setIsValidValueIcon(isPoland ? 'bi bi-check-circle text-success' : 'bi bi-exclamation-circle text-danger');
      setAlert(isPoland ? 'none' : 'block');
      setSelectPolska(isPoland ?'':'is-invalid');
      setSelectPolskaTwo(isPoland ? false: true);
      setThirdAlert(isPoland? 'none' :'block')
  },[selectedCountry]);

  useEffect(()=>{
    inputValue === '' ? setIsDisalbled('disabled') : setIsDisalbled('');
  },[inputValue])

  
  

  const handleInputChange = (event) => {
  const { value } = event.target;
  const regex = /^\d{0,5}(\.\d{0,2})?$/;
  
  if (regex.test(value) || value === '') {
      setInputValue(value);
      setSecondAlert('none');
  }
  else {
     setSecondAlert('block');
  }  
  };

  const [sredniaCzyTwoja, setSredniaCzyTwoja] = useState('średnią krajową');
  const [kiloCebuli, setKiloCeluli] = useState('1029,2');
  const inputasnumb = parseFloat(inputValue);
  const [imageH, setImageH] = useState(avrh)
  const [resultComment, setResultComment] = useState('Revelation 3:16')

  const userWyplata = () => {
    const inputnumbfloat = inputasnumb/6.49;
    setSredniaCzyTwoja('twoją wypłatę');
    setKiloCeluli(inputnumbfloat.toFixed(1));
    setImageH(inputasnumb <= 5146 ? minh : inputasnumb >= 5147 &&  inputasnumb < 8000 ? avrh : liderh);
    setResultComment(inputasnumb <= 5146 ? 'Have you considered growing your own cebula?' : inputasnumb >= 5147 &&  inputasnumb < 8000 ? 'Revelation 3:16' : 'Wow you must be a lider!')
  };


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-7 mt-xxl-4">
            <h1 className="tytul pt-4">The Famous Superior Cebula Index</h1>
          </div>
          <div className="col-md-5 mt-4">
            <div className="float-end">
            <p className="podpis float-start pt82"><small>by CebulaKot</small></p><img src={logo} className="rounded-circle border " alt="CebulaKot"></img>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>This incredible tool will allow you to measure the purchasing power of your wypłata by using the single greatest indicator, the amount of cebula you can buy with it.</p>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="countrypolska">Country:</label>
              <div className="alert alert-danger mt-3" style={{display: `${alert}`}}> 
                We're not familiar with your exotic currency and the price of bulbous vegetables in your far away land.
              </div>
              <div className="input-group">
                <button className="btn btn-secondary dropdown-toggle fifty" id="countrypolska" type="button" data-bs-toggle="dropdown" >Select a Country*</button>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item" onClick={() => handleItemClick('Polska')}>Polska</li>
                    <li className="dropdown-item" onClick={() => handleItemClick('Zagranica')}>Zagranica</li>
                  </ul>
                  <span className={`input-group-text fifty inline${isValidValue}`}>{selectedCountry}&nbsp;&nbsp;&nbsp;<i className={isValidValueIcon}></i></span>
              </div>
              <p><small>*If you'd like to choose a country other than Polska, you must be from zagranica.</small></p>
            </div>
            <div className="mb-3">
              <label htmlFor="wyplataamount">Ilość money in your konto dziesiątego:</label>
              <div className="alert alert-danger mt-3" style={{display: `${secondalert}`}}> 
                Please use numbers (e.g. 2.50) The field is limited to 5 digits because nie róbmy sobie jaj, i tak wiem że tyle nie zarabiasz. 
              </div>
              <div className="alert alert-danger mt-3" style={{display: `${thirdAlert}`}}> 
                Please select Polska. 
              </div>
              <div className="input-group">
                <input type="text" className={`form-control ${selectPolska}`} id="wyplataamount" placeholder="Wypłata amount" value={inputValue} onChange={handleInputChange} disabled={selectPolskaTwo}/>
                <span className="input-group-text">PLN</span>
              </div>
            </div>
            <div className="mb-3">
              <button type="button" className={`btn btn-secondary ${isDiabled}`} onClick={userWyplata} >Submit</button>
            </div>
          </div>
          <div className='col-md-6 resultcol'>
            <p className='lead'>Za {sredniaCzyTwoja} you can buy <strong>{kiloCebuli}kg</strong> cebuli<sup>1</sup>.</p>
            <img className="img-fluid mx-auto d-block" src={imageH} alt="your life rated in cebula"></img>
            <p className='pt-2'>{resultComment}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col chartcol'>
            <p>Here is how your earnings compare to those of other cebula żerców</p>
            <ColumnChart kilocebuli={kiloCebuli}/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p className='pt-5'><small>1. Data as of 16/05/2023. I googled minimum wage and średnia płaca in Polska and the source of the price of cebula was Biedronka, cebula luz (6,49zł/kg).</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
