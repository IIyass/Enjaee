import React from 'react';
import Select, { components } from 'react-select'
import { SelectContainer } from './style'

const SortInput = () => {

    const options = [
        { value: 'abc', label: 'abc' },
        { value: 'def', label: 'def' }
    ]

    const handleSortName = (e) => {
        console.log(e)
    }
    const DropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <i className="fa fa-search" aria-hidden="true" style={{ position: 'initial' }}></i>
            </components.DropdownIndicator>
        );
    };

    // components={{ DropdownIndicator }}
    // placeholder={placeholderComponent}
    return (
        <SelectContainer>
            <Select
                options={options}
                isMulti={false}
                onChange={handleSortName}
                isSearchable={true}
                components={DropdownIndicator}
                placeholder="Sort by"

            />
        </SelectContainer>

    )
}

export default SortInput