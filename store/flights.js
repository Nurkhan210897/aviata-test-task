export const state = () => ({
    flights: [],
    selectedAirlines: []
})

export const mutations = {
    setFlights(state, results) {
        console.log(results);
        const flightsData = results.map((item) => {
            if (item) {
                let flightData = item.itineraries[0][0];
                return {
                    refundable: flightData.refundable,
                    carrier_name: flightData.carrier_name,
                    carrier: flightData.carrier,
                    price: flightData.price,
                    dest_code: flightData.stops > 0 ? flightData.segments[1].dest_code : flightData.segments[0].dest_code,
                    destCity: flightData.stops > 0 ? flightData.segments[0].dest : flightData.segments[0].dest,
                    arr_code: flightData.segments[0].origin_code,
                    baggage: flightData.segments[0].baggage_options[0],
                    route: flightData.segments[0].origin_code,
                    stops: flightData.stops,
                    dep_date: flightData.dep_date,
                    arr_date: flightData.arr_date,
                    traveltime: flightData.traveltime,
                    layovers: flightData.layovers[0],
                    originRoute: flightData.stops > 0 ? flightData.segments[1].origin : '',
                    arr_time_iso: flightData.stops > 0 ? flightData.segments[1].arr_time_iso : '',
                    dep_time: flightData.segments[0].dep_time,
                    arr_time: flightData.segments[0].arr_time,
                }
            }
        })
        state.flights = flightsData
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
