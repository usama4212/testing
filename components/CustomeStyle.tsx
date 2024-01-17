export const customStyles = {
    option: (provided: any, state: any) => ({
        ...provided,
        // borderBottom: '1px dotted gray',
        color: state.isSelected ? '#black' : 'black',
        backgroundColor: state.isSelected ? '#E9E9E9' : 'transparent',
        ':hover': {
            backgroundColor: '#E9E9E9',
            color: 'black'
        }
    }),
    input: (provided: any) => ({ ...provided, color: 'black !important' }),

    placeholder: (provided: any) => ({
        ...provided,
        color: "#F0C30F",
        opacity: 0.7
    }),


    menu: (provided: any) => ({
        ...provided,
        backgroundColor: 'white',
        border: '1px solid gray',
        color: "#black",
        zIndex: "10",
        opacity: "1",
        textAlign: "left",
    }),


    // dropdownIndicator: (provided) => ({
    //     ...provided,
    //     color: '#F0C30F', // set the color of the dropdown arrow to red
    //     '&:hover': {
    //         color: '#F0C30F', // set the hover color of the dropdown arrow to red
    //     },
    // }),

    dropdownIndicator: (provided: any, state: any) => ({
        ...provided,
        transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
        transition: 'transform 0.3s',
        color: state.selectProps.menuIsOpen ? 'black' : 'black', // Change color here
        '&:hover': {
            color: 'black', // Change hover color here
        },
        '&:active': {
            color: 'black', // Change active color here
        },
    }),


    indicatorSeparator: (provided: any) => ({
        ...provided,
        backgroundColor: 'black', // set the color of the indicator separator to black
        '&:hover': {
            color: '#F0C30F', // set the hover color of the dropdown arrow to red
        },
    }),


    control: (provided: any, state: any) => ({
        ...provided,
        borderBottom: '1px solid transparent', // set the bottom border of the control to black
        borderWidth: '0px 0px 1px 0px',
        borderRadius: "0px !important",
        backgroundColor: 'transparent', // change the background color of the control
        borderColor: state.isFocused ? '#F0C30F' : '#F0C30F', // customize the border color when the control is focused or not
        boxShadow: state.isFocused ? '0 0 0 1px transparent' : null, // customize the box shadow when the control is focused
        '&:hover': {
            borderColor: 'transparent', // customize the border color when the control is hovered
        },
    }),
};