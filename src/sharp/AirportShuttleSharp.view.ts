import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AirportShuttleSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 5H1v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-6-6zM3 11V7h4v4H3zm3 6.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM13 11H9V7h4v4zm5 6.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM15 11V7h1l4 4h-5z\"/>")
      .name("AirportShuttleSharp")
  }
}

export default AirportShuttleSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
