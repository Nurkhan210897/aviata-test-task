const data = require('../api/results.json')

export const state = () => ({
    airlines: [],
    flights: []
})

export const mutations = {
    setAirlines(state, data) {
        state.airlines = data
    }
}

export const actions = {
    fetchAirlines({ state, commit }) {
        commit('setAirlines', data.airlines)
        commit('flights/setFlights', data.flights)
    }
}

export const getters = {
    airlines: state => state.airlines,
}