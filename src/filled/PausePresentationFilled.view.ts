import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PausePresentationFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 19.1H3V5h18v14.1zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"/><path d=\"M9 8h2v8H9zm4 0h2v8h-2z\"/>")
      .name("PausePresentationFilled")
  }
}

export default PausePresentationFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
