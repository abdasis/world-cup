import {useState} from 'react'
import Header from "./components/Header";
import './assets/css/styles.css'
import axios from "axios";
import Logo from "./assets/img/Logo.jsx";

function App() {

    const [hariIni, setHariIni, error, setError] = useState([]);

    useState(() => {
        axios.get('https://worldcupjson.net/matches/today')
            .then((response) => {
                setHariIni(response.data);
            }).catch((error) => {
                setError(error)
            }
        )
    })


    return (
        <div className="App">
            <Header/>
            <div className="container content">
                <h1 className='spotlight-title'>Hari Ini</h1>
                {hariIni && hariIni.map((jadwal) =>
                    <div key={jadwal.id} className="card bg-white border-light mb-2 border">
                        <div className="card-body">
                            <div className="row justify-content-around">
                                <div className="col-12">
                                    <div className="text-center">
                                        <h5>{jadwal.venue}</h5>
                                        <p>{new Date(jadwal.datetime).toLocaleString('id-ID' , {dateStyle: 'medium', timeStyle: 'medium'})}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-4 text-center">
                                    <Logo negara={jadwal.home_team_country}/>
                                </div>
                                <div className="col-auto text-center my-auto">vs</div>
                                <div className="col-4 text-center">
                                    <Logo negara={jadwal.away_team_country}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default App
