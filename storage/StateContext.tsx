import React from 'react'
import { View } from 'react-native';

export const StateContext = React.createContext({theme: 'light'});

type props = {
    children: any
}

export const StateProvider: React.FC<props> = (props) => {
    const [film, setFilm] = React.useState()
    return(
        <StateContext.Provider value={{ theme: 'ss'}}>
            {props.children}
        </StateContext.Provider>
    )
}

// import React from 'react';
// import PropTypes from 'prop-types';

// const StateContext2 = props => {
//     return (
//         <div>
            
//         </div>
//     );
// };
