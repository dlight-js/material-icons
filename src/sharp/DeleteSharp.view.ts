import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DeleteSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 21h12V7H6v14zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\"/>")
      .name("DeleteSharp")
  }
}

export default DeleteSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
