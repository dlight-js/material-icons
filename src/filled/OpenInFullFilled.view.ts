import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class OpenInFullFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z\"/>")
      .name("OpenInFullFilled")
  }
}

export default OpenInFullFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
