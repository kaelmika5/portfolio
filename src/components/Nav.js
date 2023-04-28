import '../styles/nav.css'

function Nav () {
    const nav_list = [
        {
            name: 'Accueil',
            id: 'home'
        },
        {
            name: 'À propos de moi',
            id: 'about'
        },
        {
            name: 'Skills',
            id: 'skills'
        },
        {
            name: 'Contact',
            id: 'contact'
        }
    ]

    const menu = nav_list.map(
        item => <li key={item.id}><a href={`#${item.id}`}>{item.name}</a></li>
    );

    return (
        <div id="nav" className="nav-bar">
            <ul>
                {menu}
            </ul>
        </div>
    )
}

export default Nav