const Navbar = () => {
    return(
        <div className="flex bg-red-600 p-5 justify-between items-center">
            <div className="bg-blue-400 p-3">LOGO</div>
            <ul className="flex gap-2">
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
        </div>
    )
}

export default Navbar