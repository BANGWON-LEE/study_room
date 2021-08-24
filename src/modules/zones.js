import { createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as menuAPI from '../lib/api/menu';
import { takeLatest } from 'redux-saga/effects';


const [
    LIST_ZONES,
    LIST_ZONES_SUCCES,
    LIST_ZONES_FAILURE,
  
    
] = createRequestActionTypes('zones/LIST_ZONES');

export const listZones = createAction(
    LIST_ZONES,
    ({st_mem_idx, st_seatNumber,st_seatStatus,st_regDate, st_endDate}) => ({st_mem_idx, st_seatNumber,st_seatStatus,st_regDate, st_endDate})
);

const listZonesSaga = createRequestSaga(LIST_ZONES, menuAPI.zone);
export function * zonesSaga(){
    yield takeLatest(LIST_ZONES, listZonesSaga);
}



const initialState = {
    zones: null,
    error: null,
    //lastPage: 1
}

const zones = handleActions(
    {
        [LIST_ZONES_SUCCES] : (state, { payload: zones, meta: response}) => ({
            ...state,
            zones,
            // lastPage: parseInt(response.headers['last-page'], 10)
        }),
        [LIST_ZONES_FAILURE] : (state, {payload : error}) => ({
            ...state,
            error
        }),
        
    },
    initialState
);

export default zones;