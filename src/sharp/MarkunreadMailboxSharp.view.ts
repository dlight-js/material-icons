import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MarkunreadMailboxSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 6H10v6H8V4h6V0H6v6H2v16h20V6z\"/>")
      .name("MarkunreadMailboxSharp")
  }
}

export default MarkunreadMailboxSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
