import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PlagiarismSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<circle cx=\"11.5\" cy=\"14.5\" r=\"1.5\"/><path d=\"M14 2H4v20h16V8l-6-6zm1.04 17.45-1.88-1.88c-1.33.71-3.01.53-4.13-.59a3.495 3.495 0 0 1 0-4.95 3.495 3.495 0 0 1 4.95 0 3.48 3.48 0 0 1 .59 4.13l1.88 1.88-1.41 1.41zM13 9V3.5L18.5 9H13z\"/>")
      .name("PlagiarismSharp")
  }
}

export default PlagiarismSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
