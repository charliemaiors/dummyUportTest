/**
 * Created by maior on 17/01/2017.
 */
const Uport = window.uportlib.Uport
const appName = 'TestSiteApp'
const uport = new Uport(appName)
const web3 = uport.getWeb3()

/*let uport = new Uport('TestSiteApp');
let web3 = uport.getWeb3()
*/
function login() {
    uport.getUserPersona()
        .then((persona) => {
            let profile = persona.profile
            console.log(profile)
        })
}


