import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BlindsTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 9h8v2H6zm0-4h8v2H6zm10 4h2v2h-2zm0-4h2v2h-2z\" opacity=\".3\"/><path d=\"M20 19V3H4v16H2v2h20v-2h-2zM6 5h8v2H6V5zm0 4h8v2H6V9zm12 10H6v-6h8v1.82A1.746 1.746 0 0 0 15 18a1.746 1.746 0 0 0 1-3.18V13h2v6zm0-8h-2V9h2v2zm0-4h-2V5h2v2z\"/>")
      .name("BlindsTwoTone")
  }
}

export default BlindsTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
