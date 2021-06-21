export async function loadProducts({commit}) {
    commit('fetchProductsBegin')
    fetch('http://127.0.0.1:8081/products')
        .then(response => response.json())
        .then((data) => {
            commit('fetchProductsSuccess', {
                data: data
            })
        })
}
