import logo from './logoicon.svg'
import './NavigatorBar.css'

export default function NavigatorBar(){
  return(
    <header className='nav-bar'>
        <div className='nav-elements'>
            <img src={logo} alt="+-x="/>
            <h1>MATHKSI</h1>
        </div>
    </header>
  )
}