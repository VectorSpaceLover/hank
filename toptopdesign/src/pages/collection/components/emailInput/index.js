import { Styles } from './style/emailInputStyle';

export default function EmailInput({description, setDescription}){

    const handleChange = (e) => {
        setDescription(e.target.value)
    }

    return (
        <Styles>
            <textarea 
                className='input'
                onChange={e => handleChange(e)}
                value={description}
                rows="2" 
                cols="20" 
                maxLength="150"
            />
        </Styles>
    )
}