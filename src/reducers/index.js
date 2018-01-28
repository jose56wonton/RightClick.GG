import { combineReducers } from "redux";
import {reducer as formReducer } from 'redux-form';
import {staticReducer} from './static-reducer';
import {playerReducer} from './player-reducer';
import {matchReducer} from './match-reducer';
import {leagueReducer} from './league-reducer';
import {statReducer} from './stat-reducer';
const rootReducer = combineReducers({ 
  static: staticReducer,
  form: formReducer,
  player: playerReducer,
  match: matchReducer,
  stat: statReducer,
  league: leagueReducer
});
export default rootReducer;