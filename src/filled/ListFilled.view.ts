import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ListFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z\"/>")
      .name("ListFilled")
  }
}

export default ListFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
