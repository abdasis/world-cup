import maskot from '../assets/img/maskot.png'
export default function Header() {
    return (
        <div>
            <nav className="navbar bg-white border-bottom border-light">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img src={maskot} alt="Logo" height="50"
                             className="d-inline-block align-text-top"
                        />
                    </a>
                </div>
            </nav>
        </div>
    );
}
