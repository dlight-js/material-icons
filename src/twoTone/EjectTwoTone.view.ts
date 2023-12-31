import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class EjectTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 8.6 9.07 13h5.86z\" opacity=\".3\"/><path d=\"M5 17h14v2H5zm7-12L5.33 15h13.34L12 5zm0 3.6 2.93 4.4H9.07L12 8.6z\"/>")
      .name("EjectTwoTone")
  }
}

export default EjectTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
