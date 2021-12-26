const data = require('../api/results.json')

export const state = () => ({
    airlines: {},
    flights: [],
    tariffOptions: [
        { name: 'Только прямые', type: 'strainghtDirection', value: 0 },
        { name: 'Только с багажом', type: 'onlyWithLuggage', value: 1 },
        { name: 'Только возвратные', type: 'returnableOnly', value: 0 },
    ],
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
    tariffOptions: state => state.tariffOptions,
}