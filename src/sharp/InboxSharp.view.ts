import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class InboxSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3H3.01v18H21V3zm-2 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H5V5h14v10z\"/>")
      .name("InboxSharp")
  }
}

export default InboxSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
