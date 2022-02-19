import axios from "axios";

function getAllData() {
    return new Promise((resolve) => {
        axios
            .get('/api')
            .then(response => resolve(response));
    })
}

function addRow(data) {
    return new Promise((resolve) => {
        axios({
            method: 'post',
            url: '/api',
            data: data
        }).then((response) => resolve(response));
    })
}

function deleteRow(data) {
    return new Promise((resolve) => {
        axios({
            method: "delete",
            url: '/api',
            data: data
        }).then((response) => resolve(response))
    })
}

function changeRow(data) {
    return new Promise((resolve) => {
        axios({
            method: "put",
            url: '/api',
            data: data
        }).then((response) => resolve(response))
    })
}

export default  {
    getAllData, addRow, deleteRow, changeRow
}