import Encoder from '../../encoder'
import O01Config from '../../../config/default-hl7/orm/o01-config.json'
// import A08Config from '../../../config/default-hl7/adt/a08-config.json'
// import A40Config from '../../../config/default-hl7/adt/a40-config.json'

export default class ORM {

    constructor(message) {
        this.encoder = new Encoder(message)
    }

    getO01(config) {
        this.encoder.setConfig(config ? config : O01Config)
        return this.encoder
    }

    // getA08(config) {
    //     this.encoder.setConfig(config ? config : A08Config)
    //     return this.encoder
    // }

    // getA40(config) {
    //     this.encoder.setConfig(config ? config : A40Config)
    //     return this.encoder
    // }

}
