import React, { useEffect, useState } from 'react';
import "./App.css";
import axios from 'axios';

function App() {
  const [to, setTo] = useState("eng");
  const [form, setForm] = useState("eng");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [option, setOptions] = useState([]);


  const translate = () => {
    // curl -X POST "https://libretranslate.de/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

    const params = new URLSearchParams();
    params.append('q', input);
    params.append('source', form);
    params.append('target', to);
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

    axios
      .post('https://libretranslate.de/translate', params, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then(res => {
        console.log(res.data)
        setOutput(res.data.translatedText)
      })
  };




  useEffect(() => {
    axios
      .get('https://libretranslate.de/languages', {
        headers: { accept: 'application/json' },
      })
      .then((res) => {
        console.log(res.data);
        setOptions(res.data);
      });
  }, []);





  return (
    <div className='main'>
      <div>
        form ({form}):
        <select onChange={(e) => { setForm(e.target.value) }}>
          {option.map((e) => { return <option key={e.code} value={e.code}>{e.name}</option> })}
        </select>
        to ({to}):
        <select onChange={(e) => { setTo(e.target.value) }}>
          {option.map((e) => { return <option key={e.code} value={e.code}>{e.name}</option> })}
        </select>
      </div> <br />

      <div>
        <textarea name="" id="" cols="80" rows="10" onInput={e => setInput(e.target.value)}></textarea>
      </div>
      <div> <br />
        <textarea name="" id="" cols="80" rows="10" value={output}></textarea>
      </div>
      <div> <br />
        <button onClick={(e) => translate()}>Check</button>
      </div>





    </div>
  )
}

export default App





