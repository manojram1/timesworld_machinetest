import { flow } from "lodash";
import { STATE_REDUCER_KEY } from "./constants";

const getCountryDetails = state => state[STATE_REDUCER_KEY];

const countryDetails = (state) => state?.countryDetails?.data;
export const getCountryData = flow(getCountryDetails, countryDetails);
