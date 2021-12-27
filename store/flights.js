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
        let filteredArr = state.selectedAirlines.length ? state.selectedAirlines : state.flights
        console.log(filteredArr);
        airline.forEach(element => {
            filteredArr.filter((flight) => {
                if (flight.carrier_name === element) {
                    state.selectedAirlines.unshift(flight)
                }
            })
        });
    },

    filterFlightsByRate(state, { type, value }) {
        let filteredArr = state.selectedAirlines.length ? state.selectedAirlines : state.flights
        filteredArr.filter((flight) => {
            if (value === flight.stops && type === 'strainghtDirection') {
                return flight
            }
        })
    }
}

export const actions = {

}

export const getters = {
    getFlights: state => state.flights,
    getSelectedAirlines: state => state.selectedAirlines
}