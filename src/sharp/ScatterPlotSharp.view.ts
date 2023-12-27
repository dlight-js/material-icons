import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ScatterPlotSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<circle cx=\"7\" cy=\"14\" r=\"3\"/><circle cx=\"11\" cy=\"6\" r=\"3\"/><circle cx=\"16.6\" cy=\"17.6\" r=\"3\"/>")
      .name("ScatterPlotSharp")
  }
}

export default ScatterPlotSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
