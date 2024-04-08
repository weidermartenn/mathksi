import './MethodsContainer.css';

export default function MethodsContainer(){
    return(
        <div className="container">
            <span>МЕТОДЫ РЕШЕНИЯ СИСТЕМЫ УРАВНЕНИЙ</span>
            <div className="container-met">
                <div className='container-column'> 
                    <button className="card">МЕТОД ИТЕРАЦИЙ</button>
                    <button className="card">МЕТОД ГАУССА</button>
                    <button className="card">МЕТОД ЗЕЙДЕЛЯ</button> 
                </div>
                <div className='container-method'>

                </div>
            </div>
        </div>
    )
}