import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PlagiarismFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm1.04 17.45-1.88-1.88c-1.33.71-3.01.53-4.13-.59a3.495 3.495 0 0 1 0-4.95 3.495 3.495 0 0 1 4.95 0 3.48 3.48 0 0 1 .59 4.13l1.88 1.88-1.41 1.41zM13 9V3.5L18.5 9H13z\"/><circle cx=\"11.5\" cy=\"14.5\" r=\"1.5\"/>")
      .name("PlagiarismFilled")
  }
}

export default PlagiarismFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
