const data = require('../api/results.json')

export const state = () => ({
    airlines: [],
    flights: []
})

export const mutations = {
    setData(state, data) {
        state.airlines = data.airlines
    }
}

export const actions = {
    fetchAirlines({ state, commit }) {
        commit('setData', data)
        commit('flights/setFlights', data)
    }
}

export const getters = {
    airlines: state => state.airlines,
}
