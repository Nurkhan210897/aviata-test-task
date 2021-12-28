export const state = () => ({
    flights: [],
    selectedAirlines: [],
    flightsByRate: []
})

export const mutations = {
    setFlights(state, results) {
        const flightsData = results.map((item, index) => {
            if (item) {
                let flightData = item.itineraries[0][0];
                return {
                    id: index,
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
        airline.forEach(element => {
            filteredArr.filter((flight) => {
                if (flight.carrier_name === element) {
                    state.selectedAirlines.unshift(flight)
                }
            })
        });
    },

    filterFlightsByRate(state, rates) {
        let filteredArr = state.selectedAirlines.length ? state.selectedAirlines : state.flights
        let arr = []
        rates.forEach(element => {
            if (element === 'strainghtDirection') {
                filteredArr.filter((flight) => {
                    if (flight.stops === 0) {
                        arr.unshift(flight)
                    }
                })
            }
            if (element === 'onlyWithLuggage') {
                filteredArr.filter((flight) => {
                    if (flight.baggage.value > 0) {
                        arr.unshift(flight)
                    }
                })
            }
            if (element === 'returnableOnly') {
                filteredArr.filter((flight) => {
                    if (flight.refundable) {
                        arr.unshift(flight)
                    }
                })
            }
        });
        state.selectedAirlines = arr
    }
}

export const actions = {

}

export const getters = {
    getFlights: state => state.flights,
    getSelectedAirlines: state => state.selectedAirlines,
    getFlightsByRate: state => state.flightsByRate
}
