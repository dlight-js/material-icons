import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MapSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 5.1 9 3 3 5.02v16.2l6-2.33 6 2.1 6-2.02V2.77L15 5.1zm0 13.79-6-2.11V5.11l6 2.11v11.67z\"/>")
      .name("MapSharp")
  }
}

export default MapSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
