import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class IndeterminateCheckBoxTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 19h14V5H5v14zm2-8h10v2H7v-2z\" opacity=\".3\"/><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 11h10v2H7z\"/>")
      .name("IndeterminateCheckBoxTwoTone")
  }
}

export default IndeterminateCheckBoxTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
