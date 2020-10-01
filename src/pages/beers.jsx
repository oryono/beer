import React, {useState} from "react";
import {Beers as BeerList} from "../component/beers";

const  Beers = () => {
    const [beers, setBeers] = useState([{name: "Tusker", alcohol: 4}, {name: "Guiness", alcohol: 6}])
    const [form, setForm] = useState({})


    function handleChange(event) {
        const {name, value} = event.target
        form[name] = value
        setForm({...form})
    }

    function submit(data) {
        const b = [...beers, data]
        setBeers(b)
    }

    function deleteBeer(name) {
        console.log(name)
    }

    return (
        <div>
            <div>
                <form action="" onSubmit={(e) => {
                    e.preventDefault();
                    submit(form);
                }}>
                    <input type="text" name="name" placeholder="name" onChange={handleChange}/>
                    <input type="text" name="alcohol" placeholder="alcohol" onChange={handleChange}/>
                    <button type="submit"> Submit</button>
                </form>
            </div>

            <BeerList beers={beers} deleteBeer={(name) => deleteBeer(name)}/>

        </div>

    )
}



export default Beers;