import MenuComponent from "./MenuComponent";
import "../styles/card-styles.css";


const CardPage = () => {
    const navigation = () => {
    }

    return (
        <>
            <div className='page-container'>
                Подключите робота
                <input type="text" id="robotID" name="robotID" defaultValue="Введите ID..." required/>
                <button className='connect-btn' onClick={navigation}>Подключиться</button>
            </div>
        </>
    )
}
export default CardPage;