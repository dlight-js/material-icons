import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TourFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 4H7V2H5v20h2v-8h14l-2-5 2-5zm-6 5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z\"/>")
      .name("TourFilled")
  }
}

export default TourFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
