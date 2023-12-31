import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TourTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 12V6h11.05l-1.2 3 1.2 3z\" opacity=\".3\"/><path d=\"M21 4H7V2H5v20h2v-8h14l-2-5 2-5zM7 12V6h11.05l-1.2 3 1.2 3H7zm7-3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z\"/>")
      .name("TourTwoTone")
  }
}

export default TourTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
