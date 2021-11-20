const basicFetch = async () => {
    const req = await fetch('http://localhost:8080/produto/', {method: 'get', headers: {'Accept': 'application/json'}});
    const json = await req.json();

    return json;
}

export default {
    getProdutos: async () => {
        return await basicFetch()
    }
}