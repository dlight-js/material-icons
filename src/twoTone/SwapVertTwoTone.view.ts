import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SwapVertTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3 5 6.99h3V14h2V6.99h3L9 3z\"/>")
      .name("SwapVertTwoTone")
  }
}

export default SwapVertTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
