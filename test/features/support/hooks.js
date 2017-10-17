import {error, log} from '../../../shared/logger';
import _ from 'lodash';

let state = {};
export default () => {
    this.BeforeFeatures(() => {
        log('hook function: before-features...')
        require('../../../App').default
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