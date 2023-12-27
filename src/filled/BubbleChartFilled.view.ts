import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BubbleChartFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<circle cx=\"7.2\" cy=\"14.4\" r=\"3.2\"/><circle cx=\"14.8\" cy=\"18\" r=\"2\"/><circle cx=\"15.2\" cy=\"8.8\" r=\"4.8\"/>")
      .name("BubbleChartFilled")
  }
}

export default BubbleChartFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
