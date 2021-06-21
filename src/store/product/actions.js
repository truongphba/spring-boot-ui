export async function loadProducts({commit}) {
    commit('fetchProductsBegin')
    commit('fetchProductsSuccess', {
        data: [
            {
                id: 1,
                name: 'product1',
                price: 1000
            }
        ]
    })
    // fetch('http://127.0.0.1:8081/api/students')
    //     .then(response => response.json())
    //     .then((data) => {
    //         commit('fetchStudentsSuccess', {
    //             data: data
    //         })
    //     })
}
