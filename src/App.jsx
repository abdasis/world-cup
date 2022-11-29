import {useState} from 'react'
import Header from "./components/Header";
import './assets/css/styles.css'
import axios from "axios";
import Logo from "./assets/img/Logo.jsx";
import {AiFillHeart, BiBall, IoFootballOutline, MdDateRange, SlUserFollow} from "react-icons/all";
import Navigasi from "./components/Navigasi";

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
                        <p className={'text-white'}>Dapatkan jadwal terbaru dari Piala Dunia Qatar 2022</p>
                        <a href="https://facebook.com/lazizdev" className='text-decoration-none'>
                            <button className="btn btn-light width-md btn-sm d-flex align-items-center gap-1">
                                <SlUserFollow/>
                                <span>Ikuti Aku</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container content">
                <h1 className='spotlight-title'>Hari Ini</h1>
                {hariIni ? hariIni.map((jadwal) =>
                    <div key={jadwal.id} className="card bg-white border-light mb-2 border">
                        <div className="card-body">
                            <div className="row justify-content-around mt-3">
                                <div className="col-12 mb-2">
                                    <div className="text-center">
                                        <h5 className={'nama-stadion'}>{jadwal.venue}</h5>
                                        <p className='text-pink jadwal rounded d-flex align-items-center justify-content-center gap-1'>
                                            <MdDateRange/>
                                            {new Date(jadwal.datetime).toLocaleString('id-ID' , {dateStyle: 'medium', timeStyle: 'medium'})}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-5 text-center">
                                    <Logo negara={jadwal.home_team_country}/>
                                    <p className={'mt-1'}>{jadwal.home_team.name}</p>
                                </div>
                                <div className="col-2 text-center my-auto">
                                    <IoFootballOutline className={'fs-1'}/>
                                    <div>vs</div>
                                </div>
                                <div className="col-5 text-center">
                                    <Logo negara={jadwal.away_team_country}/>
                                    <p className={'mt-1'}>{jadwal.away_team.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) :
                    <div>
                        <div className="alert alert-warning">
                            Tidak ada data yang bisa di tampilkan silahkan refresh halaman
                        </div>
                    </div>
                }
            </div>
            <footer className={'bg-white py-3'}>
                <div className="text-center">
                    Dibuat dengan <AiFillHeart className='text-danger'/> Oleh Abdul Aziz
                    <br/>
                    <small className="text-muted">
                        Dengan Lisensi MIT
                    </small>
                </div>
            </footer>
        </div>
    )
}

export default App
