import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class OndemandVideoFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2zm0 14H3V5h18v12zm-5-6-7 4V7z\"/>")
      .name("OndemandVideoFilled")
  }
}

export default OndemandVideoFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
