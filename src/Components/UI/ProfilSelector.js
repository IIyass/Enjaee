import React from 'react';
import Select, { components } from 'react-select'
import { SelectContainer } from './style'
import Polygon from '../../Illustration/Polygon.svg'

const ProfilSelector = (props) => {



    const handleSortName = (e) => {
        console.log(e)
    }
    const customStyles = {
        control: (base, state) => ({
            ...base,
            width: '350px',
            height: state.selectProps.height,
            background: 'transparent',
            // match with the menu

            // Overwrittes the different states of border
            borderColor: state.isFocused ? "#47525D" : "#47525D",
            borderColor: state.isSelected ? "#47525D" : "#47525D",
            border: 'none',
            borderBottom: "2px solid #4A4A4A",
            borderRadius: 0,
            // Removes weird border around container
            "&:hover": {
                // Overwrittes the different states of border
                borderColor: state.isFocused ? "#47525D" : "#47525D",
            }

        }),
        menu: base => ({
            ...base,
            // override border radius to match the box
            borderRadius: 0,
            // kill the gap
            marginTop: 0
        }),
        menuList: base => ({
            ...base,
            // kill the white space on first and last option
            padding: 0
        }),
        indicatorSeparator: (styles) => ({ display: 'none' }),
        placeholder: () => ({ color: '#47525D', fontWeight: 400, fontSize: '14px' })
    }


    const DropdownIndicator = (
        props: ElementConfig<typeof components.DropdownIndicator>
    ) => {
        return (
            <components.DropdownIndicator {...props}>
                <img src={Polygon} />
            </components.DropdownIndicator>
        );
    };

    return (
        <SelectContainer>
            <p id="label">{props.label}</p>
            <Select
                components={{ DropdownIndicator }}
                width={props.width}
                height={props.height}
                styles={customStyles}
                options={props.options}
                isMulti={false}
                onChange={handleSortName}
                isSearchable={true}
                placeholder={props.placeholder}
            />
        </SelectContainer>


    )
}

export default ProfilSelector;