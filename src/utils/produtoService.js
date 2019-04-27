const api = "";

const headers = {
    'Accept': 'application/json',
    "Content-Type": "application/json"
};


export const getProdutos = (lat, lon) =>
    fetch(`${api}/produtos/latitude=${lat}&longitude=${lon}`, { headers })
        .then(res => res.json())
        .then((data) => {
            return data;
        });

