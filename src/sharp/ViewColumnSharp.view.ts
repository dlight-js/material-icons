import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ViewColumnSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z\"/>")
      .name("ViewColumnSharp")
  }
}

export default ViewColumnSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
