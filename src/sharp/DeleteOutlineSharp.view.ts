import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DeleteOutlineSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 21h12V7H6v14zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z\"/>")
      .name("DeleteOutlineSharp")
  }
}

export default DeleteOutlineSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
