import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AirlinesFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 4 2 20h17l3-16h-9zm1.5 10a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z\"/>")
      .name("AirlinesFilled")
  }
}

export default AirlinesFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
