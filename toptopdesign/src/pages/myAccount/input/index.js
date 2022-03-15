import { Styles } from "./inputStyle";


export default function CustomedInput({ inputValue, inputHandler, placeholderName }){
    return (
        <Styles>
            <input
                className='customed-input'
                onChange={e => inputHandler(e.target.value)}
                value={inputValue}
                placeholder={placeholderName}
            />
        </Styles>
    )
}