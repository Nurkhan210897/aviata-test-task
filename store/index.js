const data = require('../api/results.json')

export const state = () => ({
    airlines: {},
    flights: [],
    tariffOptions: [
        { rate: 'Только прямые', type: 'strainghtDirection', value: 0 },
        { rate: 'Только с багажом', type: 'onlyWithLuggage', value: 1 },
        { rate: 'Только возвратные', type: 'returnableOnly', value: 2 },
    ],
})

export const mutations = {
    setAirlines(state, data) {
        data = { all: 'Все', ...data };
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
