
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
    // const [active , setActive] = useState(false);

    return (
        <div className="header">
                <div className='container'>
                
                <img className='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/New_Steam_Logo_with_name.jpg/1200px-New_Steam_Logo_with_name.jpg' alt='logoSteam'></img>
                <div className='thongtinuser'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle m-2" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
                        <span>Xin chào: User123</span>
                    </div>
                <div className="search-bar">

                


                    <div class="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg></span>
                        <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>
                {/* <div className={`item ${active}? '' : 'isActive'`}></div> */}
            </div>

        </div>
        )
}
export default Header;