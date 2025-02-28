import appLogo from '../assets/shopping-cart.png'
export default function Header(){
    return (
    <header id='main-header'>
        <div id='title'>
            <img src={appLogo}/>
            <h1>Smart Shop</h1>
        </div>
    </header>
    );
}
