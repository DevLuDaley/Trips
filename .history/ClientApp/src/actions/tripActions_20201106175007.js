import axios from 'axios'

export const GET_ALL_TRIPS_REQUEST = GET_ALL_TRIPS_REQUEST;
export const GET_ALL_TRIPS_SUCCESS = GET_ALL_TRIPS_SUCCESS;
export const GET_ALL_TRIPS_ERROR = GET_ALL_TRIPS_ERROR;

const getTripsSuccess = payload => ({
    type: GET_ALL_TRIPS_SUCCESS,
    payload
})

const getTripsError = payload => ({
    type: GET_ALL_TRIPS_ERROR,
    payload
})