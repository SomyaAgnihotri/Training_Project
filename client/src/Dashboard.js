import { Component } from "react";
class Dashboard extends Component{
    render(){
        return(<div>
            <header class="site-header">
  <div class="wrapper site-header__wrapper">
    <a href="#" class="brand">Brand</a>
    <nav class="nav">
      <button class="nav__toggle" aria-expanded="false" type="button">
        menu
      </button>
      <ul class="nav__wrapper">
        <li class="nav__item"><a href="#">Home</a></li>
        <li class="nav__item"><a href="#">About</a></li>
        <li class="nav__item"><a href="#">Services</a></li>
        <li class="nav__item"><a href="#">Hire us</a></li>
        <li class="nav__item"><a href="#">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>            
        </div>)
    }
}
export default Dashboard;
    
