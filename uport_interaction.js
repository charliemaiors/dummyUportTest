/**
 * Created by maior on 17/01/2017.
 */
const Uport = window.uportlib.Uport
const appName = 'TestSiteApp'
const uport = new Uport(appName)
const web3 = uport.getWeb3()

let internalState = {
    addr : "",
    name : "",
    sendToId : "",
    sendToval : ""
}


const uport_login = function () {
    web3.eth.getCoinbase((error, address) => {
        if (error) {
            console.log("Error retrieving base address using web3, cause is %s", error)
            alert("Something went terribly wrong")
            throw error
        }
        console.log("current address is " + address)
        internalState.addr = address
        uport.getUserPersona(address).then((persona) => {
            console.log("persona is  %s and profile name %s", persona, persona.profile.name)
            internalState.name = persona.profile.name
            return true
        }).catch((error) => {
            console.log("Error retrieving personal data on uPort, cause is %s", error)
            alert("Something went terribly wrong")
            throw error
        })
    })
}





