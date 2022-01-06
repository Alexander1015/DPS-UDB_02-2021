import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Lista from "../components/Lista";
import Datos from "../components/Datos.json";

const accesorios = Datos.Accesorios;
var total = 0;

const Form = () => {
    //Variables
    const [accesorio, setAccesorio] = useState({});
    const [listas, setListas] = useState([]);
    const [cantidades, setCantidades] = useState([]);
    //Metodos
    const handleChange = e => setAccesorio({[e.target.name]: e.target.value})
    const handleClick = e => {
        if(Object.keys(accesorio).length === 0 || accesorio.producto === '') {
            alert('El campo no puede estar vacio')
            return
        }
        var item = "";
        var precio = 0;
        for(var i = 0; i < accesorios.length; i++) {
            if(accesorio.producto === accesorios[i].id) {
                item = accesorios[i].accesorio;
                precio = accesorios[i].precio;
            }
        }
        if(precio != 0) {
            setListas([...listas, {producto: item, precio: precio}])
            setCantidades([...cantidades, 0])
        }
        else return
    }
    const deleteAccesorio = indice => {
        const newListas = [...listas]
        const newCantidades = [...cantidades];
        newListas.splice(indice, 1)
        newCantidades.splice(indice, 1)
        setListas(newListas)
        setCantidades(newCantidades)
        total = 0;
        for (var i = 0; i < newCantidades.length; i++) {
            //console.log(total + " + " + listas[i].precio + " * " + newCantidades[i])
            total = total + (listas[i].precio * newCantidades[i]);
        }
    }

    const changeItem = (indice, cantidad) => {
        total = 0;
        const newCantidades = [...cantidades];
        newCantidades[indice] = cantidad;
        for (var i = 0; i < listas.length; i++) {
            //console.log(total + " + " + listas[i].precio + " * " + newCantidades[i])
            total = total + (listas[i].precio * newCantidades[i]);
        }
        setCantidades(newCantidades)
    }

    return (
        <>
            <form noValidate autoComplete="off">
                <div className="cmb">
                    <TextField
                        name="producto"
                        id="standard-select-currency"
                        className="combo"
                        select
                        label="Agregar Elemento"
                        onChange={handleChange}
                    >
                        {accesorios.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                            {option.id}. {option.accesorio} ({option.precio} $)
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className="btn">
                    <Button 
                        className="boton" 
                        variant="contained" 
                        onClick={handleClick}
                    >
                        Agregar
                    </Button>
                </div>
            </form>
            {
                listas.map((value, index) => (
                    <Lista accesorio={value.producto} precio={value.precio} key={index} index={index} deleteAccesorio={deleteAccesorio} changeItem={changeItem}/>
                ))
            }
            <p>Total: {total} $</p>
        </>
    );
}

export default Form;