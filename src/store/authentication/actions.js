export async function loadAccount({commit}, token) {
    commit('fetchAccountBegin')
    commit('fetchAccountSuccess', {
        data: {
            id: 1,
            username: 'truongph',
            fullName: 'truongph',
            role: 1,
            status: 1
        }
    })
    // fetch('http://127.0.0.1:8081/api/students/' + token)
    //     .then(response => response.json())
    //     .then((data) => {
    //         commit('fetchStudentSuccess', {
    //             data: data
    //         })
    //     })
}