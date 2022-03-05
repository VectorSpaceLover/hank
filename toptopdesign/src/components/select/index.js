import Select from 'react-dropdown-select';

export default function StyledSelect({ options }){
    return (
        <Select
            options={options}
            onChange={(values) => this.onChange(values)}
        />
    )
}