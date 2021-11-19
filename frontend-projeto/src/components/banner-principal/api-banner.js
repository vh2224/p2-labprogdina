const basicFetch = async () => {
    const req = await fetch('/api/banner.json', {method: 'get', headers: {'Accept': 'application/json'}});
    const json = await req.json();

    return json;
}

export default {
    getProdutos: async () => {
        return await basicFetch()
    }
}