<template>
  <div class="flight-card">
    <div class="flight-card_row">
      <div class="flight-card_body">
        <div class="flight-card_row">
          <div class="flight-card_logo">
            <img
              :src="`https://aviata.kz/static/airline-logos/80x80/${flight.carrier}.png`"
              alt=""
            />
            <p>{{ flight.carrier_name }}</p>
          </div>
          <div class="flight-card_route">
            <div class="flight-card_route_time">
              <p class="text --dark --medium">
                {{ flight.dep_date | formatDate("dayAndMounth") }}
              </p>
              <p class="text --dark --big">
                {{ flight.dep_date | formatDate("time") }}
              </p>
            </div>
            <div class="flight-card_route_flight">
              <div class="flight-card_route_flight_info">
                <p class="text --silver --small">{{ flight.dest_code }}</p>
                <p class="text --dark --medium">
                  {{ flightTime(flight.traveltime) }}
                </p>
                <p class="text --silver --small">{{ flight.arr_code }}</p>
              </div>
              <div class="line">
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
              </div>
              <p class="text --orange --medium">
                через {{ flight.destCity }} {{ flightTime(flight.layovers) }}
              </p>
            </div>
            <div class="flight-card_route_time">
              <p class="text --dark --medium">
                {{ flight.arr_date | formatDate("dayAndMounth") }}
              </p>
              <p class="text --dark --big">
                {{ flight.arr_date | formatDate("time") }}
              </p>
            </div>
          </div>
        </div>
        <div class="flight-card_details">
          <a href="#" class="text --blue --medium --underline"
            >Детали перелета</a
          >
          <a href="#" class="text --blue --medium --underline"
            >Условия тарифа</a
          >
          <a href="#" class="text --silver --medium"
            ><img src="@/assets/images/none-ref.svg" alt="" /> невозвратный</a
          >
        </div>
      </div>
      <div class="flight-card-choose_flight">
        <p class="text --big">{{ flight.price.amount }} ₸</p>
        <button type="button" class="btn btn-green">Выбрать</button>
        <p class="text --silver --medium">Цена за всех пассажиров</p>
        <div class="flight-card-choose_flight_details">
          <p class="text --dark --medium" v-if="flight.baggage.value">{{ flight.baggage.value }} кг</p>
          <p class="text --dark --medium --text-center" v-else>Нет багажа</p>
          <button class="btn btn-light_blue text --medium --blue">
            + Добавить багаж
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flight: {
      type: Object,
      default: {},
    },
  },

  computed: {},

  methods: {
    flightTime(time) {
      let traveltime = time;
      let hours = Math.floor(traveltime / 3600);
      let minutes = (traveltime % 3600) / 60;
      let receivedЕime = hours ? hours + " ч " : "";
      if (minutes) {
        receivedЕime += minutes + " м";
      }
      return receivedЕime;
    },
  },
};
</script>

<style lang="scss">
.flight-card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  margin-bottom: 12px;
  background-color: #fff;
  &_row {
    display: flex;
    justify-content: space-between;
  }
  &_body {
    width: 100%;
    max-width: 640px;
    padding: 40px 42px 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &_logo {
    display: flex;
    align-items: center;
    flex: 0 0 35%;
    img {
      max-width: 15px;
      margin-right: 12px;
    }
    p {
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      display: flex;
      align-items: center;
      color: #202123;
    }
  }
  &_route {
    flex: 0 0 65%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    &_flight {
      max-width: 168px;
      &_info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3.5px;
      }
      .line {
        width: 168px;
        height: 1px;
        background-color: #b9b9b9;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5px;
      }
      .circle {
        width: 3px;
        height: 3px;
        border: 1px solid #b9b9b9;
        display: block;
        border-radius: 50%;
        background-color: #fff;
      }
    }
  }
  &_details {
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      margin-right: 25px;
      img {
        margin-right: 8px;
      }
      &:last-child {
        margin-left: 20px;
      }
    }
  }
  &-choose_flight {
    width: 100%;
    max-width: 200px;
    background-color: #f5f5f5;
    padding: 12px 20px 15px;
    text-align: center;
    p {
      margin-bottom: 12px;
    }
    .btn-green {
      margin-bottom: 8px;
    }
    &_details {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        margin-bottom: 0;
      }
    }
  }
}
</style>
