import ADT from './hl7/adt'
import ORM from './hl7/orm'
import SIU from './hl7/siu'
import ORU from './hl7/oru'

export default class DefaultEncoder {

  getAdtEncoder(message) {
    return new ADT(message)
  }

  getOrmEncoder(message) {
    return new ORM(message)
  }

  getSiuEncoder(message) {
    return new SIU(message)
  }
  getOruEncoder(message) {
    return new ORU(message)
  }

}
