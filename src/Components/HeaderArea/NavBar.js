export default function NavBar()
{
    return <>
        <nav className="nav" >
            <ul className=" m-0 p-0 list-none bg-slate-800 overflow-hidden">
                <li className="inline float-left"><a className="block p-8 text-white text-center text-decoration-none hover:bg-lime-600" href="default.asp">Home</a></li>
                <li className="inline float-left"><a className="block p-8 text-white text-center text-decoration-none hover:bg-lime-600" href="news.asp">News</a></li>
                <li className="inline float-left"><a className="block p-8 text-white text-center text-decoration-none hover:bg-lime-600" href="contact.asp">Contact</a></li>
                <li className="inline float-left"><a className="block p-8 text-white text-center text-decoration-none hover:bg-lime-600" href="about.asp">About</a></li>
            </ul>
        </nav></>
}