import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BackpackSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 8v14H4V8c0-1.86 1.28-3.41 3-3.86V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86zM6 12v2h10v2h2v-4H6z\"/>")
      .name("BackpackSharp")
  }
}

export default BackpackSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
