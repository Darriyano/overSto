import "../styles/log-styles.css";


const LogPage = () => {
    return (
        <>
            <div className='page-container'>
                Логи и ошибки
                <div className="log-screen">Здесь ничего нет :(</div>
                <button className="clear-btn">Очистить историю</button>
            </div>
        </>
    )
}
export default LogPage;