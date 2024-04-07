import './MethodsContainer.css';

export default function MethodsContainer(){
    return(
        <div className="container">
            <div className="container-inline">
                <span>МЕТОДЫ РЕШЕНИЯ УРАВНЕНИЙ</span>
                <div className='methods-cards'>
                    <div className="card">
                        <span>МЕТОД ПОЛОВИННОГО ДЕЛЕНИЯ</span>
                    </div>
                    <div className="card">
                        <span>МЕТОД ХОРД</span>
                    </div>
                    <div className="card">
                        <span>МЕТОД КАСАТЕЛЬНЫХ</span>
                    </div>
                    <div className="card">
                        <span>МЕТОД ИТЕРАЦИЙ</span>
                    </div>
                </div>
            </div>
            <div className="container-inline">
                <span>МЕТОДЫ РЕШЕНИЯ СИСТЕМЫ УРАВНЕНИЙ</span>
                <div className='methods-cards'>
                    <div className="card">
                        <span>МЕТОД ГАУССА</span>
                    </div>
                    <div className="card">
                        <span>МЕТОД ИТЕРАЦИЙ</span>
                    </div>
                    <div className="card">
                        <span>МЕТОД ЗЕЙДЕЛЯ</span>
                    </div>
                </div>
            </div>
        </div>
    )
}