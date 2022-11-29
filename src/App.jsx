import {useState} from 'react'
import Header from "./components/Header";
import './assets/css/styles.css'
import axios from "axios";
import Logo from "./assets/img/Logo.jsx";
import {SlUserFollow} from "react-icons/all";

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
            <div className="container">
                <div className="salam d-flex align-items-center">
                    <div className="salam-overlay"></div>
                    <div className="kata-salam my-auto">
                        <h1 className={'mb-0'}>Ahlan Wasahlan</h1>
                        <p className={'text-white'}>Dapatkan jadwal terbaru di piala dunia</p>
                        <a href="https://facebook.com/lazizdev" className='text-decoration-none'>
                            <button className="btn btn-light width-md btn-sm d-flex align-items-center gap-1">
                                <SlUserFollow/>
                                Ikuti
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container content">
                <h1 className='spotlight-title'>Hari Ini</h1>
                {hariIni && hariIni.map((jadwal) =>
                    <div key={jadwal.id} className="card bg-white border-light mb-2 border">
                        <div className="card-body">
                            <div className="row justify-content-around">
                                <div className="col-12 mb-2">
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
