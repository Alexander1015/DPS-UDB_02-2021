import React from "react";
import TextField from '@material-ui/core/TextField';

const Lista = ({accesorio, precio, index, deleteAccesorio, changeItem}) => {
    
    const handleChange = e => {
        changeItem(index, e.target.value)
    }

    return (
        <>
            <div className="list">
                <div className="listname">
                    <h4>{accesorio}</h4>
                    <h6>{precio} $</h6>
                </div>
                <div className="listnumber">
                    <div className="cantidad">
                        <TextField
                            id="filled-number"
                            label="Number"
                            type="number"
                            InputProps={{
                                inputProps: { min: 0 } //Para darle el valor minimo
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button className="btndelete" onClick={() => deleteAccesorio(index)}>x</button>
                    </div>
                </div>
            </div>  
            <hr className="separador" />
        </> 
    );
}

export default Lista;
