import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ViewListSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 14h4v-4H3v4zm0 5h4v-4H3v4zM3 9h4V5H3v4zm5 5h13v-4H8v4zm0 5h13v-4H8v4zM8 5v4h13V5H8z\"/>")
      .name("ViewListSharp")
  }
}

export default ViewListSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
