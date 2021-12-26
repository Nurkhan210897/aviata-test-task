export const state = () => ({
    flights: [],
    selectedAirlines: []
})

export const mutations = {
    setFlights(state, results) {
        const data = results.map(element => {
            console.log(element.itineraries[0][0]);
            return element.itineraries[0][0];
        });
        state.flights = data
    },

    filterFlights(state, airline) {
        state.selectedAirlines = []
        airline.forEach(element => {
            state.flights.filter((el) => {
                if (el.carrier_name === element) {
                    state.selectedAirlines.unshift(el)
                }
            })
        });
    }
}

export const actions = {

}

export const getters = {
    getFlights: state => state.flights,
    getSelectedAirlines: state => state.selectedAirlines
}