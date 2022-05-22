import React from 'react';

const InputPassword = () => {
    return (
        <input style={styles.fieldContainer} type={'password'} onChange={e => null} />
    )
};

const styles = {
    fieldContainer: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#ddd',
        width: 300,
        height: 30,
    }
}

export default InputPassword;