import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MmsSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 2H2v20l4-4h16V2zM5 14l3.5-4.5 2.5 3.01L14.5 8l4.5 6H5z\"/>")
      .name("MmsSharp")
  }
}

export default MmsSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
