
//excluir
import axios from "axios"
import {toastr} from 'react-redux-toastr'

export function login(values){
    return submit(values, 'http://localhost:8080/api/authenticate')
}

function submit(values, url){
    return dispatch => {
        axios.post(url, values).then(resp => {
            dispatch([
                {type: 'USER_FETCHED', payload: resp.data}
            ])
        })
        .catch(e => {
            e.response.data.errors.array.forEach(error => toastr.error('Erro', error));
        })
    }
}

export function logout(){
    return {type: 'TOKEN_VALIDATED', payload: false}
}

export function validateToken(token){
    return dispatch => {
        if(token){
            dispatch({type: 'TOKEN_VALIDATED', payload: true})
        }else {
            dispatch({type: 'TOKEN_VALIDATED', payload: false})
        }
    }
}