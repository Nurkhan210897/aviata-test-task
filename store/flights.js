const data = require('../api/results.json')

export const state = () => ({
    flights: []
})

export const mutations = {
    setFlights(state, results) {
        console.log(results);
        // for (let i = 0; i <= results.flights.length; i++) {
        //     // console.log()
        //     if (results.flights[i].itineraries[0][0]) {
        //         console.log(results.flights[i].itineraries[0][0])
        //         let arrayDate = results.flights[i].itineraries[0][0];
        //         let itineraries = {
        //             refundable: arrayDate.refundable,
        //             carrier_name: arrayDate.carrier_name,
        //             carrier: arrayDate.carrier,
        //             price: arrayDate.price,
        //             destCode: arrayDate.stops > 0 ? arrayDate.segments[1].dest_code : arrayDate.segments[0].dest_code,
        //             dest: arrayDate.stops > 0 ? arrayDate.segments[0].dest : arrayDate.segments[0].dest,
        //             origin_code: arrayDate.segments[0].origin_code,
        //             baggage_options: arrayDate.segments[0].baggage_options[0],
        //             route: arrayDate.segments[0].origin_code,
        //             stops: arrayDate.stops,
        //             dep_date: arrayDate.dep_date,
        //             arr_date: arrayDate.arr_date,
        //             traveltime: arrayDate.traveltime,
        //             layovers: arrayDate.layovers[0],
        //             originRoute: arrayDate.stops > 0 ? arrayDate.segments[1].origin : '',
        //             arr_time_iso: arrayDate.stops > 0 ? arrayDate.segments[1].arr_time_iso : '',
        //             dep_time: arrayDate.segments[0].dep_time,
        //             arr_time: arrayDate.segments[0].arr_time,
        //         };
        //         console.log(itineraries);
        //     }
        // }
        state.flights = data.flights
    }
}

export const actions = {

}

export const getters = {
    getFlights: state => state.flights
}
