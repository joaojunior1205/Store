import React from 'react';
import ReactDOM from 'react-dom';

import InputText from './Components/Inputs/text';
import InputPassword from './Components/Inputs/password';
import ButtomPrimary from './Components/Buttons/buttomPrimary';

const styles = {
    labelStyles: {
        marginRight: 10,
        fontSize: 18,
        color: 'gray'
    },

    styleButtom: {
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderRadius: 10,
        width: '100%',
        height: 40
        
    }
}

const register = (
    <div style={{margin: 0, padding: 0}}>
        <div>
            <span style={styles.labelStyles}>Nome</span>
            <InputText />
        </div>
        <div>
            <span style={styles.labelStyles}>E-mail</span>
            <InputText />
        </div>
        <div>
            <span style={styles.labelStyles}>Senha</span>
            <InputPassword />
        </div>
        <div>
            <span style={styles.labelStyles}>Confirmação de senha</span>
            <InputPassword />
        </div>
        <div>
            <ButtomPrimary 
                buttomTitle={'Registrar'}
                buttomStyle={styles.styleButtom}    
            />
        </div>
    </div> 
)


ReactDOM.render(register, document.getElementById('root'));