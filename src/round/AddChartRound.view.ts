import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AddChartRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 17c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1z\"/><path d=\"M20 10c-.55 0-1 .45-1 1v8H5V5h8c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-.55-.45-1-1-1z\"/><path d=\"M7 11v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1zm4-3v8c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1zm5-1h1v1c0 .55.45 1 1 1s1-.45 1-1V7h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V4c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1z\"/>")
      .name("AddChartRound")
  }
}

export default AddChartRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
