import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ScienceSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19.8 18.4 14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z\"/>")
      .name("ScienceSharp")
  }
}

export default ScienceSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
