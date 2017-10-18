import {error, log} from '../../../shared/logger';
import app from '../../../App';

let state = {};

export default () => {
    this.BeforeFeatures(() => {
        log('hook function: before-features...')        
    })
    this.Before(async (scenario) => {
            try {
                log(`hook function - [before]: scenario=${scenario.getName()}`)
                // testUtil.initState()
                // initState(this)
                state = this.state
            }
            catch (err) {
                error(`hook function - [before]: caught=${err}`)
                throw err
            }
        })
    };