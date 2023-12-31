import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ConnectedTvSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M8.57 16H10c0-2.76-2.24-5-5-5v1.43c1.97 0 3.57 1.6 3.57 3.57z\"/><path d=\"M11.55 16H13c0-4.42-3.59-8-8-8v1.45c3.61 0 6.55 2.93 6.55 6.55zM5 14v2h2c0-1.11-.89-2-2-2z\"/><path d=\"M22 3H2v16h6v2h8v-2h6V3zm-2 14H4V5h16v12z\"/>")
      .name("ConnectedTvSharp")
  }
}

export default ConnectedTvSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
