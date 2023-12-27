import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class OpenInFullSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z\"/>")
      .name("OpenInFullSharp")
  }
}

export default OpenInFullSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
