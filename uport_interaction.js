/**
 * Created by maior on 17/01/2017.
 */

import {Uport} from 'uport-lib'

let uport = new Uport('TestSiteApp')
let web3 = uport.getWeb3()

function login() {
    uport.getUserPersona()
        .then((persona) => {
            let profile = persona.profile
            console.log(profile)
        })
}


