import React from 'react';
import Select, { components } from 'react-select'
import { SelectContainer } from './style'
import Polygon from '../../Illustration/Polygon.svg'

const ProfilSelector = (props) => {


    const customStyles = {
        control: (base, state) => ({
            ...base,
            width: state.selectProps.width,
            height: state.selectProps.height,
            background: 'transparent',
            borderColor: state.isFocused ? "#47525D" : "#47525D",
            borderColor: state.isSelected ? "#47525D" : "#47525D",
            border: state.selectProps.border,
            borderBottom: state.selectProps.borderBottom,
            borderRadius: 0,
            "&:hover": {
                borderColor: state.isFocused ? "#47525D" : "#47525D",
            }
        }),
        menu: base => ({
            ...base,
            borderRadius: 0,
            marginTop: 0
        }),
        menuList: base => ({
            ...base,
            padding: 0
        }),
        indicatorSeparator: () => ({ display: 'none' }),
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

    return <SelectContainer>
        <p id="label">{props.label}</p>
        <Select
            components={{ DropdownIndicator }}
            border={props.border}
            borderBottom={props.borderBottom}
            width={props.width}
            height={props.height}
            styles={customStyles}
            options={props.options}
            isMulti={false}
            value={props.value}
            onChange={props.onChange}
            isSearchable={true}
            placeholder={props.placeholder}
            {...props}
        />
    </SelectContainer>;
}

export default ProfilSelector;