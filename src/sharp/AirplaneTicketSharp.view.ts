import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AirplaneTicketSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 4H2.01v6c1.1 0 1.99.9 1.99 2s-.89 2-2 2v6h20V4zm-4.27 9.3-8.86 2.36-1.66-2.88.93-.25 1.26.99 2.39-.64-2.4-4.16 1.4-.38 4.01 3.74 2.44-.65a.967.967 0 0 1 1.18.68.988.988 0 0 1-.69 1.19z\"/>")
      .name("AirplaneTicketSharp")
  }
}

export default AirplaneTicketSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
