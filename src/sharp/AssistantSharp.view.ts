import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AssistantSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 2H3v18h6l3 3 3-3h6V2zm-7.12 10.88L12 17l-1.88-4.12L6 11l4.12-1.88L12 5l1.88 4.12L18 11l-4.12 1.88z\"/>")
      .name("AssistantSharp")
  }
}

export default AssistantSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
