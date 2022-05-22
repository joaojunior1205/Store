import React from 'react';

const InputText = () => {
    return (
        <input style={styles.fieldContainer} type="text" onChange={e => null}/>
    )
}

const styles = {
    fieldContainer: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#ddd',
        width: 300,
        height: 30,
    }
}

export default InputText;